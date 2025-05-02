export default function deriveActivePlayer(turns) {
  let curActivePlayer = "X";

  if (turns.length > 0 && turns[0].player === "X") {
    curActivePlayer = "O";
  }

  return curActivePlayer;
}
