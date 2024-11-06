import React from "react";

const PostCard = ({ title, body }) => {
  return (
    <div
      style={{ border: "1px solid #ddd", padding: "1rem", margin: "0.5rem 0" }}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
