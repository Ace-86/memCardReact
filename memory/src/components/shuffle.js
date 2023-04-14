import React, {useState, useEffect} from "react";
import CardTemplate from "./card";
import { CardDatabase } from "./database";
import Styled from 'styled-components';

//begin round 1

const ShuffleLayout = Styled.div`
    display: flex;
    flex-direction: row;
`

const Container = Styled.div `
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`
//selects 5 cards randomly from database and displays them on click; each click will randomly shuffle cards

//turn this into a begin round function

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
    
    // on page start the game will load 5 random cards from database

    useEffect(() => {
    getShuffleCards()
    }, []);

    return (
      <Container>
        <ShuffleLayout>
          {items.map((item) => (
              <CardTemplate 
              key={item.keyId}
              name= {item.name}
              image ={item.image}
              />
              ))}
        </ShuffleLayout>
              {/* <button onClick={getShuffleCards}>Shuffle</button> */}
      </Container>
    );
  };
  
  export default ShuffleCards;