import Header from "./Components/Header";
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Auth from "./Components/Auth";
import Blogs from "./Components/Blogs";
import UserBlogs from "./Components/UserBlogs";
import BlogDetail from "./Components/BlogDetail";
import AddBlog from "./Components/AddBlog";
import {useSelector} from "react-redux";

function App() {
  const isLoggedIn = useSelector( state => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/myblogs" element={<UserBlogs />} />
          <Route path="/myblogs/:id" element={<BlogDetail />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
