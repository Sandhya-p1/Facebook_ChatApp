import {
  Heart,
  Home,
  LogOut,
  Plus,
  Search,
  Send,
  User,
  Users,
} from "lucide-react";
import { useLogOut } from "../hooks/useLogout";
import { useAuthUser } from "../hooks/useAuthUser";
import { useNavigate } from "react-router-dom";

const LeftSidebar = ({ setShowCreatePost }) => {
  const navigate = useNavigate();
  const { data: authUser } = useAuthUser();
  const logout = useLogOut();

  const navItem =
    "flex items-center gap-3 w-full p-2 rounded-lg cursor-pointer text-gray-300 hover:bg-neutral-800 hover:text-white transition";

  return (
    <div className="flex flex-col gap-8 min-h-screen p-4 relative">
      {/* Logo */}
      <div>
        <p className="text-2xl font-bold tracking-wide text-blue-500 italic">
          facebook
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-2">
        <div className={navItem} onClick={() => navigate("/")}>
          <Home size={22} />
          <p className="hidden md:block">Home</p>
        </div>

        <div className={navItem}>
          <Search size={22} />
          <p className="hidden md:block">Search</p>
        </div>

        <div className={navItem}>
          <Users size={22} />
          <p className="hidden md:block">Friends</p>
        </div>

        <div className={navItem}>
          <Heart size={22} />
          <p className="hidden md:block">Notifications</p>
        </div>

        <div
          className={`${navItem} text-blue-400`}
          onClick={() => setShowCreatePost(true)}
        >
          <Plus size={24} />
          <p className="hidden md:block">Create</p>
        </div>

        <div className={navItem}>
          <Send size={22} />
          <p className="hidden md:block">Messages</p>
        </div>

        <div
          className={navItem}
          onClick={() => navigate(`/profile/${authUser?._id}`)}
        >
          <User size={22} />
          <p className="hidden md:block">Profile</p>
        </div>
      </div>

      {/* Logout */}
      {authUser && (
        <div className="absolute bottom-4 w-full ">
          <div
            onClick={() => logout.mutate()}
            className="flex items-center gap-3 p-2 rounded-lg text-red-400 hover:scale-105 duration-300 cursor-pointer transition"
          >
            <LogOut size={22} />
            <p className="hidden md:block">Logout</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;
