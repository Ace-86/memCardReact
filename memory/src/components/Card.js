import React, { useState } from "react";
import Styled from "styled-components";

const CardSquare = Styled.div `
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 250px;
    background-color: grey;
    font-weight: 300;
    font-size: 1rem;
    align-items: center;
    justify-items: center;
    padding: 10px;
    gap: 20px;
    margin: 20px;
    border: 2px solid red;

   
`

const ImageLink = Styled.img`
    align-self: center;
    justify-self: center;
    width: 80%;
    height: 80%;
`

const TextWrap = Styled.h1`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
    color: black;
    font-size: 20px;
`

export default function CardTemplate({name, image, keyId, onSelect}) {
    const [isSelected, setIsSelected] = useState(false);

    const handleCardClick = () => {
        setIsSelected(true);
        onSelect && onSelect(keyId);
    };

    return (
        <CardSquare 
            key={keyId} 
            className={`cardContainer ${isSelected ? "selected" : ""}`} 
            onClick={handleCardClick}
        >
            <ImageLink src={image} alt={name} />
            <TextWrap>{name}</TextWrap>
        </CardSquare>
    );
}