import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { postLikes } from "../api/likesCommentsApi";

const Like = ({ postId, totalLikes = 0, isLiked }) => {
  const queryClient = useQueryClient();
  const likeMutation = useMutation({
    mutationFn: (postId) => postLikes(postId),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return (
    <>
      <p
        className={`cursor-pointer hover:text-blue-500 ${
          isLiked ? "text-blue-500" : ""
        }`}
        onClick={() => likeMutation.mutate(postId)}
      >
        Like:{totalLikes}
      </p>
    </>
  );
};

export default Like;
