import React from "react";
import { useParams } from "react-router-dom";
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

  if (isLoading) return <p className="text-center mt-10">Loading profile...</p>;
  if (isError)
    return <p className="text-center mt-10">Failed to load profile</p>;

  return (
    <div className="flex min-h-screen bg-neutral-950">
      {/* Main content */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-[680px] xl:max-w-[1000px] flex flex-col gap-4 overflow-y-auto no-scrollbar">
          <ProfileHeader />
          <ProfileMiddleSection />

          <div className="px-3 mb-10 flex flex-col gap-4">
            <PostTemplate posts={userPosts} />
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden xl:flex xl:flex-col xl:w-[340px] shrink-0">
        <div className="sticky top-0 h-screen bg-neutral-900 border-l border-neutral-800 overflow-y-auto p-6">
          <RightSidebar />
        </div>
      </div>

      {/* Chat */}
      <div className="fixed bottom-4 right-4 z-50">
        <ChatBox />
      </div>
    </div>
  );
};

export default Profile;
