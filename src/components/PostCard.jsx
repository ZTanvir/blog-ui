import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

const PostCard = ({ postData }) => {
  const postDate =
    Date.parse(`${postData.createdAt}`) &&
    new Date(`${postData.createdAt}`).toDateString();
  return (
    <section className="space-y-3 rounded-lg px-5 py-6 shadow-sm">
      <h2 className="text-xl font-bold text-sky-500">{postData.title}</h2>
      <p className="text-gray-600">{postData.excerpt}</p>
      <div className="flex justify-between text-sm font-light text-gray-500">
        <span>{postData?.user.username}</span>
        <span>{postDate}</span>
      </div>

      <hr className="my-4 text-gray-200" />

      <Link
        to={`/posts/${postData.id}`}
        className="flex items-center gap-1 text-sky-500"
      >
        Read more <FaArrowRightLong />
      </Link>
    </section>
  );
};
export default PostCard;
