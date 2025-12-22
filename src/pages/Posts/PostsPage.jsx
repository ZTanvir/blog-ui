import useSWR from "swr";
import postService from "../../services/postService";
import PostCardsList from "../../components/PostCardsList";
const PostsPage = () => {
  const { data, error, isLoading } = useSWR("api/posts", postService.getPosts);

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading..</p>;

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-gray-700">
        Available <span className="text-sky-500">dev</span> blog articles:
      </h1>
      {data && <PostCardsList posts={data} />}
    </div>
  );
};
export default PostsPage;
