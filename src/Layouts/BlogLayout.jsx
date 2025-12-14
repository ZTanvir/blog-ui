import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const BlogLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0">
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default BlogLayout;
