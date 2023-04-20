import React from "react";
import BeginRound from './Gameplay';
import { GameLayout, CardLayout} from './Style';

export default function GameBoard() {
  return (
        <GameLayout className="game-board-layout">
            <CardLayout>
                <BeginRound/>
            </CardLayout>
        </GameLayout>
    )
}