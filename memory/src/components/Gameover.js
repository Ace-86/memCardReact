import React from "react";

const GamesOver = ({ resetGame }) => {
  return (
    <div>
      Game Over
      <button onClick={resetGame}>Restart</button>
    </div>
  );
};

export default GamesOver;