import {
  Badge,
  Clock,
  FileImage,
  Film,
  List,
  Locate,
  School,
  Video,
} from "lucide-react";

const ProfileMiddleSection = () => {
  return (
    <div className="w-full p-4 mb-6 rounded-2xl bg-neutral-800 shadow-lg">
      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex gap-8 text-xl font-semibold border-b border-neutral-700 pb-3">
          <p className="cursor-pointer hover:text-sky-400">Posts</p>
          <p className="cursor-pointer hover:text-sky-400">Photos</p>
          <p className="cursor-pointer hover:text-sky-400">Reels</p>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="font-semibold text-xl">Details</h1>

          <div className="flex items-center gap-3 text-lg">
            <Badge /> <p>Web Developer in abc company</p>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <School /> <p>Studied at Golden Parks academy</p>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <Locate /> <p>Lives in Somewhere</p>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <Clock /> <p>Joined in 2015</p>
          </div>

          <p className="text-sky-400 cursor-pointer">See more info</p>
        </div>

        <button className="w-full bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-semibold py-2 rounded-lg transition">
          Edit public details
        </button>

        {/* Friends */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-lg">Friends</h2>
            <p className="text-neutral-400">1000 friends</p>
          </div>
          <p className="text-sky-400 cursor-pointer">Find Friends</p>
        </div>

        {/* Create Post */}
        <div className="flex justify-between items-center bg-neutral-700 p-3 rounded-xl">
          <div className="flex items-center gap-3 w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_OOjHVS292wKxy3R1TUKo8SpAl4Ss7XTJQ&s"
              className="h-10 w-10 rounded-full"
              alt="user"
            />
            <input
              className="w-full bg-transparent outline-none placeholder:text-neutral-300"
              placeholder="What's on your mind?"
            />
          </div>
          <FileImage size={22} className="text-green-400 cursor-pointer" />
        </div>

        {/* Actions */}
        <div className="flex gap-4 bg-neutral-700 p-3 rounded-xl">
          <div className="flex items-center gap-2 font-semibold">
            <Film className="text-red-400" size={18} /> Reel
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <Video className="text-red-600" size={18} /> Live
          </div>
        </div>

        <div className="text-center font-semibold py-2 rounded-xl bg-neutral-600 hover:bg-neutral-500 cursor-pointer">
          <List className="inline mr-2" /> Manage Posts
        </div>
      </div>
    </div>
  );
};

export default ProfileMiddleSection;
