import { useEffect, useState } from 'react';
import PostListItem from "./PostListItem";

// 記事をリストで表示するコンポーネント
function PostList() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
      const data = await res.json()
      setPosts(data.posts)
    }

    fetcher()
  }, [])

  console.log(posts);



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
