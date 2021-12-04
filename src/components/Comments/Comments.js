import React from "react";
import image from "../../images/sujon.jpg";

const Comments = (props) => {
  const { email, name, body } = props.comments;
  return (
    <div className="flex items-center">
      <div className="mr-3">
        <img className="w-12 rounded-full" src={image} alt="" />
      </div>
      <div className="my-8">
        <p className="py-1 my-1 border-solid border-2 border-gray-400 rounded">
          {email}
        </p>
        <div className="py-1 my-1 border-solid border-2 border-gray-300 rounded">
          <p className="py-1 my-1">{name}</p>
          <p className="">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
