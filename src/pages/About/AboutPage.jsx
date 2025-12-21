import Mission from "./Mission";
import Features from "./Features";
import Technologies from "./Technologies";

const AboutPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-center text-4xl font-bold">About Our Blog</h1>
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
