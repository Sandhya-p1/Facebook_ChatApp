import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
// import { useAuthStore } from "./zustandStore/useAuthStore";
// import { useEffect } from "react";
import { Loader } from "lucide-react";
import { useAuthUser } from "./hooks/useAuthUser";
import Feed from "./pages/feed";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Profile from "./pages/profile";
import { useSocketStore } from "./zustandStore/useSocketStore";
import { useEffect } from "react";

function App() {
  const { data: user, isLoading } = useAuthUser();
  const { connectSocket } = useSocketStore();

  useEffect(() => {
    if (user?._id) connectSocket(user._id);
  }, [user?._id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={user?._id ? <Feed /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/signup"
          element={!user?._id ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user?._id ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/profile/:id"
          element={user?._id ? <Profile /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
