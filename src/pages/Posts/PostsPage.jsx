import useSWR from "swr";
import { useState } from "react";
import postService from "../../services/postService";
import PostCardsList from "../../components/PostCardsList";
import Spinner from "../../components/Spinner";
import NotFound from "../../components/NotFound";
import Pagination from "../../components/Pagination";
import { useSearchParams } from "react-router";

const PostsPage = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const { data, error, isLoading, mutate } = useSWR(
    `api/posts?page=${page}`,
    () => postService.getPosts(page),
  );
  const [searchPost, setSearchPost] = useState("");
  // filter post based on user search input
  const posts =
    data &&
    data.posts.filter((post) =>
      post.title.toLowerCase().includes(searchPost.toLowerCase()),
    );

  const totalPost = data?.totalPost;
  const isLastPage = totalPost && page * 5 < totalPost;

  const handleRetryBtn = () => {
    mutate();
  };

  if (error)
    return <NotFound onRetryBtn={handleRetryBtn} errorMsg={error.message} />;

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
    <div className="flex h-full w-full flex-col">
      <div>
        <h1 className="pt-4 text-center text-4xl font-bold text-gray-700">
          Available <span className="text-sky-500">dev</span> blog articles:
        </h1>
        <form className="mt-6 px-4">
          <div className="flex flex-col">
            <input
              type="text"
              value={searchPost}
              onChange={(e) => setSearchPost(e.target.value)}
              placeholder="Search by title.."
              className="flex-1 rounded-sm border border-gray-200 px-2 py-2 font-light outline-gray-300"
            />
          </div>
        </form>
        {posts.length ? (
          <PostCardsList posts={posts} />
        ) : (
          <p className="semi-bold p-4 text-center text-xl">
            Stories not found.
          </p>
        )}
      </div>
      <div className="mt-auto flex justify-center">
        {Number(page) !== 1 && (
          <Pagination
            handleOnClick={() => mutate()}
            type="prev"
            text="prev"
            pageLink={`/posts?page=${Number(Number(page) - 1)}`}
          />
        )}
        {isLastPage && (
          <Pagination
            handleOnClick={() => mutate()}
            type="next"
            text="next"
            pageLink={`/posts?page=${Number(Number(page) + 1)}`}
          />
        )}
      </div>
    </div>
  );
};
export default PostsPage;
