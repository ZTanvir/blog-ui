import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const BlogLayout = () => {
  return (
    <div className="flex h-screen flex-col">
      <header className="sticky top-0 bg-gray-900">
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-gray-900">
        <Footer />
      </footer>
    </div>
  );
};
export default BlogLayout;
