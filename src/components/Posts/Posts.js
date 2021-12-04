import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="m-3 p-3 border-solid border-4 border-blue-500">
      <p className="mb-3">id: {id}</p>
      <p className="mb-3">title: {title}</p>
      <p className="mb-3">body: {body}</p>
      <Link to={`/post/${id}`}>
        <button className="bg-gray-500 px-3 py-1 text-white rounded">
          See More
        </button>
      </Link>
    </div>
  );
};

export default Posts;
