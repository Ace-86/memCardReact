import React, {useState} from "react";
import CardTemplate from "./card";
import { CardDatabase } from "./database";
import Styled from 'styled-components';

const ShuffleLayout = Styled.div`
    display: flex;
    flex-direction: row;
  
`

const ShuffleCards = () => {
    const [items, setItems] = useState([]);
  
    const getShuffleCards = () => {
      const ShuffleCards = [];
      const cloneData = [...CardDatabase];
      for (let i = 0; i < 5; i++) {
        const randomSelection = Math.floor(Math.random() * cloneData.length);
        ShuffleCards.push(cloneData[randomSelection]);
        cloneData.splice(randomSelection, 1);
      }
      setItems(ShuffleCards);
    };
  
    return (
      <container>
        <ShuffleLayout>
          {items.map((item) => (
              <CardTemplate 
              key={item.keyId}
              name= {item.name}
              image ={item.image}
              />
              ))}
        </ShuffleLayout>
              <button onClick={getShuffleCards}>Shuffle</button>
      </container>
    );
  };
  
  export default ShuffleCards;