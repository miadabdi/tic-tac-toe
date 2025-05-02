import { WINNING_COMBINATIONS } from "../winning-combinations";

export default function checkForWinner(turns, playerNames) {
  const playerXTurns = turns
    .filter((turn) => turn.player === "X")
    .map((turn) => turn.square);
  const playerOTurns = turns
    .filter((turn) => turn.player === "O")
    .map((turn) => turn.square);

  for (const combination of WINNING_COMBINATIONS) {
    if (
      combination.every((square) =>
        playerXTurns.some(
          (turn) => turn.row === square.row && turn.col === square.column
        )
      )
    ) {
      return playerNames["X"];
    }
    if (
      combination.every((square) =>
        playerOTurns.some(
          (turn) => turn.row === square.row && turn.col === square.column
        )
      )
    ) {
      return playerNames["O"];
    }
  }

  if (turns.length === 9) {
    return "Draw";
  }

  return null;
}
