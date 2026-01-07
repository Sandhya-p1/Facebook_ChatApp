import StoryTemplate from "./storyTemplate";
import { Images, Sticker, Video } from "lucide-react";
import PostTemplate from "./postTemplate";
import CreatePost from "./createPost";
import { useAuthUser } from "../hooks/useAuthUser";

const FeedMiddleSection = ({ showCreatePost, setShowCreatePost }) => {
  const { data: authUser } = useAuthUser();
  return (
    <div className="flex flex-col gap-4 lg:mx-auto lg:w-[640px]">
      {/* Create Post Modal */}
      {showCreatePost && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={() => setShowCreatePost(false)}
          />
          <div className="fixed top-12 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[520px]">
            <CreatePost close={() => setShowCreatePost(false)} />
          </div>
        </>
      )}

      {/* Feed Content */}
      <div
        className={`flex flex-col gap-6 transition-all duration-300
        ${showCreatePost ? "blur-sm pointer-events-none select-none" : ""}
        `}
      >
        {/* Create Post Card */}
        <div
          onClick={() => setShowCreatePost(true)}
          className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 cursor-pointer hover:bg-neutral-800 transition"
        >
          <div className="flex items-center gap-3">
            <img
              src=""
              className="w-10 h-10 rounded-full bg-blue-950 shrink-0"
            />

            <div className="flex-1 bg-neutral-800 hover:bg-neutral-700 rounded-full px-4 py-2 text-gray-400">
              What's on your mind, {authUser?.fullName}?
            </div>
          </div>

          <div className="flex justify-between mt-4 pt-3 border-t border-neutral-800">
            <div className="flex items-center gap-2 text-red-500">
              <Video size={20} />
              <span className="text-sm font-medium">Live</span>
            </div>
            <div className="flex items-center gap-2 text-green-500">
              <Images size={20} />
              <span className="text-sm font-medium">Photo</span>
            </div>
            <div className="flex items-center gap-2 text-orange-400">
              <Sticker size={20} />
              <span className="text-sm font-medium">Feeling</span>
            </div>
          </div>
        </div>

        {/* Stories */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3">
          <div className="flex space-x-3 overflow-x-auto no-scrollbar">
            <StoryTemplate />
            <StoryTemplate />
            <StoryTemplate />
            <StoryTemplate />
            <StoryTemplate />
            <StoryTemplate />
            <StoryTemplate />
          </div>
        </div>

        {/* Posts */}
        <div className="flex flex-col gap-6">
          <PostTemplate />
        </div>
      </div>
    </div>
  );
};

export default FeedMiddleSection;
