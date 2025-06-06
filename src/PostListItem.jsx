import { Link } from "react-router-dom";
import { formatDate } from "./formatData";

// 記事一覧画面に表示される記事サムネイルコンポーネント
function PostListItem({ post }) {

  const formattedDate = formatDate(post.createdAt);

  return (

    <>
      <Link to={`/TopPage/${post.id}`}>
        <div class='p-9 border border-gray-500'>
            <div class='flex justify-between mx-auto mb-3'>
            <p class='text-gray-500 text-sm'>{formattedDate}</p>
              <div class='text-gray-700'>{post.categories.map((category) => (
                <span key={category} class="m-2 text-blue-600 border border-blue-600 p-1.5 rounded-md">{category}</span>
            ))}</div>
            </div>
            <h2 class='text-gray-700 text-2xl font-medium mb-3'>{post.title}</h2>
            <p class='text-gray-700 line-clamp-2' dangerouslySetInnerHTML={{__html: post.content}}/>
        </div>
      </Link>
    </>

  );
};
export default PostListItem;
