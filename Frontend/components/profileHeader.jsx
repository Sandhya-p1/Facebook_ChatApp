import React from "react";
import { Camera, ChevronDown, ChevronLeft, Circle, Pen } from "lucide-react";

const ProfileHeader = () => {
  return (
    <div className="md:w-[70%] mx-auto relative">
      <nav className="fixed p-8 text-white flex justify-between items-center z-40 w-full">
        <ChevronLeft
          size={20}
          className="cursor-pointer"
          onClick={() => navigate("/feed")}
        />
        <div className="flex justify-between items-center space-x-10">
          <Pen size={20} />
          <search size={20} />
        </div>
      </nav>
      <div className="w-full h-[24%] bg-transparent relative">
        {/* cover photo */}
        <img
          src="https://timelinecovers.pro/facebook-cover/download/life-facebook-cover.jpg"
          className="h-full w-full"
        />

        {/* profile picture */}
        <div className="absolute right-0  bottom-0 z-50 px-4 flex justify-between w-full items-center">
          <img
            // src={`http://localhost:8000/uploads/${
            //   currentUser?.profilepic || "default.png"
            // }`}
            src=""
            className="rounded-full h-40 w-42 absolute left-6 bg-black "
          />
          <div
            onClick={() => navigate("/uploading")}
            className="p-3 absolute cursor-pointer right-6 bottom-6 rounded-full bg-neutral-700"
          >
            {/* <input type="file" id="fileUpload" className="hidden" />
            <label htmlFor="fileUpload" className="cursor-pointer"> */}
            <Camera size={20} />
            {/* </label> */}
          </div>
        </div>
      </div>
      {/* user details */}
      <div className="absolute my-24 left-4 text-start grid space-y-1">
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
    </div>
  );
};

export default ProfileHeader;
