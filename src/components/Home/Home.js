import React, { useState, useEffect } from "react";
import Posts from "../Posts/Posts";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="mt-20">
      {posts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;
