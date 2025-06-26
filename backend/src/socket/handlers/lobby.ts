import { Server, Socket } from "socket.io";
import { roomsManager } from "../../rooms/manager";

export function handleLobbyEvents(io: Server, socket: Socket) {
  socket.on("join_room", ({ name, roomId }) => {
    console.log(`📩 Player ${name} joined room ${roomId}`);
    socket.join(roomId);
    roomsManager.addPlayer(roomId, { id: socket.id, name });

    io.to(roomId).emit("player_list", roomsManager.getRoomPlayers(roomId));
  });

  socket.on("disconnect", () => {
    roomsManager.removePlayer(socket.id);
  });
}
