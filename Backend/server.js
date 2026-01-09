import dotenv from "dotenv";
console.log("Dotenv loaded:", process.env);

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import usersRoutes from "./routes/allUsersRoutes.js";
import likesCommentsRoutes from "./routes/likeAndCommentRoutes.js";
import path from "path";

dotenv.config();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/likesComments", likesCommentsRoutes);

if (process.env.NODE_ENV === "production") {
  const frontendDist = path.join(__dirname, "../Frontend/dist");

  app.use(express.static(frontendDist));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
