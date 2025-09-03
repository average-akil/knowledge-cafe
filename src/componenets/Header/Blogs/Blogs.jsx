import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    
    useEffect (() => {
        fetch('/public/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    } , [])
    return (
        <div className='md:w-2/3'>
            <div className="text-4xl">Blogs : {blogs.length}</div>
        </div>
    );
};

export default Blogs;