import { useParams } from "react-router-dom";
import { posts } from './data';
import { formatDate } from "./formatData";

function Post() {
  const { id } = useParams();
  console.log(id);

  const post = posts.find((post) => post.id === parseInt(id))
  if (!post) {
    return (
      <div class='text-center text-3xl mt-16'>記事が見つかりませんでした。</div>

    );
  }

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
