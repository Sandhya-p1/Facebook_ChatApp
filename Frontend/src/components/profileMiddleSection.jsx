import React from "react";
import {
  Badge,
  Clock,
  FileImage,
  Film,
  List,
  Locate,
  School,
  Video,
} from "lucide-react";

const ProfileMiddleSection = () => {
  return (
    <>
      <div className=" lg:w-[80%] md:w-full md:mx-auto mx-2 p-4 mb-6 rounded-xl bg-neutral-800">
        <div className="px-4 grid w-full  text-start  space-y-6">
          <div className=" flex items-center space-x-6 font-[20px]   text-xl">
            <p className="">Posts</p>
            <p className="">Photos</p>
            <p className="">Reels</p>
          </div>

          {/* details */}
          <div className="block items-start space-y-4">
            <h1 className="font-semibold text-xl">Details</h1>
            <div className="flex items-center space-x-3 text-xl">
              {" "}
              <Badge />
              <p> Web Developer in abc company</p>
            </div>
            <div className="flex items-center space-x-3 text-xl">
              {" "}
              <School />
              <p>Studied at Golden Parks academy</p>
            </div>
            <div className="flex items-center space-x-3 text-xl">
              {" "}
              <Locate />
              <p> Web Developer in abc company</p>
            </div>
            <div className="flex items-center space-x-3 text-xl">
              {" "}
              <Clock />
              <p> Joined in 2015</p>
            </div>
            <div className="flex items-center space-x-3 text-xl">
              {" "}
              <p>...</p>
              <p> See Your more info</p>
            </div>
          </div>
          <button className="bg-sky-500/20 text-sky-300 font-semibold p-2 rounded-md">
            Edit public details
          </button>
          <div className="flex justify-between items-start">
            <div className="block items-start ">
              <h2 className="font-semibold text-[18px]">Friends</h2>
              <p className="text-md text-neutral-400">1000 friends</p>
            </div>
            <h2 className="text-sky-400">Find Friends</h2>
          </div>

          {/* some friends profile */}
          {/* <FriendsProfile /> */}
          <div className="flex justify-between items-center ">
            <p className="font-semibold text-[18px]">Your posts</p>
            <p className="text-sky-400">Filters</p>
          </div>

          <div className="flex justify-between items-center ">
            <div className="flex justify-between items-center space-x-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_OOjHVS292wKxy3R1TUKo8SpAl4Ss7XTJQ&s"
                className="h-10 w-10 rounded-full bg-white"
              />
              <input
                className="placeholder:text-white border-none outline-none"
                type="text"
                placeholder="What's on your mind?"
              />
            </div>
            <FileImage size={20} />
          </div>
        </div>

        <div className="flex items-center mt-4 py-2 px-4 justify-start space-x-4 bg-neutral-600">
          <div className="flex items-center space-x-2 font-semibold text-sm  rounded-4xl px-[30px] py-2.5 outline-1">
            <Film className="text-red-400" size={18} />
            <p> Reel</p>
          </div>
          <div className=" flex items-center space-x-2 font-semibold text-sm  rounded-4xl px-[30px] py-2.5 outline-1">
            <Video className="text-red-600" size={18} />

            <p> Live</p>
          </div>
        </div>
        <div className="px-4 grid py-4 space-y-6 text-start w-full">
          <div className="w-full text-center flex items-center justify-center space-x-2 font-semibold py-2 rounded-lg bg-neutral-500">
            <List />
            <p>Manage Posts</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileMiddleSection;
