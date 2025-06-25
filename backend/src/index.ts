import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

// Setup Express
const app = express();
app.use(cors());

// Add a test route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Create HTTP server from Express app
const httpServer = createServer(app);

// Setup Socket.IO server
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Handle socket connections
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("message", (data) => {
    console.log("Message received:", data);
    io.emit("message", data); // broadcast to all
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start server
const PORT = 3000;
httpServer.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
