import React from "react";
import { useState, useEffect } from "react";
import Post from "../Post/Post";
import "./Home.css";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/?id=1")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPostList(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error!</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="homeContainer">
        Home
        {postList.map((post) => (
          <Post title={post.title} text={post.text}></Post>
        ))}
      </div>
    );
  }
}

export default Home;
