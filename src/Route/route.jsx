// Updated Routers.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogLanding from "../Home/home";
import BlogPost from "../blogPost";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogLanding />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
};

export default Routers
