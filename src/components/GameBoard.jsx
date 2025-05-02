import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handlePlayerClick(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((prevRow) => [...prevRow]),
      ];
      updatedGameBoard[rowIndex][colIndex] = "X";
      return updatedGameBoard;
    });
  }

  console.log(gameBoard);

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handlePlayerClick(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
