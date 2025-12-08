import {
  Ellipsis,
  Images,
  Mic,
  Send,
  Sticker,
  ThumbsUp,
  X,
} from "lucide-react";
import { useChatStore } from "../zustandStore/useChatStore";
import { useEffect, useRef, useState } from "react";
import { useAuthUser } from "../hooks/useAuthUser";

const ChatBox = () => {
  const {
    selectedUser,
    setSelectedUser,
    messages,
    getMessages,
    isMessageLoading,
    sendMessage,
    subscribeMessage,
    unSubscribeMessage,
  } = useChatStore();

  const { data: authUser } = useAuthUser();

  const [message, setMessage] = useState("");
  const [showChatBox, setShowChatBox] = useState(false);
  const lastMsgRef = useRef(null);

  useEffect(() => {
    setShowChatBox(!!selectedUser);
  }, [selectedUser]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log({ message });
    if (!message.trim() || !selectedUser) return;
    sendMessage({ text: message });
    setMessage("");
  };

  useEffect(() => {
    if (!selectedUser?._id) return;
    getMessages(selectedUser?._id);
    subscribeMessage();
    return () => unSubscribeMessage();
  }, [selectedUser?._id, getMessages, subscribeMessage, unSubscribeMessage]);

  useEffect(() => {
    if (lastMsgRef.current && messages) {
      lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  if (isMessageLoading) return <p>Messages is Loading...</p>;
  if (!selectedUser) return null;

  return (
    <>
      {showChatBox && (
        <div className="flex flex-col relative rounded-lg bg-neutral-900 w-[350px] h-[450px]">
          <nav className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-1.5">
              <img src="" className="h-8 w-8 rounded-full bg-white" />
              <p className="text-sm font-semibold">{selectedUser?.fullName}</p>
            </div>
            <div className="flex items-center space-x-1.5">
              <Ellipsis size={16} />
              <X
                size={20}
                onClick={() => setSelectedUser(null)}
                className="cursor-pointer"
              />
            </div>
          </nav>
          <hr className="text-gray-500" />

          {/* conversations section */}
          <div className="flex-1 overflow-scroll no-scrollbar smooth-scroll p-4 flex flex-col gap-4">
            {messages &&
              messages.map((msg, index) => (
                <div
                  key={msg._id}
                  ref={index === messages.length - 1 ? lastMsgRef : null}
                  className={`flex mb-4 w-full ${
                    msg.senderId === authUser?._id
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <p
                    className={`w-fit max-w-xs p-2 rounded-md ${
                      msg.senderId === authUser?._id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-600 text-white"
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}
          </div>

          {/* footer */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 flex space-x-2 items-center justify-evenly text-blue-500 "
          >
            <Mic fill="blue" />
            <Images />
            <Sticker />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Aa"
              className="p-2 bg-neutral-700 text-white text-sm placeholder:font-semibold border-none outline-none rounded-4xl"
            />
            <button
              type="submit"
              className="hover:text-blue-400 cursor-pointer"
            >
              <Send />
            </button>
            <ThumbsUp />
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBox;
