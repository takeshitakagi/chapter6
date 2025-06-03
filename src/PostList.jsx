import { posts } from './data';
import PostListItem from "./PostListItem";

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
