import React from "react";
import LeftSidebar from "../components/sidebarLeft";
import FeedMiddleSection from "../components/middlePartFeed";

const Feed = () => {
  return (
    <div className="flex bg-black">
      <LeftSidebar />
      <FeedMiddleSection />
    </div>
  );
};

export default Feed;
