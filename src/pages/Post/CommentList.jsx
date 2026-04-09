import useSWR from "swr";
import commentService from "../../services/commentService";
import Spinner from "../../components/Spinner";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { decode } from "html-entities";
import { MdDelete } from "react-icons/md";
import { UseUser } from "../../context/UserContext";
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";

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
              <Comment key={c?.id} postId={postId} commentData={c} />
            ))
          ) : (
            <EmptyComment />
          )}
        </div>
      )}
    </>
  );
};

function Comment({ postId, commentData }) {
  const { user } = UseUser();
  const { trigger, isMutating } = useSWRMutation(
    `/api/comments/post/${postId}/comments/${commentData.id}`,
    commentService.deleteComment,
  );

  const handleDeleteBtn = async () => {
    await trigger();
    mutate(`api/comments/post/${postId}`);
  };

  return (
    <article
      className="mx-auto my-4 w-[90%] rounded bg-neutral-100/50 p-4 text-gray-600 shadow-sm sm:my-8 sm:p-6"
      key={commentData?.id}
    >
      <header className="flex justify-between text-sm">
        <div>
          <p>
            By <strong>{commentData?.user?.username}</strong>
          </p>
          <p className="">
            <time>{new Date(commentData.createdAt).toDateString()}</time>
            <time className="ml-2">
              {new Date(commentData?.createdAt).toLocaleTimeString()}
            </time>
          </p>
        </div>
        {user?.id === commentData?.userId && (
          <button
            disabled={isMutating}
            onClick={handleDeleteBtn}
            className="hover:cursor-pointer hover:opacity-80 disabled:opacity-80"
          >
            <MdDelete title="delete comment" size={25} color="#ff6467" />
          </button>
        )}
      </header>
      <div className="mt-2">
        <>
          <div>{decode(commentData?.comment)}</div>
          {/* Renders as: Greetings <b>User</b> */}
        </>
      </div>
    </article>
  );
}

function EmptyComment() {
  return (
    <div className="mx-auto my-4 flex w-[90%] flex-col items-center justify-center rounded bg-neutral-100/50 p-4 shadow-sm sm:my-8 sm:p-6">
      <LiaCommentDotsSolid size={70} color="gray" />
      <p className="text-center text-gray-600">
        No comments yet. Be the first to share your thoughts!
      </p>
    </div>
  );
}

export default CommentList;
