import React from "react";
import LeftSidebar from "../components/sidebarLeft";
import FeedMiddleSection from "../components/middlePartFeed";
import RightSidebar from "../components/sidebarRight";

const Feed = () => {
  return (
    <div className="flex h-screen bg-black overflow-hidden">
      {/* Left Sidebar */}
      <div className="hidden md:flex flex-col w-60 h-full bg-neutral-900">
        <LeftSidebar />
      </div>

      {/* Middle Section */}
      <div className="flex-1 overflow-y-auto px-4 py-6 no-scrollbar smooth-scroll">
        <FeedMiddleSection />
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:flex flex-col w-1/5 h-full bg-neutral-900 overflow-y-auto no-scrollbar smooth-scroll">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Feed;
