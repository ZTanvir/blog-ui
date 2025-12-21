import PostCard from "./PostCard";
const PostCardsList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {posts && posts.map((post) => <PostCard key={post.id} postData={post} />)}
    </div>
  );
};
export default PostCardsList;
