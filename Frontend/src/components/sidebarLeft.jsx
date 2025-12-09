import {
  Heart,
  Home,
  LogOut,
  Plus,
  Search,
  Send,
  User,
  Users,
} from "lucide-react";

import { useLogOut } from "../hooks/useLogout";
import { useAuthUser } from "../hooks/useAuthUser";
import { useNavigate } from "react-router-dom";
// import { useAuthStore } from "../src/zustandStore/useAuthStore";

const LeftSidebar = ({ setShowCreatePost }) => {
  const navigate = useNavigate();
  const authUser = useAuthUser();
  const logout = useLogOut();

  // const { logout, authUser } = useAuthStore();

  return (
    <div className="flex-col  gap-8 hidden md:flex  md:w-64 relative  min-h-screen p-4">
      <div className="text-start mt-2">
        <p className="hidden md:block text-2xl font-semibold  text-blue-500 italic">
          𝒻𝒶𝒸𝑒𝒷𝑜𝑜𝓀
        </p>
        <p className="text-3xl md:hidden text-blue-500">f</p>
      </div>

      <div className="flex flex-col items-start gap-6 text-gray-300 ">
        <div className="flex items-center cursor-pointer hover:bg-neutral-800 w-full rounded-sm p-2 gap-3 font-semibold     transition-all duration-300 ease-in-out ">
          <Home size={20} />
          <p
            onClick={() => navigate("/")}
            className="hidden md:block text-white  hover:scale-105 cursor-pointer"
          >
            Home
          </p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-neutral-800 w-full rounded-sm p-2 gap-3 font-semibold     transition-all duration-300 ease-in-out ">
          <Search size={20} />
          <p className="hidden md:block text-white  hover:scale-105 cursor-pointer">
            Search
          </p>
        </div>{" "}
        <div className="flex items-center cursor-pointer hover:bg-neutral-800 w-full rounded-sm p-2 gap-3 font-semibold     transition-all duration-300 ease-in-out ">
          <Users size={20} />
          <p className="hidden md:block text-white  hover:scale-105 cursor-pointer">
            Friends
          </p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-neutral-800 w-full rounded-sm p-2 gap-3 font-semibold     transition-all duration-300 ease-in-out ">
          <Heart size={20} />
          <p className="hidden md:block text-white  hover:scale-105 cursor-pointer">
            Notifications
          </p>
        </div>
        <div
          onClick={() => setShowCreatePost(true)}
          className="flex items-center cursor-pointer hover:bg-neutral-800 w-full rounded-sm p-2 gap-3 font-semibold     transition-all duration-300 ease-in-out "
        >
          <Plus size={24} />
          <p className="hidden md:block text-white  hover:scale-105 cursor-pointer">
            Create
          </p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-neutral-800 w-full rounded-sm p-2 gap-3 font-semibold     transition-all duration-300 ease-in-out ">
          <Send size={20} />
          <p className="hidden md:block text-white  hover:scale-105 cursor-pointer">
            Messages
          </p>
        </div>{" "}
        <div
          onClick={() => navigate("/profile")}
          className="flex items-center cursor-pointer hover:bg-neutral-800 w-full rounded-sm p-2 gap-3 font-semibold     transition-all duration-300 ease-in-out "
        >
          <User size={20} />
          <p className="hidden md:block text-white  hover:scale-105 cursor-pointer">
            Profile
          </p>
        </div>{" "}
        {authUser && (
          <div className="absolute bottom-4  flex items-center cursor-pointer hover:text-red-900  rounded-sm p-2 gap-3 font-semibold     transition-all duration-300 ease-in-out ">
            <LogOut size={20} />
            <p
              onClick={() => logout.mutate()}
              className="hidden md:block   hover:scale-105 cursor-pointer"
            >
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;
