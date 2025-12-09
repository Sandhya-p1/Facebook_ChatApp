import React, { useState } from "react";

// import { useChatStore } from "../src/zustandStore/useChatStore";
import ChatBox from "../components/chatBox";
import LeftSidebar from "../components/sidebarLeft";
import FeedMiddleSection from "../components/middlePartFeed";
import RightSidebar from "../components/sidebarRight";

const Feed = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  return (
    <div className="flex h-screen bg-black overflow-hidden relative">
      {/* Left Sidebar */}
      <div className="hidden md:flex border-r border-r-neutral-800  flex-col w-60 h-full ">
        <LeftSidebar setShowCreatePost={setShowCreatePost} />
      </div>

      {/* Middle Section */}
      <div className="flex-1 overflow-y-auto   px-4 py-6 no-scrollbar smooth-scroll">
        <FeedMiddleSection
          showCreatePost={showCreatePost}
          setShowCreatePost={setShowCreatePost}
        />
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:flex flex-col w-1/5 h-full  overflow-y-auto no-scrollbar smooth-scroll">
        <RightSidebar />
      </div>

      <div className="absolute bottom-0 right-4">
        <ChatBox />
      </div>
    </div>
  );
};

export default Feed;
