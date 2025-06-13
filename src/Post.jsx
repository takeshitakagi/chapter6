import { useParams } from "react-router-dom";
import { formatDate } from "./formatData";
import { useEffect, useState } from "react";

function Post() {
  const { id } = useParams();

  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(false);
      setError(false);
      if (id) {
        try {
          const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`)

          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const data = await res.json();
          setPostData(data.post);
        } catch (error) {
          console.error("記事の取得に失敗しました:", error);
          setPostData(null);
          setError(true);
        } finally {
          setIsLoading(true);
        }
      } else {
        console.log("IDがまだ取得できていません。APIを呼び出しません。");
      }
    }

    fetcher()
  }, [id])

  if (!isLoading) {
    return (
      <div>記事を読み込み中...</div>
    );
  }

  if (error) {
    return (
      <div class='text-center text-3xl mt-16'>エラーが発生しました。</div>
    );
  }


  const post = postData;
  const formattedDate = formatDate(post.createdAt);

  return (

    <>
      <div class='max-w-3xl mx-auto p-4'>
        <img src={post.thumbnailUrl} alt="" class='mb-4 mt-4' />
        <div class='flex justify-between mx-auto mb-6 items-center'>
          <p class='text-gray-500 text-sm'>{formattedDate}</p>
          <div>{post.categories.map((category) => (
            <span key={category} class='m-2 text-blue-600 border border-blue-600 p-1.5 rounded-md'>{category}</span>
          )) }</div>
        </div>
        <h1 class='text-gray-700 text-2xl font-medium mb-5'>{post.title}</h1>
        <p class='text-gray-700' dangerouslySetInnerHTML={{__html: post.content}} />

      </div>

    </>

  );
};
export default Post;
