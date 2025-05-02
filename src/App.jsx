import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";

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
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
