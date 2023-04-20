import React, { useState } from "react";
import { CardSquare, ImageLink, TextWrap } from "./Style";

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