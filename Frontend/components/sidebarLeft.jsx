import React from "react";
import {
  Bell,
  Camera,
  Heart,
  Home,
  MessageCircleDashed,
  MessageCircleMore,
  Plus,
  Search,
  Send,
  User,
  Users,
} from "lucide-react";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col border-r gap-8  md:w-[20%]  border-r-gray-500 min-h-screen p-4">
      <div className="text-start mt-2">
        <p className="hidden md:block text-2xl font-semibold  text-blue-500 italic">
          𝒻𝒶𝒸𝑒𝒷𝑜𝑜𝓀
        </p>
        <p className="text-3xl md:hidden text-blue-500">f</p>
      </div>

      <div className="flex flex-col items-start gap-6 text-gray-300 ">
        <div className="flex items-center cursor-pointer hover:bg-neutral-800 w-full rounded-sm p-2 gap-3 font-semibold">
          <Home size={20} />
          <p className="hidden md:block text-white  hover:scale-105 cursor-pointer">
            Home
          </p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-neutral-800 w-full rounded-sm p-2 gap-3 font-semibold">
          <Search size={20} />
          <p className="hidden md:block text-white  hover:scale-105 cursor-pointer">
            Search
          </p>
        </div>{" "}
        <div className="flex items-center cursor-pointer hover:bg-neutral-800 w-full rounded-sm p-2 gap-3 font-semibold">
          <Users size={20} />
          <p className="hidden md:block text-white  hover:scale-105 cursor-pointer">
            Friends
          </p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-neutral-800 w-full rounded-sm p-2 gap-3 font-semibold">
          <Heart size={20} />
          <p className="hidden md:block text-white  hover:scale-105 cursor-pointer">
            Notifications
          </p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-neutral-800 w-full rounded-sm p-2 gap-3 font-semibold">
          <Plus size={24} />
          <p className="hidden md:block text-white  hover:scale-105 cursor-pointer">
            Create
          </p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-neutral-800 w-full rounded-sm p-2 gap-3 font-semibold">
          <Send size={20} />
          <p className="hidden md:block text-white  hover:scale-105 cursor-pointer">
            Messages
          </p>
        </div>{" "}
        <div className="flex items-center cursor-pointer hover:bg-neutral-800 w-full rounded-sm p-2 gap-3 font-semibold">
          <User size={20} />
          <p className="hidden md:block text-white  hover:scale-105 cursor-pointer">
            Profile
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default LeftSidebar;
