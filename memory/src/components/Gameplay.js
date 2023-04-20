import React, {useState, useEffect} from "react";
import CardTemplate from "./Card";
import { CardDatabase } from "./Database";
import { ShuffleLayout, Container } from "./Style";
import Top from "./Top";

const BeginRound = () => {
  //keeps track of selected cards, displayed itemsm score, rounds, and gameOver status
  const [items, setItems] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [bestScores, setBestScores] = useState([]);

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
      //check if score is a new best score
      const newBestScore = {name: "", score: score};
      let isHighScore = false;
      if (bestScores.length < 3 || score > bestScores[2].score) {
        //only adds name to newBestScore if score is high enough to make the top 3
        newBestScore.name = prompt("You achieved a new high score. Please enter your name:");
        isHighScore = true;
      }
      //update bestScores array
      const updatedBestScores = [...bestScores];
      updatedBestScores.push(newBestScore);
      updatedBestScores.sort((a, b) => b.score - a.score);
      updatedBestScores.splice(3);
  
      //update local storage with updatedBestScores
      localStorage.setItem("bestScores", JSON.stringify(updatedBestScores));
  
      //if new high score, update state
      if (isHighScore) {
        setBestScores(updatedBestScores);
      }
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
        [newItems[currentIndex], newItems[randomIndex]] =
        [newItems[randomIndex], newItems[currentIndex]];
}
setItems(newItems);
}
};
//manually clears out best scores (probably  will make this an admin function only)
const clearLocalStorage = () => {
  localStorage.clear();
  setBestScores([]);
};

//reset function for button at end of game
const resetGame = () => {
    getShuffleCards();
    setSelectedCards([])
    setScore(0);
    setRound(1);
    setGameOver(false)
  }

//loads shuffle function on page load
useEffect(() => {
    getShuffleCards();
  }, []);

//get best scores from local storage on page load
useEffect(() => {
const storedBestScores = JSON.parse(localStorage.getItem("bestScores"));
if (storedBestScores) {
setBestScores(storedBestScores);
}
}, []);

return (
<Container>
{/* contains top scores and current scores/rounds */}
<Top bestScores={bestScores} round={round} score={score} />

{/* actual gameplay/ gameover screen & current gameboard */}
<h1>Card Memory Game</h1>
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
      {/* persistant clear local storage button */}
      <button onClick={clearLocalStorage}>Clear Local Storage</button>
</Container>
);
};

export default BeginRound;
