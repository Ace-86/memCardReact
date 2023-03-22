import React from "react";
import CardTemplate from "./card";
import Styled from "styled-components";


export default function GameBoard() {

// const CardContainer = Styled.div`
// width: 100px;
// height: 100px;
// border: 1px solid red;
// `


    return (
        <div className="game-board-layout">
        <CardTemplate 
        name="Ace of Spades"
        imageLink="https://ih1.redbubble.net/image.586275663.5026/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg"
        />
        </div>
    )
}