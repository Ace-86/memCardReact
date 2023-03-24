import React from "react";
import CardTemplate from "./card";
import Styled from "styled-components";
import GameButton from "./button";
import { CardDatabase } from "./database";

const GameLayout = Styled.div`
display: flex;
flex-direction: row;
`

export default function GameBoard() {
  
  const data = CardDatabase;

  console.log(data);

  return (
        <GameLayout className="game-board-layout">
            <div>
                
                <CardTemplate 
                name= {data[0].name}
                image= "./images/aceclubs.png"
                />
             
            </div>
            <GameButton 
                title="Play"
                key= "StartId"
                round="1"
            />
        </GameLayout>
    )
}