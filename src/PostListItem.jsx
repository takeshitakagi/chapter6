function PostListItem({ post }) {


  console.log(post);

  const date = new Date(post.createdAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const formattedDate = `${year}/${month}/${day}`;

  const maxLength = 60;
  const truncatedContent = post.content.substring(0, maxLength);
  const finalContent = post.content.length > maxLength ? truncatedContent + '...' : post.content;

  return (

    <div class='w-3/4 m-auto p-9 border-1 border-gray-700'>
      <div class='flex justify-between mx-auto container mb-3'>
      <p class='text-gray-500 text-sm'>{formattedDate}</p>
        <div class='text-gray-700'>{post.categories.map((category) => (
          <span key={category} class="m-3 text-blue-600 border-1 border-blue-600 rounded-xs p-1.5">{category}</span>
      ))}</div>
      </div>
      <h2 class='text-gray-700 text-2xl font-medium mb-3'>{post.title}</h2>
      <p class='text-gray-700' dangerouslySetInnerHTML={{__html: finalContent}}/>

    </div>

  );
};
export default PostListItem;
