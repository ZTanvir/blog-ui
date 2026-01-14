import { useParams } from "react-router";
import postService from "../../services/postService";
import useSWR from "swr";

const PostPage = () => {
  const { postId } = useParams();
  const { data, error, isLoading } = useSWR(`api/posts/${postId}`, () =>
    postService.getSinglePost(postId),
  );
  console.log(data, error, isLoading);

  return <div>post page: {postId}</div>;
};
export default PostPage;
