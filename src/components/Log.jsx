export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => {
        const { square, player } = turn;
        return (
          <li key={index}>
            <span>
              {player} selected square ({square.row + 1}, {square.col + 1})
            </span>
          </li>
        );
      })}
    </ol>
  );
}
