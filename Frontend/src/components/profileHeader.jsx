import {
  Camera,
  ChevronDown,
  ChevronLeft,
  Circle,
  Pen,
  Pencil,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "../hooks/useAuthUser";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const { data: authUser } = useAuthUser();

  return (
    <div className="w-full bg-gradient-to-b from-sky-400  to-neutral-950 pb-10">
      <div className="w-full relative">
        {/* Cover Image */}
        <div className="w-full h-[220px] md:h-[420px] relative">
          <div
            onClick={() => navigate("/")}
            className="absolute top-4 left-4 z-20 p-2 rounded-full bg-black/10 hover:bg-black/40 cursor-pointer transition"
          >
            <ChevronLeft size={22} />
          </div>
          <img
            src="https://timelinecovers.pro/facebook-cover/download/life-facebook-cover.jpg"
            className="h-full w-full object-cover"
            alt="cover"
          />

          {/* Profile Image */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            className="absolute bottom-[-60px] left-6 h-36 w-36 rounded-full  bg-neutral-700"
          />

          {/* Camera */}
          <div
            onClick={() => navigate("/uploading")}
            className="absolute bottom-4 right-6 p-3 rounded-full bg-black/60 hover:bg-black transition cursor-pointer"
          >
            <Camera size={20} />
          </div>
        </div>

        {/* User Info */}
        <div className="mt-20 px-6 space-y-2">
          <h3 className="text-3xl font-bold flex items-center gap-2 uppercase">
            {authUser?.fullName}
            <ChevronDown size={18} />
            <Circle size={8} fill="red" />
          </h3>

          <p className="text-neutral-300">
            <span className="font-semibold text-white">1000</span> friends
          </p>

          <p className="text-lg text-neutral-200">
            This is the caption section
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 px-6 flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 text-lg flex items-center gap-2">
            <Plus size={16} /> Add to story
          </button>

          <button className="px-4 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 flex items-center gap-2 text-lg">
            <Pencil size={16} /> Edit Profile
          </button>

          <button className="px-4 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-xl">
            ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
