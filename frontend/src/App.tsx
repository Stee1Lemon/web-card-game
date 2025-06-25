import { useEffect } from "react";
import { io } from "socket.io-client";
import { Button } from "./components/ui/button";

const socket = io("http://localhost:3000");

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("✅ Connected:", socket.id);
    });

    socket.on("message", (data) => {
      console.log("📨 Message from server:", data);
    });

    const handleBeforeUnload = () => {
      socket.disconnect();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const sendMessage = () => {
    socket.emit("message", "Hello from frontend");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-3xl">Hello</h1>
      <Button onClick={sendMessage}>test socket</Button>
    </div>
  );
}

export default App;
