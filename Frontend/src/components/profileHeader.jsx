import React from "react";
import {
  Camera,
  ChevronDown,
  ChevronLeft,
  Circle,
  Pen,
  Pencil,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {
  const navigate = useNavigate("/");
  return (
    <div className="w-full bg-linear-to-b from-sky-400 via-neutral-800 to-neutral-950 pb-6">
      <div className="lg:w-[80%] md:w-full mx-auto  relative">
        <nav className="fixed p-8 text-white flex justify-between items-center z-40 w-full">
          <ChevronLeft
            size={20}
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="flex justify-between z-50 items-center space-x-10">
            <Pen size={20} />
            <search size={20} />
          </div>
        </nav>

        {/* cover image */}
        <div className="w-full h-[16%] md:h-[400px]  bg-transparent relative">
          <img
            src="https://timelinecovers.pro/facebook-cover/download/life-facebook-cover.jpg"
            className="h-full w-full rounded-b-md"
            alt="coverImage"
          />

          <div className="absolute right-0   bottom-0 z-50 px-4 flex justify-between w-full items-center">
            <img
              // src={`http://localhost:8000/uploads/${
              //   currentUser?.profilepic || "default.png"
              // }`}
              src=""
              alt="profileImage"
              className="rounded-full h-40 w-42 absolute left-6 bg-blue-900 "
            />
            <div
              onClick={() => navigate("/uploading")}
              className="p-3 absolute cursor-pointer right-6 bottom-6 rounded-full bg-neutral-700"
            >
              <input type="file" id="fileUpload" className="hidden" />
              <label htmlFor="fileUpload" className="cursor-pointer">
                <Camera size={20} />
              </label>
            </div>
          </div>
        </div>
        {/* user details */}
        <div className="absolute my-24 left-4 text-start grid  space-y-1">
          <h3 className="text-3xl font-semibold flex items-center ">
            Sandhya {/* {currentUser?.username || "Unknown"} */}
            <span className="mx-2">
              <ChevronDown size={20} />
            </span>
            <span>
              {" "}
              <Circle size={8} fill="red" />
            </span>
          </h3>

          <p className="font-semibold">
            1000 <span className="text-gray-400 font-normal">friends</span>
          </p>
          <p className="text-[20px]">This is the caption section</p>
        </div>
        <div className="mt-56 mx-4  flex   items-center gap-x-2">
          <button className="whitespace-nowrap px-3 py-2 rounded-lg  text-[20px] bg-blue-800 hover:bg-blue-700 cursor-pointer transition-transform duration-100 ease-linear flex items-center justify-center gap-x-2 ">
            <Plus size={16} /> Add to story
          </button>
          <button className="flex  whitespace-nowrap cursor-pointer justify-center items-center gap-x-2 text-[20px] px-3 py-2 bg-neutral-700 rounded-lg">
            <Pencil />
            Edit Profile
          </button>
          <button className="text-2xl cursor-pointer  font-bold text-center px-3 py-2 rounded-md bg-neutral-700">
            ...
          </button>
        </div>
        {/* <hr className="mt-4 text-neutral-400  border-2 " /> */}
      </div>
    </div>
  );
};

export default ProfileHeader;
