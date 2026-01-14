import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { UserContextProvider } from "./context/UserContext.jsx";
import "./index.css";
import BlogLayout from "./Layouts/BlogLayout.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import SignUpPage from "./pages/Register/SignUpPage.jsx";
import PostsPage from "./pages/Posts/PostsPage.jsx";
import PostPage from "./pages/Post/PostPage.jsx";
import WritePostPage from "./pages/WritePosts/WritePostPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<BlogLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="posts/:postId" element={<PostPage />} />
            <Route path="write" element={<WritePostPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  </StrictMode>,
);
