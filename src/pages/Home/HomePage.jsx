import Hero from "./Hero";
import LatestPosts from "../../components/LatestPosts";
import HomeDetails from "./HomeDetails";
const HomePage = () => {
  return (
    <>
      <Hero />

      <LatestPosts limit={6} order={"desc"} />

      <HomeDetails />
    </>
  );
};
export default HomePage;
