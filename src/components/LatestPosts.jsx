import useSWR from "swr";
import postService from "../services/postService";
import PostCardsList from "./PostCardsList";
import { SlRefresh } from "react-icons/sl";
import Spinner from "./Spinner";

const LatestPosts = ({ limit, order }) => {
  const { data, isLoading, error, mutate } = useSWR(`api/posts?sort=date`, () =>
    postService.getLatestPosts(limit, order),
  );

  if (error) {
    return <p>{error.message}</p>;
  }
  if (isLoading)
    return (
      <div className="flex h-[400px] flex-col items-center justify-center gap-2">
        <Spinner
          isVisible={true}
          width={80}
          height={80}
          color={"#3498db"}
          secondaryColor={"#f3f3f3"}
        />
      </div>
    );

  const handleRefresh = () => {
    mutate();
  };

  return (
    <div>
      {data && (
        <div className="my-8">
          <div className="mb-4 flex flex-wrap justify-between gap-2">
            <h3 className="text-3xl font-bold">Latest Posts </h3>
            <span
              onClick={handleRefresh}
              className="flex items-center gap-2 text-sky-500 hover:cursor-pointer hover:text-sky-600"
            >
              <SlRefresh />
              Refresh
            </span>
          </div>
          <PostCardsList posts={data} />
        </div>
      )}
    </div>
  );
};
export default LatestPosts;
