import React from "react";
import { useState, useEffect } from "react";
import Post from "../Post/Post";
import "./Home.css";
import Container from "@mui/material/Container";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
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
      <Container fixed className="homeContainer">
        Home
        {postList.map((post) => (
          <Post userId={post.userId} title={post.title} body={post.body}></Post>
        ))}
      </Container>
    );
  }
}

export default Home;
