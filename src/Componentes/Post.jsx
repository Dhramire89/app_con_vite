import React from "react";
import posts from "../posts";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>{posts[id - 1].titulo} </h1>
      <p>{posts[id - 1].texto} </p>
    </div>
  );
};

export default Post;
