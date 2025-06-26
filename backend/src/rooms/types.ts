export type Player = {
  id: string;
  name: string;
  score?: number;
};

export type Room = {
  id: string;
  players: Player[];
  gameState: GameState | null;
};

export type GameState = {
  currentQuestion: string;
  answersSubmitted: { playerId: string; answer: string }[];
  voting: boolean;
};
