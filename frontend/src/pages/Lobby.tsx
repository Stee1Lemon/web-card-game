import { Button } from "@/components/ui/button";
import { useSocket } from "@/hooks/useSocket";
import { useState } from "react";

export default function Lobby() {
  const [name, setName] = useState("");
  const [roomName, setRoomName] = useState("");
  const { socket, connect, connected } = useSocket("http://localhost:3000");

  const enterTheGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    connect();

    const tryEmit = () => {
      if (socket?.connected) {
        socket.emit("join_room", { name, roomId: roomName });
      } else {
        setTimeout(tryEmit, 500);
      }
    };

    tryEmit();
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl">Lobby</h1>
      <form onSubmit={enterTheGame}>
        <input
          className="block text-black px-2 py-1 rounded"
          type="text"
          placeholder="Your name"
          onChange={(e) => setName(e.currentTarget.value)}
          value={name}
        />
        <input
          className="block text-black px-2 py-1 rounded"
          type="text"
          placeholder="Room name"
          onChange={(e) => setRoomName(e.currentTarget.value)}
          value={roomName}
        />
        <Button>Enter the game</Button>
        {connected && <p className="text-green-400 text-sm">Connected ✅</p>}
      </form>
    </div>
  );
}
