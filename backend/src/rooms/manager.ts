import { Room, Player } from "./types";

const rooms: Record<string, Room> = {};

export const roomsManager = {
  addPlayer: (roomId: string, player: Player) => {
    if (!rooms[roomId]) {
      rooms[roomId] = { id: roomId, players: [], gameState: null };
    }
    if (rooms[roomId].players.some((p) => p.id === player.id)) {
      return console.log("Player already in the game.");
    }
    rooms[roomId].players.push(player);
  },

  removePlayer: (socketId: string) => {
    for (const room of Object.values(rooms)) {
      room.players = room.players.filter((p) => p.id !== socketId);
    }
  },

  getRoomPlayers: (roomId: string): Player[] => {
    return rooms[roomId]?.players || [];
  },
};
