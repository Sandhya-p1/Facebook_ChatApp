import { useState } from "react";
import SigningUp from "../components/signingBg";
import { useNavigate } from "react-router-dom";
// import { useAuthStore } from "../src/zustandStore/useAuthStore";
// import { Loader } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../src/api/authApi";
import toast from "react-hot-toast";

const Login = () => {
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  const queryClient = useQueryClient(); // React Query client

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("authUser", JSON.stringify(data));
      queryClient.setQueryData(["authUser"], data);
      toast.success("Logged in successfully");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Login failed");
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (!form.userName || !form.password)
      return toast.error("Please fill all the fields");
    loginMutation.mutate(form);
  };

  // const { login, isLoggingIn } = useAuthStore();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   console.log({ form });
  //   login(form);
  //   setForm({ userName: "", password: "" });
  // };

  // if (isLoggingIn) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <Loader className="size-10 animate-spin" />
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between md:gap-x-20 gap-y-20 items-center md:w-[60%] w-[80%] mx-auto min-h-screen">
      <SigningUp />
      <form
        onSubmit={handleLogin}
        className="flex flex-col space-y-4 w-full md:w-[40%]  border-none shadow-md shadow-black rounded-lg p-4 bg-neutral-900 "
      >
        <input
          autoComplete="new-username"
          value={form.userName}
          onChange={(e) => setForm({ ...form, userName: e.target.value })}
          type="text"
          placeholder="UserName"
          autoFocus
          className="focus:border-blue-700 border-gray-400 border outline-none px-3 py-3 "
        />
        <input
          autoComplete="new-password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          type="password"
          placeholder="Password"
          className="focus:border-blue-700 border-gray-400 border outline-none px-3 py-3 "
        />
        <button
          type="submit"
          disabled={loginMutation.isLoading}
          className=" border-gray-400 border hover:bg-[#4880e0]  cursor-pointer px-3 py-3 "
        >
          {loginMutation.isLoading ? "Logging in..." : "LogIn "}
        </button>
        <p
          onClick={() => navigate("/signup")}
          className="text-center hover:text-[#4267b2] cursor-pointer"
        >
          Dont't Have a Account ?
        </p>
      </form>
    </div>
  );
};

export default Login;
