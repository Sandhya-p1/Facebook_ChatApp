import React from "react";

const ChatUsersList = () => {
  return (
    <div className="overflow-hidden flex flex-col gap-4 my-10 rounded-2xl  bg-neutral-900 p-4 w-[440px] h-full">
      <h2 className="font-bold text-2xl">Chats</h2>
      <div className="flex items-center  p-1.5 bg-neutral-700  w-full rounded-3xl">
        <Search size={20} className="text-gray-400 mx-1.5" />
        <input
          type="text"
          placeholder="Search Friends To Chat"
          className="border-none outline-none bg-neutral-700 placeholder:text-gray-400 p-1"
        />
      </div>
      <h2 className="text-lg mt-2 font-semibold">All</h2>

      {/* list of chats */}
      <div className="flex flex-col gap-5 items-start overflow-scroll no-scrollbar z-50">
        <div className="flex items-center space-x-2.5">
          <img src="" className="h-14 w-14 rounded-full bg-white" />
          <p className="text-lg font-semibold">Sandhya Pandey</p>
        </div>
        <div className="flex items-center space-x-2.5">
          <img src="" className="h-14 w-14 rounded-full bg-white" />
          <p className="text-lg font-semibold">Sandhya Pandey</p>
        </div>
        <div className="flex items-center space-x-2.5">
          <img src="" className="h-14 w-14 rounded-full bg-white" />
          <p className="text-lg font-semibold">Sandhya Pandey</p>
        </div>
        <div className="flex items-center space-x-2.5">
          <img src="" className="h-14 w-14 rounded-full bg-white" />
          <p className="text-lg font-semibold">Sandhya Pandey</p>
        </div>
        <div className="flex items-center space-x-2.5">
          <img src="" className="h-14 w-14 rounded-full bg-white" />
          <p className="text-lg font-semibold">Sandhya Pandey</p>
        </div>
        <div className="flex items-center space-x-2.5">
          <img src="" className="h-14 w-14 rounded-full bg-white" />
          <p className="text-lg font-semibold">Sandhya Pandey</p>
        </div>
        <div className="flex items-center space-x-2.5">
          <img src="" className="h-14 w-14 rounded-full bg-white" />
          <p className="text-lg font-semibold">Sandhya Pandey</p>
        </div>
        <div className="flex items-center space-x-2.5">
          <img src="" className="h-14 w-14 rounded-full bg-white" />
          <p className="text-lg font-semibold">Sandhya Pandey</p>
        </div>
        <div className="flex items-center space-x-2.5">
          <img src="" className="h-14 w-14 rounded-full bg-white" />
          <p className="text-lg font-semibold">Sandhya Pandey</p>
        </div>
        <div className="flex items-center space-x-2.5">
          <img src="" className="h-14 w-14 rounded-full bg-white" />
          <p className="text-lg font-semibold">Sandhya Pandey</p>
        </div>
        <div className="flex items-center space-x-2.5">
          <img src="" className="h-14 w-14 rounded-full bg-white" />
          <p className="text-lg font-semibold">Sandhya Pandey</p>
        </div>
      </div>
    </div>
  );
};

export default ChatUsersList;
