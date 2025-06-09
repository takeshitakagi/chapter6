import { useEffect, useState } from 'react';
import PostListItem from "./PostListItem";

// 記事をリストで表示するコンポーネント
function PostList() {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json()
        setPosts(data.posts)
      } catch (error) {
        console.error("一覧の取得に失敗しました:", error);
        setPosts([]);
        setError(true);
      }
    }

    fetcher()
  }, [])

  if (error) {
    return (
      <div class='text-center text-3xl mt-16'>エラーが発生しました。</div>
    );
  }


  return (
    <div>
      {posts.map((post) => (
        <li key={post.id} class='list-none mt-10 max-w-3xl mx-auto'>
          <PostListItem post={post} />
        </li>
      ))}
    </div>
  );
};
export default PostList;
