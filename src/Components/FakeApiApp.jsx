import React, { useState, useEffect } from "react";
import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";

const FakeApiApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    // Fetch initial data from the fake API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setData(posts);
        setLoading(false);
      });
  }, []);

  const handleAddPost = (title, body) => {
    const newPost = {
      id: data.length + 1,
      title,
      body,
    };
    setData([newPost, ...data]);
  };

  return (
    <div>
      <h1>Fake API Post Platform</h1>
      <PostForm onAddPost={handleAddPost} />
      {loading ? <p>Loading...</p> : <PostsContainer data={data} />}
    </div>
  );
};

export default FakeApiApp;
