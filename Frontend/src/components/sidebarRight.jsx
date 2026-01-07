import { Ellipsis, Search } from "lucide-react";
import { useChatStore } from "../zustandStore/useChatStore";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/usersChatApi";
import { useAuthUser } from "../hooks/useAuthUser";

const RightSidebar = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const { data: authUser } = useAuthUser();
  const { selectedUser, setSelectedUser } = useChatStore();

  if (isLoading) return <p className="p-4">Loading users...</p>;
  if (isError) return <p className="p-4">Failed to load users.</p>;

  return (
    <div className="p-5 flex flex-col h-full">
      {/* header */}
      <div className="mb-12 p-4 rounded-xl bg-neutral-800 border border-neutral-700">
        <p className="text-xs uppercase tracking-wide text-neutral-400">
          Welcome back
        </p>
        <h2 className="text-lg font-semibold text-blue-400 mt-1 uppercase">
          {authUser?.fullName}
        </h2>
      </div>
      {/* contacts */}
      <div className="flex justify-between items-center text-gray-400 mb-3">
        <h1 className="text-sm font-semibold text-white uppercase tracking-wide">
          Contacts
        </h1>
        <div className="flex items-center gap-3">
          <Search size={18} className="cursor-pointer hover:text-white" />
          <Ellipsis size={18} className="cursor-pointer hover:text-white" />
        </div>
      </div>

      <div className="flex flex-col gap-2 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-700">
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user) => (
            <div
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition
              ${
                selectedUser?._id === user._id
                  ? "bg-blue-600/20 border border-blue-500"
                  : "hover:bg-neutral-800"
              }`}
            >
              <img
                // src={user.profilePic || "/avatar.png"}
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                className="h-10 w-10 rounded-full object-cover bg-neutral-700"
              />
              <div className="leading-tight">
                <p className="font-medium">{user.fullName}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-sm">No users found</p>
        )}
      </div>
    </div>
  );
};

export default RightSidebar;
