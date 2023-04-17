import React from "react";
import BeginRound from './Gameplay';
import Styled from "styled-components";


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
  return (
        <GameLayout className="game-board-layout">
            <CardLayout>
                <BeginRound/>
            </CardLayout>
        </GameLayout>
    )
}