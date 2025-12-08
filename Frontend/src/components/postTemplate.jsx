import { useQuery } from "@tanstack/react-query";
import {
  Earth,
  Ellipsis,
  LucideShare,
  MessageCircle,
  Share,
  ThumbsUp,
  X,
} from "lucide-react";
import { fetchPosts } from "../api/postApi";
import Like from "./like";

const PostTemplate = () => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Failed to load posts.</p>;

  return (
    <>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post._id}
            className="bg-neutral-800 h-full  w-full md:rounded-md   flex flex-col"
          >
            <nav className="flex p-2 justify-between items-center">
              <div className="flex items-start space-x-2.5">
                <img src="" className="h-10 w-10 rounded-full" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm flex items-center">
                    {post.user?.userName}
                    <span className="mx-2 text-blue-500">Follow</span>
                  </p>
                  <h4 className="text-xs flex items-center text-gray-400">
                    1h.
                    <span className="mx-1">
                      <Earth size={14} />
                    </span>
                  </h4>
                </div>
              </div>
              {/* rightside */}
              <div className="flex space-x-1 items-center">
                <Ellipsis className="cursor-pointer" />
                <X className="cursor-pointer" />
              </div>
            </nav>

            {/* caption goes here */}
            <p className="p-2">{post.caption}</p>

            {/* images goes here */}
            <img
              src=""
              className="h-72 sm:h-80 md:h-[450px] lg:h-[550px]  w-full object-cover"
            />

            {/* footer */}
            <div className="flex justify-evenly items-center w-full text-[16px] p-4">
              <div className="flex items-center space-x-1 cursor-pointer hover:scale-105 px-4 py-1  transition-all duration-300 hover:bg-neutral-700 rounded-md ease-out">
                <ThumbsUp size={20} />
                <Like
                  key={post._id}
                  postId={post._id}
                  isLiked={post.isLiked}
                  totalLikes={post.totalLikes}
                />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:scale-105 px-4 py-1 transition-all duration-300 hover:bg-neutral-700 rounded-md ease-out">
                <MessageCircle size={20} />
                <p>Comment</p>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:scale-105 px-4 py-1 transition-all duration-300 hover:bg-neutral-700 rounded-md ease-out">
                <LucideShare size={20} />
                <p>Share</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No any posts yet</p>
      )}
    </>
  );
};

export default PostTemplate;
