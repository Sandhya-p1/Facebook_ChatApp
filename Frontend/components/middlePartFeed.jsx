import React from "react";
import StoryTemplate from "./storyTemplate";
import { Image, Images, Sticker, Video } from "lucide-react";
import PostTemplate from "./postTemplate";

const FeedMiddleSection = () => {
  return (
    <div className="flex flex-col gap-2  ">
      <nav className="p-2 rounded-md bg-neutral-800 w-full ">
        <form className="flex items-center space-x-3  ">
          <img
            src=""
            className="w-8 h-8 md:h-10 md:w-10 rounded-full bg-blue-950 shrink-0"
          />
          <input
            className="hover:bg-neutral-600  bg-neutral-700 border-none outline-none rounded-xl flex-1 p-1.5 placeholder:text-gray-300"
            type="text"
            placeholder="What's on your mind, Sandhya?"
          />
          <Video className="shrink-0 md:size-6 text-red-800" />
          <Images className="shrink-0 md:size-6 text-green-700" />
          <Sticker className="shrink-0 md:size-6 text-orange-400" />
        </form>
      </nav>

      {/* story section  */}
      <div className="flex scroll-smooth no-scrollbar  space-x-2 overflow-scroll">
        <StoryTemplate />
        <StoryTemplate />
        <StoryTemplate />
        <StoryTemplate />
        <StoryTemplate />
        <StoryTemplate />
        <StoryTemplate />
        <StoryTemplate />
      </div>

      {/* post section */}
      <div className="flex flex-col gap-2">
        <PostTemplate />
        <PostTemplate />
      </div>
    </div>
  );
};

export default FeedMiddleSection;
