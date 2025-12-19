import { IoIosCheckmarkCircle } from "react-icons/io";

const BlogFeatures = [
  {
    name: "User authentication",
  },
  {
    name: "Create, edit, and delete blog posts",
  },
  {
    name: "Comment system for engaging with posts",
  },
  {
    name: "Responsive design for all devices",
  },
];

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">About Our Blog</h1>
      <div className="mt-4 mr-auto ml-auto h-1 w-20 bg-sky-500 sm:w-25"></div>

      <section className="rounded-lg px-4 py-8 shadow-lg">
        <h2 className="text-xl font-bold">Our Missing</h2>
        <p className="mt-3">
          Welcome to our blog platform! Our mission is to create a space where
          people can share ideas, knowledge, and experiences. We believe in the
          power of community and open dialogue.
        </p>
        <p className="mt-3">
          This platform was built with modern technologies to provide a seamless
          and enjoyable experience for both readers and content creators.
        </p>
      </section>

      <section className="rounded-lg px-4 py-8 shadow-lg">
        <h2 className="text-xl font-bold">Feature</h2>
        {BlogFeatures.map((feature) => (
          <div className="mt-4 flex items-center gap-1">
            <IoIosCheckmarkCircle
              size={19}
              color="#0284c7"
              className="mt-auto mb-auto h-full"
            />
            {feature.name}
          </div>
        ))}
      </section>
    </div>
  );
};
export default AboutPage;
