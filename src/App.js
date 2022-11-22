import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import Post from "./components/Post/Post";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/posts" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
