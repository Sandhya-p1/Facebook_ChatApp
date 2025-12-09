import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getComments, postComment } from "../api/likesCommentsApi";

export const usePostComments = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, text }) => postComment(postId, text),
    onSuccess: (_, { postId }) => {
      queryClient.invalidateQueries(["comments", postId]);
    },
  });
};

export const useGetComments = (postId) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComments(postId),
    enabled: !!postId,
    retry: false,
  });
};
