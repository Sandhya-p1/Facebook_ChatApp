import { useState } from "react";
import SigningUp from "../components/signingBg";
import { useNavigate } from "react-router-dom";
// import { useAuthStore } from "../src/zustandStore/useAuthStore";
import toast from "react-hot-toast";
import { useSignUp } from "../hooks/useSignup";

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: "",
    userName: "",
    password: "",
  });
  const navigate = useNavigate();

  const signup = useSignUp();
  const handleSignup = (e) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.userName.trim() || !form.password.trim())
      return toast.error("Please fill all the fields");
    signup.mutate(form);
  };

  // const { signup, isSigningUp } = useAuthStore();

  // const validateForm = () => {
  //   if (!form.fullName.trim()) return toast.error("Full name is required");
  //   if (!form.userName.trim()) return toast.error("User name is required");
  //   if (!form.password) return toast.error("Password is required");

  //   return true;
  // };

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   console.log({ form });
  //   const success = validateForm();
  //   if (success === true) signup(form);
  //   setForm({ fullName: "", userName: "", password: "" });
  // };

  // if (isSigningUp) return <p>Loading....</p>;

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between md:gap-x-20 gap-y-20 items-center md:w-[60%] w-[80%] mx-auto min-h-screen">
      <SigningUp />
      <form
        onSubmit={handleSignup}
        className="flex flex-col space-y-4 w-full md:w-[40%]  border-none shadow-md shadow-black rounded-lg p-4 bg-neutral-900 "
      >
        <input
          autoComplete="new-fullname"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          type="text"
          placeholder="FullName"
          autoFocus
          className="focus:border-blue-700 border-gray-400 border outline-none px-3 py-3 "
        />
        <input
          autoComplete="new-username"
          value={form.userName}
          onChange={(e) => setForm({ ...form, userName: e.target.value })}
          type="text"
          placeholder="UserName"
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
          disabled={signupMutation.isLoading}
          className=" border-gray-400 border hover:bg-[#4880e0]  cursor-pointer px-3 py-3 "
        >
          {signup.isPending ? "Signing Up...." : "SignUp"}
        </button>
        <p
          onClick={() => navigate("/")}
          className="text-center hover:text-[#4267b2] cursor-pointer"
        >
          Already Have an Account ?
        </p>
      </form>
    </div>
  );
};

export default SignUp;
