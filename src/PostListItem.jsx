// 記事一覧画面に表示される記事サムネイルコンポーネント
function PostListItem({ post }) {

  // 記事作成日時フォーマット
  const date = new Date(post.createdAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const formattedDate = `${year}/${month}/${day}`;

  return (

    <div class='w-3/4 m-auto p-9 border border-gray-700'>
      <div class='flex justify-between mx-auto container mb-3'>
      <p class='text-gray-500 text-sm'>{formattedDate}</p>
        <div class='text-gray-700'>{post.categories.map((category) => (
          <span key={category} class="m-2 text-blue-600 border border-blue-600 p-1.5 rounded-md">{category}</span>
      ))}</div>
      </div>
      <h2 class='text-gray-700 text-2xl font-medium mb-3'>{post.title}</h2>
      <p class='text-gray-700 line-clamp-2' dangerouslySetInnerHTML={{__html: post.content}}/>

    </div>

  );
};
export default PostListItem;
