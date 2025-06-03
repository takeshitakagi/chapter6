import { posts } from './data';
import PostListItem from "./PostListItem";

// 記事をリストで表示するコンポーネント
function PostList() {

  return (
    <div>
      {posts.map((post) => (
        <li>
          <PostListItem post={post} />
        </li>
      ))}
    </div>
  );
};
export default PostList;
