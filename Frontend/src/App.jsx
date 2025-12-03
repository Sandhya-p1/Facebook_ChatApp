import ChatApp from "../pages/chatApp";
import Feed from "../pages/feed";
import Login from "../pages/login";
import { Profile } from "../pages/profile";
import SignUp from "../pages/signup";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/chatapp" element={<ChatApp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
