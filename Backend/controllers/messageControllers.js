import Message from "../models/messageModelSchema.js";
import User from "../models/userModelSchema.js";
import { getReceiverSocketId, io } from "../socket.js";

export const usersForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in get users for sidebar:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatWithId } = req.params;
    const senderId = req.user._id;

    const messages = await Message.find({
      $or: [
        { senderId: senderId, receiverId: userToChatWithId },
        { senderId: userToChatWithId, receiverId: senderId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log("error in getting message in getMessage route");
    res.status(500).json({ message: error.message });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    // let imageUrl;
    // if (image) {
    //   const uploadResponse = await cloudinary.uploader.upload(image);
    //   imageUrl = uploadResponse.secure_url;
    // }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      // image: imageUrl,
    });

    await newMessage.save();

    //sending msg through socket
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(200).json(newMessage);
  } catch (error) {
    console.log("Error in sending message in sendMesssage route");
    res.status(500).json({ error: error.message });
  }
};
