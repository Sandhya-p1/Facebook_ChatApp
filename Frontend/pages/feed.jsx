import React from "react";
import LeftSidebar from "../components/sidebarLeft";
import FeedMiddleSection from "../components/middlePartFeed";
import RightSidebar from "../components/sidebarRight";

const Feed = () => {
  return (
    <div className="flex justify-evenly h-screen overflow-hidden bg-black relative">
      <div className="fixed h-screen top-0 left-0">
        <LeftSidebar />
      </div>
      <div className="flex-1 px-10 md:ml-62 lg:px-40 py-6 h-screen smooth-scroll overflow-y-auto no-scrollbar">
        <FeedMiddleSection />
      </div>
      <div className="w-[20%] hidden md:block overflow-scroll smooth-scroll no-scrollbar">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Feed;
