import PostCard from "./PostCard";
const PostCardsList = ({ posts }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,425px),1fr))] gap-10 p-4">
      {posts && posts.map((post) => <PostCard key={post.id} postData={post} />)}
    </div>
  );
};
export default PostCardsList;
