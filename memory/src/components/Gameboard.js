import React from "react";
import BeginRound from './Gameplay';
import Styled from "styled-components";
import Score from "./ScoreBoard";
// import GameButton from "./button";

const GameLayout = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const CardLayout = Styled.div`
display: flex;
flex-direction: row;
`

export default function GameBoard() {
  //import randomly shuffled card (array) and display 
  //play button should reset rounds, randomize cards again

  return (
        <GameLayout className="game-board-layout">
            <CardLayout>
                <BeginRound/>
                {/* <Score /> */}
            </CardLayout>
        </GameLayout>
    )
}