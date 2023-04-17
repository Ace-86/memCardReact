import React, {useState, useEffect} from "react";
import CardTemplate from "./Card";
import { CardDatabase } from "./Database";
import Styled from 'styled-components';

const ShuffleLayout = Styled.div`
    display: flex;
    flex-direction: row;
`;

const Container = Styled.div `
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`;

const BeginRound = () => {
  const [items, setItems] = useState([]);

  //keeps track of selected cards
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const getShuffleCards = () => {
    const shuffleCards = [];
    const cloneData = [...CardDatabase];
    for (let i = 0; i < 5; i++) {
      const randomSelection = Math.floor(Math.random() * cloneData.length);
      shuffleCards.push(cloneData[randomSelection]);
      cloneData.splice(randomSelection, 1);
    }
    setItems(shuffleCards);
  };

  //if selected card is chosen 2x then game ends
  const handleCardSelection = (selectedCard) => {
    if (selectedCards.includes(selectedCard)) {
      setGameOver(true);
      return;
    } else {
      setScore(score+1)
    }
    
    const updatedSelectedCards = [...selectedCards, selectedCard];
    setSelectedCards(updatedSelectedCards);
    

    if (updatedSelectedCards.length === items.length) {
      //restarts game
      getShuffleCards();
      setSelectedCards([]);
    } else {
      //otherwise, adds cards to new array of selected cards  
      const newItems = [...items];
      let currentIndex = newItems.length;
      let randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [newItems[currentIndex], newItems[randomIndex]] = [newItems[randomIndex], newItems[currentIndex]];
      }
      setItems(newItems);
    }
  };

  const resetGame = () => {
    getShuffleCards();
    setSelectedCards([])
    setGameOver(false)
  }

  useEffect(() => {
    getShuffleCards();
  }, []);

  return (
    <Container>
      <div>Current Round: {round}</div>
      <div>Score: {score}</div>
      {gameOver ? (
        <div> Game Over
          <button onClick={resetGame}> Restart </button>
          </div>
       
      ) : (
        <ShuffleLayout>
          {items.map((item) => (
            <CardTemplate 
              key={item.keyId}
              name={item.name}
              image={item.image}
              onSelect={() => handleCardSelection(item.keyId)}
            />
          ))}
        </ShuffleLayout>
      )}
    </Container>
  );
};

export default BeginRound;