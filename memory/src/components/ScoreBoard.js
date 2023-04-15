import React, { useState } from "react";
import BeginRound from "./Gameplay";
import Styled from "styled-components";

const ScoreboardLayout = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Scoreboard({selectedCards, items, gameOver, setSelectedCards, getShuffleCards, setGameOver}) {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  const handleCardSelection = (selectedCard) => {
    // increment score and start new round if selected card hasn't been chosen before
    if (!selectedCards.includes(selectedCard)) {
      setScore(score + 1);
      setSelectedCards([...selectedCards, selectedCard]);
      if (selectedCards.length + 1 === items.length) {
        setRound(round + 1);
        setSelectedCards([]);
        getShuffleCards();
      }
    } else {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setScore(0);
    setRound(1);
    setSelectedCards([]);
    setGameOver(false);
    getShuffleCards();
  };

  return (
    <ScoreboardLayout>
      <div>Current Round: {round}</div>
      <div>Score: {score}</div>
      {gameOver ? (
        <div>
          Game Over
          <button onClick={resetGame}>Restart</button>
        </div>
      ) : (
        <BeginRound handleCardSelection={handleCardSelection} />
      )}
    </ScoreboardLayout>
  );
}





