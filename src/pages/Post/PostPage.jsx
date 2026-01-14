import { useParams } from "react-router";
import postService from "../../services/postService";
import useSWR from "swr";
import Spinner from "../../components/Spinner";

const PostPage = () => {
  const { postId } = useParams();
  const { data, error, isLoading } = useSWR(`api/posts/${postId}`, () =>
    postService.getSinglePost(postId),
  );
  console.log(data);

  if (error) return <p>{error.message}</p>;
  if (isLoading)
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2">
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
    <>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <div></div>
          <div>{data.content}</div>
        </div>
      )}
    </>
  );
};
export default PostPage;
