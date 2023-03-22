import React from "react";
import Styled from "styled-components";

///reusable card layout
export default function CardTemplate({name, 
    imageLink}) {


const CardSquare = Styled.div `
display: flex;
align-content: center;
width: 200px;
height: 250px;
background-color: red;
font-weight: 300;
font-size: 1rem;
border: 1px solid red;
`

const ImageLink = Styled.img`
    align-self: center;
    width: 30%;
    height 30%;
`

const TextWrap = Styled.h1`
    width: 100%;
    height: 100%;
    color: blue;
`

    return (
        <CardSquare className="cardContainer">
            <ImageLink src= {imageLink} alt={name} />
            <TextWrap> {name} </TextWrap>
        </CardSquare>
    )
}