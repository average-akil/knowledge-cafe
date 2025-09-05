import PropTypes from "prop-types";
import React from "react";

const Bookmarks = ({ bookmarks = [], readingTime = 0 }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-4 pt-4">
      <div>
        <h3 className="text-4xl">Reading Time : {readingTime}</h3>
      </div>
      <h2 className="text-3xl text-center bg-gray-300">Bookmarked blogs : {bookmarks.length}</h2>
      {
        bookmarks.map((bookmark, index) => (
          <div key={index} className="bg-slate-200 p-4 m-2 rounded">
            <h3 className="text-3xl">{bookmark.title}</h3>
          </div>
        ))
      }
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmarks;
