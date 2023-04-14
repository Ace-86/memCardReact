import React from "react";
import BeginRound from './Gameplay';
import Styled from "styled-components";
import GameButton from "./button";
import { CardDatabase } from "./Database";

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
  const data = CardDatabase;

  return (
        <GameLayout className="game-board-layout">
            <CardLayout>
                <BeginRound/>
            </CardLayout>
        </GameLayout>
    )
}