import PropTypes from "prop-types";

import React, { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
const Blogs = ({ handleAddToBookmark ,handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
  fetch("/blogs.json")
    .then((res) => res.json())
    .then((data) => setBlogs(data));
}, []);
  return (
    <div className="md:w-2/3">
      <div className="text-4xl">
        Blogs : {blogs.length}
        {blogs.map((blog) => (
          <Blog 
          key={blog.id} 
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTYpes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blogs;
