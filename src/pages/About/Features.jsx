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
const Features = () => {
  return (
    <section className="space-y-4 rounded-lg px-4 py-8 shadow-sm">
      <h2 className="text-xl font-bold">Feature</h2>
      {BlogFeatures.map((feature, index) => (
        <div key={index} className="flex items-center gap-1">
          <IoIosCheckmarkCircle
            size={19}
            color="#0284c7"
            className="mt-auto mb-auto h-full"
          />
          {feature.name}
        </div>
      ))}
    </section>
  );
};
export default Features;
