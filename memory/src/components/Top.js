import React from "react";
import { TopContains, LeftContainer, RightContainer } from "./Style";

const TopContain = ({ bestScores, round, score }) => {
  return (
    <TopContains>
      {/* top scores */}
      <LeftContainer>
        {bestScores.length > 0 && (
          <div>
            <h2>Best Scores:</h2>
            <ol>
              {bestScores.map((bestScore, index) => {
                return (
                  <li key={index}>
                    {bestScore.name} - {bestScore.score}
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </LeftContainer>
      {/* current scores/current round */}
      <RightContainer>
        <h2>Round: {round}</h2>
        <h2>Score: {score}</h2>
      </RightContainer>
    </TopContains>
  );
};

export default TopContain;