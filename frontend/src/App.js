import Header from "./Components/Header";
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Auth from "./Components/Auth";
import Blogs from "./Components/Blogs";
import UserBlogs from "./Components/UserBlogs";
import BlogDetail from "./Components/BlogDetail";
import AddBlog from "./Components/AddBlog";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

function App() {
  const dispath = useDispatch();


  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if(localStorage.getItem("userId")){
      dispath(authActions.login())
    }
  }, [dispath])
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {!isLoggedIn ? <Route path="/auth" element={<Auth />} /> :
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myblogs" element={<UserBlogs />} />
              <Route path="/myblogs/:id" element={<BlogDetail />} />
            </>}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
