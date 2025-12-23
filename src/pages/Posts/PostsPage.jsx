import useSWR from "swr";
import { useState } from "react";
import postService from "../../services/postService";
import PostCardsList from "../../components/PostCardsList";
import Spinner from "../../components/Spinner";
const PostsPage = () => {
  const { data, error, isLoading } = useSWR("api/posts", postService.getPosts);
  const [searchPost, setSearchPost] = useState("");

  const posts =
    data &&
    data.filter((post) =>
      post.title.toLowerCase().includes(searchPost.toLowerCase()),
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
    <div>
      <h1 className="text-center text-4xl font-bold text-gray-700">
        Available <span className="text-sky-500">dev</span> blog articles:
      </h1>
      <form>
        <div className="flex flex-col lg:items-center">
          <input
            type="text"
            value={searchPost}
            onChange={(e) => setSearchPost(e.target.value)}
            placeholder="Search by title.."
            className="w-full max-w-sm rounded-sm border border-gray-200 px-2 py-2 font-light outline-gray-300"
          />
        </div>
      </form>
      {posts && <PostCardsList posts={posts} />}
    </div>
  );
};
export default PostsPage;
