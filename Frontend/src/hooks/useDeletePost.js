import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletingPost } from "../api/postApi";
import toast from "react-hot-toast";

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deletingPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      toast.success("Your post is deleted");
    },
    onError: (error) => {
      console.log("Error deleting post:", error);
      toast.error("You are not authorized to delete this post");
    },
  });
  return deleteMutation;
};
