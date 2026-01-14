import { useState } from "react";

const Comment = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div className="mx-auto my-4 w-[90%] rounded bg-neutral-100/50 p-4 shadow-sm">
      <h4 className="mb-4 text-xl font-semibold">Add a comment</h4>
      <form>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="username">Name</label>
          <input
            className="w-full rounded border border-gray-300 bg-white p-2 shadow-sm outline-sky-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="username"
          />
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="userComment">Comment</label>
          <textarea
            className="w-full rounded border border-gray-300 bg-white p-2 shadow-sm outline-sky-300"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            name="comment"
            id="userComment"
            rows={6}
            placeholder="Write your comment..."
          ></textarea>
        </div>
        <button
          className="w-full rounded-lg bg-sky-600 px-3 py-2 text-white duration-300 hover:cursor-pointer hover:bg-sky-500 disabled:bg-sky-500 disabled:hover:cursor-not-allowed sm:w-fit"
          type="submit"
        >
          Add comment
        </button>
      </form>
    </div>
  );
};
export default Comment;
