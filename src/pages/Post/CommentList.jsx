import useSWR from "swr";
import commentService from "../../services/commentService";
import Spinner from "../../components/Spinner";
import { LiaCommentDotsSolid } from "react-icons/lia";

const CommentList = ({ postId }) => {
  const { data, error, isLoading } = useSWR(`api/comments/post/${postId}`, () =>
    commentService.getComments(postId),
  );

  if (error) {
    return <p>{error.message}</p>;
  }
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
          {data.length ? (
            data.map((c) => (
              <article
                className="mx-auto my-4 w-[90%] rounded bg-neutral-100/50 p-4 text-gray-600 shadow-sm sm:my-8 sm:p-6"
                key={c.id}
              >
                <header className="text-sm">
                  <p>
                    By <strong>{c?.user?.username}</strong>
                  </p>
                  <p className="">
                    <time>{new Date(c.createdAt).toDateString()}</time>
                    <time className="ml-2">
                      {new Date(c.createdAt).toLocaleTimeString()}
                    </time>
                  </p>
                </header>
                <div className="mt-2">
                  <p>{c.comment}</p>
                </div>
              </article>
            ))
          ) : (
            <div className="mx-auto my-4 flex w-[90%] flex-col items-center justify-center rounded bg-neutral-100/50 p-4 shadow-sm sm:my-8 sm:p-6">
              <LiaCommentDotsSolid size={70} color="gray" />
              <p className="text-center text-gray-600">
                No comments yet. Be the first to share your thoughts!
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default CommentList;
