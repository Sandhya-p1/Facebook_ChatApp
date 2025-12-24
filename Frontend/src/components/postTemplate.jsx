import { useQuery } from "@tanstack/react-query";
import { Delete, Earth, Ellipsis, X } from "lucide-react";
import { fetchPosts } from "../api/postApi";
import { useDeletePost } from "../hooks/useDeletePost";
import PostTemplateFooter from "./postTemplateFooter";

const PostTemplate = ({ posts: propPosts }) => {
  const {
    data: fetchedPosts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    enabled: !propPosts,
  });

  const deleteMutation = useDeletePost();

  const handleDeletePost = (postId) => {
    deleteMutation.mutate(postId);
  };

  const posts = propPosts || fetchedPosts;
  if (!posts) return <p>Loading posts...</p>;

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
                <Delete onClick={() => handleDeletePost(post._id)} />
              </div>
            </nav>

            {/* caption goes here */}
            <p className="p-2">{post.caption}</p>

            {/*post images goes here */}
            {post.image && (
              <img
                src={post.image}
                className="h-72 sm:h-80 md:h-[450px] lg:h-[550px]  w-full object-cover"
              />
            )}

            {/* footer */}
            <PostTemplateFooter
              key={post._id}
              postId={post._id}
              isLiked={post.isLiked}
              totalLikes={post.totalLikes}
            />
          </div>
        ))
      ) : (
        <p>No any posts yet</p>
      )}
    </>
  );
};

export default PostTemplate;
