import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function checkForWinner(turns) {
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
      return "X";
    }
    if (
      combination.every((square) =>
        playerOTurns.some(
          (turn) => turn.row === square.row && turn.col === square.column
        )
      )
    ) {
      return "O";
    }
  }

  if (turns.length === 9) {
    return "Draw";
  }

  return null;
}

function deriveActivePlayer(turns) {
  let curActivePlayer = "X";

  if (turns.length > 0 && turns[0].player === "X") {
    curActivePlayer = "O";
  }

  return curActivePlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const winner = checkForWinner(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const curActivePlayer = deriveActivePlayer(gameTurns);
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: curActivePlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {winner && <p>You won, {winner}!</p>}
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
