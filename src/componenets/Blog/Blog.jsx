import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark ,handleMarkAsRead}) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4 ">
      <img className="w-full" src={cover} alt={title} />
      <div className="flex justify-between  mb-4">
        {/* author details */}
        <div className="flex gap-4 items-center">
          <img className="w-14 rounded-full" src={author_img} alt={author} />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p className="text-sm">{posted_date}</p>
          </div>
        </div>
        {/* reading time and icon */}
        <div className="flex items-center justify-between">
          <span className="text-sm">{reading_time} min read</span>
          <button
            className="ml-2 text-xl"
            onClick={() => handleAddToBookmark(blog)}
          >
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span className="text-sm" key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button onClick={()=> handleMarkAsRead(reading_time)} className="text-purple-600 font-bold underline">Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blog;
