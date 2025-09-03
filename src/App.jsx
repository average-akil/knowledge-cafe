import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Blogs from "./componenets/Header/Blogs/Blogs";
import Header from "./componenets/Header/Header";
import Bookmark from "./componenets/bookmarks/Bookmark";

function App() {
  const [count, setCount] = useState(0);

  return (
    <><Header></Header>
      
     <div className="md:flex">
       <Blogs></Blogs>
       <Bookmark></Bookmark>
     </div>
    </>
  );
}

export default App;
