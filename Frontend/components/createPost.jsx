import { Image, X } from "lucide-react";
import React, { useState } from "react";

const CreatePost = () => {
  const [showCreatePost, setShowCreatePost] = useState(true);

  return (
    <div className="flex flex-col relative gap-2 rounded-xl bg-neutral-700 z-50 h-[500px] w-[450px]">
      <div className="flex justify-between p-4">
        <p></p>
        <p className="text-xl font-semibold">Create Post</p>
        <X
          size={26}
          className="cursor-pointer"
          onClick={() => setShowCreatePost(!showCreatePost)}
        />
      </div>
      <hr className="text-gray-500" />

      {/* post section */}
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center space-x-2">
          <img src="" className="h-10 w-10 rounded-full bg-white" />
          <p className="text-lg font-semibold">Sandhya Pandey</p>
        </div>
        <input
          type="text"
          placeholder="What's on your mind,Sandhya?"
          className="flex-1 w-full border-none outline-none"
        />
      </div>

      {/* footer */}
      <div className="absolute bottom-2 flex flex-col w-full p-4 gap-4">
        <label className="cursor-pointer flex justify-between items-center w-full border border-gray-500 rounded-2xl p-3">
          <p className="text-sm font-semibold">Add to your post</p>
          <input type="file" className="hidden" />
          <Image className="text-green-600" />
        </label>

        <button className="w-full rounded-2xl font-semibold transition-all duration-200 ease-linear hover:bg-blue-500 bg-neutral-600 p-3 cursor-pointer">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
