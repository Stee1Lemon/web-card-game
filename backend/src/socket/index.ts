import { Server } from "socket.io";
import { handleLobbyEvents } from "./handlers/lobby";

export function registerSocketHandlers(io: Server) {
  io.on("connection", (socket) => {
    console.log("New connection:", socket.id);

    handleLobbyEvents(io, socket);
  });
}
