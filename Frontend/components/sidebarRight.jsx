import { Ellipsis, Search } from "lucide-react";
import React from "react";

const RightSidebar = () => {
  return (
    <div className="p-6 flex flex-col">
      <div className="flex justify-between  items-center text-gray-400">
        <h1 className="text-xl font-semibold ">Contacts</h1>
        <div className="flex items-center gap-3">
          <Search />
          <Ellipsis />
        </div>
      </div>

      {/* list of friends */}
      <div className="flex flex-col gap-2.5 py-6 text-gray-200 font-semibold">
        <div className="flex items-center cursor-pointer space-x-2 w-full p-2 rounded-md hover:bg-neutral-800 transition-all duration-300 ease-in-out ">
          <img src="" className="h-8 w-8  bg-blue-950 rounded-full" />
          <p>Sandhya Pandey</p>
        </div>
        <div className="flex items-center cursor-pointer space-x-2 w-full p-2 rounded-md hover:bg-neutral-800 transition-all duration-300 ease-in-out ">
          <img src="" className="h-8 w-8  bg-blue-950 rounded-full" />
          <p>Sandhya Pandey</p>
        </div>{" "}
        <div className="flex items-center cursor-pointer space-x-2 w-full p-2 rounded-md hover:bg-neutral-800 transition-all duration-300 ease-in-out ">
          <img src="" className="h-8 w-8  bg-blue-950 rounded-full" />
          <p>Sandhya Pandey</p>
        </div>{" "}
        <div className="flex items-center cursor-pointer space-x-2 w-full p-2 rounded-md hover:bg-neutral-800 transition-all duration-300 ease-in-out ">
          <img src="" className="h-8 w-8  bg-blue-950 rounded-full" />
          <p>Sandhya Pandey</p>
        </div>{" "}
        <div className="flex items-center cursor-pointer space-x-2 w-full p-2 rounded-md hover:bg-neutral-800 transition-all duration-300 ease-in-out ">
          <img src="" className="h-8 w-8  bg-blue-950 rounded-full" />
          <p>Sandhya Pandey</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
