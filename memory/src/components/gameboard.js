import React from "react";
import CardTemplate from "./card";
import Styled from "styled-components";
import GameButton from "./button";


const GameLayout = Styled.div`
display: flex;
flex-direction: row;
`

export default function GameBoard() {
    
  return (
        <GameLayout className="game-board-layout">
            <div>
                
                <CardTemplate 
                name="Ace of Spades"
                imageLink="https://ih1.redbubble.net/image.586275663.5026/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg"
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