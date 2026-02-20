import { useParams } from "react-router";
import postService from "../../services/postService";
import useSWR from "swr";
import Spinner from "../../components/Spinner";
import Tag from "../../components/Tag";
import Comment from "./Comment";
import CommentList from "./CommentList";
import helperFunction from "../../utils/helperFunction";

const PostPage = () => {
  const { postId } = useParams();
  const { data, error, isLoading } = useSWR(`api/posts/${postId}`, () =>
    postService.getSinglePost(postId),
  );

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
        <div className="p-4">
          <h1 className="mb-4 text-4xl font-bold text-gray-600">
            {data.title}
          </h1>
          <p className="mb-1">
            <span className="text-neutral-500 italic">Publish by</span>{" "}
            {data.user.username} on{" "}
            <span className="font-semibold">
              {new Date(data.createdAt).toDateString()}
            </span>
          </p>
          <p className="mb-2">
            <span className="text-neutral-500 italic">Last updated </span> on{" "}
            <span className="font-semibold">
              {new Date(data.createdAt).toDateString()}
            </span>
          </p>

          <div className="mb-2 flex gap-2">
            {data.tag.map((t, index) => (
              <Tag
                key={index}
                tag={t}
                bgColorClass="bg-gray-500"
                textColorClass="text-white"
              />
            ))}
          </div>
          <article
            className="prose my-12"
            dangerouslySetInnerHTML={{
              __html: helperFunction.unsanitized(data.content),
            }}
          />
          <hr className="my-4 text-gray-200" />
          <div>
            <h3 className="my-4 text-2xl font-semibold sm:my-8">Comments</h3>
            <Comment />
            <CommentList postId={postId} />
          </div>
        </div>
      )}
    </>
  );
};
export default PostPage;
