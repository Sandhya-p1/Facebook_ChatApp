import { useState } from "react";
import SigningUp from "../components/signingBg";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../src/zustandStore/useAuthStore";
const SignUp = () => {
  const [form, setForm] = useState({
    fullName: "",
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!form.fullName.trim()) return toast.error("Full name is required");
    if (!form.userName.trim()) return toast.error("User name is required");
    if (!form.password) return toast.error("Password is required");

    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log({ form });
    const success = validateForm();
    if (success === true) signup(form);
    setForm({ fullName: "", userName: "", password: "" });
  };

  if (isSigningUp) return <p>Loading....</p>;

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
          className=" border-gray-400 border hover:bg-[#4880e0]  cursor-pointer px-3 py-3 "
        >
          SignUp
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
