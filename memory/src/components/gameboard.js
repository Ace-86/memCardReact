import React from "react";
import ShuffleCards from './shuffle';


import Styled from "styled-components";
import GameButton from "./button";
import { CardDatabase } from "./database";

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

  console.log(data);

  return (
        <GameLayout className="game-board-layout">
            <CardLayout>
                <ShuffleCards/>
           
            </CardLayout>
            <GameButton 
                title="Play"
                key= "StartId"
                round="1"
            />
        </GameLayout>
    )
}