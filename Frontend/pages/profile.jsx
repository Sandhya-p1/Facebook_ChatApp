import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/profileHeader";

export const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full ">
      {/* nav */}
      <ProfileHeader />
    </div>
  );
};
