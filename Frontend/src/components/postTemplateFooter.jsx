import { LucideShare, MessageCircle, ThumbsUp } from "lucide-react";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLikes } from "../api/likesCommentsApi";
import { useGetComments, usePostComments } from "../hooks/useComment";

const PostTemplateFooter = ({ postId, totalLikes = 0, isLiked }) => {
  const queryClient = useQueryClient();
  const [showCmtBox, setShowCmtBox] = useState(false);
  const [comment, setComment] = useState("");

  const { data: comments, isLoading } = useGetComments(postId);
  const commentMutation = usePostComments();

  const likeMutation = useMutation({
    mutationFn: (postId) => postLikes(postId),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    commentMutation.mutate({ postId, text: comment });
    setComment("");
    console.log(comment);
  };

  return (
    <>
      <div className="flex justify-evenly items-center w-full text-[16px] p-4">
        <div className="flex items-center space-x-1 cursor-pointer hover:scale-105 px-4 py-1  transition-all duration-300 hover:bg-neutral-700 rounded-md ease-out">
          <div
            className={`cursor-pointer hover:text-blue-500 flex  ${
              isLiked ? "text-blue-500" : ""
            }`}
            onClick={() => likeMutation.mutate(postId)}
          >
            <span className="mr-2">
              {" "}
              <ThumbsUp size={20} />
            </span>
            Like: {totalLikes}
          </div>
        </div>

        <div
          onClick={() => setShowCmtBox(!showCmtBox)}
          className="flex items-center space-x-1 cursor-pointer hover:scale-105 px-4 py-1 transition-all duration-300 hover:bg-neutral-700 rounded-md ease-out"
        >
          <MessageCircle size={20} />
          <p>Comment</p>
        </div>

        <div className="flex items-center space-x-1 cursor-pointer hover:scale-105 px-4 py-1 transition-all duration-300 hover:bg-neutral-700 rounded-md ease-out">
          <LucideShare size={20} />
          <p>Share</p>
        </div>
      </div>
      {showCmtBox && (
        <div className="p-4 h-62  border-t-2 border-neutral-700">
          <div className="flex flex-col gap-3 overflow-y-scroll  h-40">
            {isLoading && <p className="text-gray-400">Loading comments...</p>}

            {!isLoading && comments?.length === 0 && (
              <p className="text-gray-400">No comments yet.</p>
            )}
            {comments?.map((cmt) => (
              <div key={cmt._id}>
                <div className="flex items-center space-x-4 p-1">
                  <img src="" className="h-8 w-8 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-lg">
                      {" "}
                      {cmt.user?.userName}
                    </p>
                    <p className="text-gray-300">{cmt.text}</p>
                  </div>
                </div>
                <hr className="text-neutral-700  " />
              </div>
            ))}
          </div>
          <form
            onSubmit={handleAddComment}
            className="mt-4 flex items-center space-x-4"
          >
            <img src="" className="h-8 w-8 rounded-full" />
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              type="text"
              placeholder="Add Your Comment"
              className="border outline-none w-full rounded-lg border-neutral-400 p-2"
            />
            <button
              type="submit"
              className="cursor-pointer hover:text-green-800 font-semibold"
            >
              Add
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default PostTemplateFooter;
