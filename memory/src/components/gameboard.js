import React from "react";
import CardTemplate from "./card";
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
  
  const data = CardDatabase;

  console.log(data);

  return (
        <GameLayout className="game-board-layout">
            <CardLayout>
                
                <CardTemplate 
                name= {data[0].name}
                image= {data[0].image}
                />

                <CardTemplate 
                name= {data[1].name}
                image= {data[1].image}
                />

                <CardTemplate 
                name= {data[5].name}
                image= {data[5].image}
                />

                <CardTemplate 
                name= {data[8].name}
                image= {data[8].image}
                />

                <CardTemplate 
                name= {data[14].name}
                image= {data[14].image}
                />

            </CardLayout>
            <GameButton 
                title="Play"
                key= "StartId"
                round="1"
            />
        </GameLayout>
    )
}