export type Player = {
  id: string;
  name: string;
  score: number;
};

export type GameEvent =
  | { type: "JOIN"; player: Player }
  | { type: "PLAY_CARD"; cardId: string }
  | { type: "VOTE"; targetPlayerId: string };
