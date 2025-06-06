import { posts } from './data';
import PostListItem from "./PostListItem";

// 記事をリストで表示するコンポーネント
function PostList() {

  return (
    <div>
      {posts.map((post) => (
        <li class='list-none mt-10 max-w-3xl mx-auto'>
          <PostListItem post={post} />
        </li>
      ))}
    </div>
  );
};
export default PostList;
