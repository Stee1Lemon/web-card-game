import Lobby from "@/pages/Lobby";
import { Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/web-card-game" element={<Lobby />} />
    </Routes>
  );
}
