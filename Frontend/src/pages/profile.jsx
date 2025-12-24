import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfileHeader from "../components/profileHeader";
import ProfileMiddleSection from "../components/profileMiddleSection";
import PostTemplate from "../components/postTemplate";
import { getUserProfile } from "../api/usersChatApi";
import { useQuery } from "@tanstack/react-query";
import RightSidebar from "../components/sidebarRight";
import ChatBox from "../components/chatBox";

const Profile = () => {
  const { id } = useParams();
  const {
    data: userPosts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userProfile", id],
    queryFn: () => getUserProfile(id),
    enabled: !!id,
    retry: false,
    onError: (error) => {
      console.log("React Query Error:", error.response?.data || error.message);
    },
  });

  console.log(userPosts);
  console.log("User ID:", id);

  if (isLoading) return <p>Loading profile...</p>;
  if (isError) return <p> Failed to load profile</p>;

  return (
    <div className="flex h-screen relative">
      <div className="flex flex-col bg-neutral-950  mx-auto w-full gap-3 overflow-y-auto no-scrollbar  ">
        <ProfileHeader />

        <ProfileMiddleSection />

        <div className="lg:w-[80%] md:w-full md:mx-auto mx-2 mb-6 flex flex-col gap-4">
          <PostTemplate posts={userPosts} />
        </div>
      </div>
      <RightSidebar />
      <div className="absolute bottom-0 right-4">
        <ChatBox />
      </div>
    </div>
  );
};
export default Profile;
