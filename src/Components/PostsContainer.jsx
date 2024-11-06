import React from "react";
import PostCard from "./PostCard";

const PostsContainer = ({ data }) => {
  return (
    <div>
      {data.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostsContainer;
