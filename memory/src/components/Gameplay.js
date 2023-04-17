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
  //keeps track of selected cards, displayed itemsm score, rounds and gameOver status
  const [items, setItems] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const getShuffleCards = () => {
    const shuffleCards = [];
    const cloneData = [...CardDatabase];
    for (let i = 0; i < 5; i++) {
      //randomizes selection from card database; only picks 5 (add later: increase each round)
      const randomSelection = Math.floor(Math.random() * cloneData.length);
      shuffleCards.push(cloneData[randomSelection]);
      cloneData.splice(randomSelection, 1);
    }
    setItems(shuffleCards);
  };

  const handleCardSelection = (selectedCard) => {
    //if selected card is already in Array of picked cards: GameOver
    if (selectedCards.includes(selectedCard)) {
      setGameOver(true);
      return;
    } else {
      //everytime a card is selected, you should gain 1 point;score does not reset each round
      setScore(score+1)
    }
    //the array of previous selected cards plus current selected card
    const updatedSelectedCards = [...selectedCards, selectedCard];
    setSelectedCards(updatedSelectedCards);
    if (updatedSelectedCards.length === items.length) {
      //if round ends, increase round + 1, reset selected cards (empty out array), and shuffle cards in new cards from database
      getShuffleCards();
      setSelectedCards([]);
      setRound(round + 1);
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
    setScore(0);
    setRound(1);
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