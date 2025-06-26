import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export function useSocket(serverUrl: string, autoConnect = false) {
  const socketRef = useRef<Socket | null>(null);
  const [connected, setConnected] = useState(false);

  const connect = () => {
    if (!socketRef.current) {
      socketRef.current = io(serverUrl, { autoConnect: false });
    }

    if (!socketRef.current?.connected) {
      socketRef.current?.connect();

      socketRef.current?.on("connect", () => {
        setConnected(true);
        console.log("✅ Socket connected:", socketRef.current?.id);
      });

      socketRef.current?.on("disconnect", () => {
        setConnected(false);
        console.log("⚠️ Socket disconnected");
      });
    }
  };

  const disconnect = () => {
    if (socketRef.current && socketRef.current.connected) {
      socketRef.current.disconnect();
      setConnected(false);
    }
  };

  useEffect(() => {
    if (autoConnect) connect();

    return () => {
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    socket: socketRef.current,
    connect,
    disconnect,
    connected,
  };
}
