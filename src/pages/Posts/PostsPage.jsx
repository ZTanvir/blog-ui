import useSWR from "swr";
import postService from "../../services/postService";
import PostCardsList from "../../components/PostCardsList";
import Spinner from "../../components/Spinner";
const PostsPage = () => {
  const { data, error, isLoading } = useSWR("api/posts", postService.getPosts);

  if (error) return <p>{error.message}</p>;
  if (isLoading)
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner
          isVisible={true}
          width={80}
          height={80}
          color={"#3498db"}
          secondaryColor={"#f3f3f3"}
        />
      </div>
    );
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
