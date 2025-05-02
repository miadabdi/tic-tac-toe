export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner === "Draw" && <p>It's a Draw</p>}
      {winner != "Draw" && <p>{winner}, won!</p>}
      <p>
        <button onClick={onRestart}>ReMatch!</button>
      </p>
    </div>
  );
}
