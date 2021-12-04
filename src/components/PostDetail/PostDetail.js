import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comments from "../Comments/Comments";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div className="m-3 p-3 border-solid border-2 border-blue-500 mt-20">
      <p className="mb-3">id: {post.id}</p>
      <p className="mb-3">title: {post.title}</p>
      <p className="mb-3">body: {post.body}</p>
      <div className="">
        {comments.map((cm) => (
          <Comments comments={cm} />
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
