import Mission from "./Mission";
import Features from "./Features";
import Technologies from "./Technologies";

const AboutPage = () => {
  return (
    <div className="space-y-6 p-4">
      <h1 className="text-center text-2xl font-bold md:text-4xl">
        About Our Blog
      </h1>
      <div className="mt-4 mr-auto ml-auto h-1 w-20 bg-sky-500 sm:w-25"></div>
      <div className="space-y-6">
        <Mission />
        <Features />
        <Technologies />
      </div>
    </div>
  );
};
export default AboutPage;
