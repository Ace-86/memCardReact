import React from "react";
import Styled from 'styled-components';

const GameBtn = Styled.button`
    width: 40px;
    height: 30px;
    color: red;
    border: 1px solid blue;
`

export default function GameButton ({title, keyId, round }) {

    return (
        <div>
        <GameBtn key={keyId}
            round = {round}
        >
            {title}
        </GameBtn>

        </div>
    )
}


