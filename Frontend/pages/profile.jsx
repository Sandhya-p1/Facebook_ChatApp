import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/profileHeader";

import ProfileMiddleSection from "../components/profileMiddleSection";
import PostTemplate from "../components/postTemplate";

export const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-neutral-950  mx-auto w-full gap-3  ">
      <ProfileHeader />

      <ProfileMiddleSection />
      <div className="md:w-[50%] md:mx-auto mx-2 mb-6 flex flex-col gap-4">
        <PostTemplate />
        <PostTemplate />

        <PostTemplate />
      </div>
    </div>
  );
};
