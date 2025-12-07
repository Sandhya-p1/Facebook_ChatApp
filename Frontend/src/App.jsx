import Feed from "../pages/feed";
import Login from "../pages/login";
import { Profile } from "../pages/profile";
import SignUp from "../pages/signup";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./zustandStore/useAuthStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import useAuthUser from "./api/authApi";

function App() {
  const { data: authUser, isLoading } = useAuthUser();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }
  // const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  // useEffect(() => {
  //   checkAuth();
  // }, []);

  // if (isCheckingAuth && !authUser)
  //    {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <Loader className="size-10 animate-spin" />
  //     </div>
  //   );
  // }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Feed /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={authUser ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
