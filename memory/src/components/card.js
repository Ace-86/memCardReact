import React from "react";
import Styled from "styled-components";

const CardSquare = Styled.div `
display: flex;
flex-direction: column;
width: 200px;
height: 250px;
background-color: grey;
font-weight: 300;
font-size: 1rem;
border: 1px solid red;
align-items: center;
justify-items: center;
`
const ImageLink = Styled.img`
    align-self: center;
    justify-self: center;
    width: 30%;
    height 30%;
`
const TextWrap = Styled.h1`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-self: center;
    width: 25%;
    height: 25%;
    color: blue;
`

///reusable card layout
export default function CardTemplate({name, 
    image, keyId}) {
        
    return (
        <CardSquare key={keyId} className="cardContainer">
            <ImageLink src= {image} alt={name} />
            <TextWrap> {name} </TextWrap>
        </CardSquare>
    )

}