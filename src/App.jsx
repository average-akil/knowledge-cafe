import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Blogs from "./componenets/Header/Blogs/Blogs";
import Header from "./componenets/Header/Header";
import Bookmarks from "./componenets/bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
     const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (time) => {
  // Coerce both values to numbers to avoid string concatenation
  const current = Number(readingTime) || 0;
  const add = Number(time) || 0;
  const newReadingTime = current + add;
  setReadingTime(newReadingTime);
  };

  return (
    <>
      <Header></Header>

      <div className=" md:flex mx-auto   max-w-7xl gap-4 p-4 ">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
