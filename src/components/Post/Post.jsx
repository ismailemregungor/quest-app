import React from "react";
import "./Post.css";

function Post({ title, text }) {
  return (
    <div>
      {title} {text}
    </div>
  );
}
export default Post;
