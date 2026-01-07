import React, { useState } from "react";
import ChatBox from "../components/chatBox";
import LeftSidebar from "../components/sidebarLeft";
import FeedMiddleSection from "../components/middlePartFeed";
import RightSidebar from "../components/sidebarRight";

const Feed = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);

  return (
    <div className="flex h-screen bg-neutral-950 text-white overflow-hidden  relative">
      {/* Left Sidebar */}
      <div className="hidden md:flex flex-col w-64 h-full bg-neutral-900 border-r border-neutral-800">
        <LeftSidebar setShowCreatePost={setShowCreatePost} />
      </div>

      {/* Middle Feed */}
      <div className="flex-1 overflow-y-auto px-4 py-6 no-scrollbar smooth-scroll">
        <div className="max-w-2xl mx-auto">
          <FeedMiddleSection
            showCreatePost={showCreatePost}
            setShowCreatePost={setShowCreatePost}
          />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden xl:flex flex-col w-80 h-full bg-neutral-900 border-l border-neutral-800 overflow-y-auto no-scrollbar">
        <RightSidebar />
      </div>

      {/* Chat Box */}
      <div className="fixed bottom-6 right-6 shadow-2xl rounded-xl">
        <ChatBox />
      </div>
    </div>
  );
};

export default Feed;
