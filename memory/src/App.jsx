import React from 'react';
import './App.css';
import Board from './components/Gameboard';
import Styled from 'styled-components';
import background from './img/felt.jpg'

const Background = Styled.div `

height: 100%;

top: 0;
left: 0;
`
const MainLayout = Styled.div`
    display: flex;
    flex-direction: row;
    background-image: url(${background});
    width: 100%;
    height: 100%;
    backgroud-repeat: no-repeat;
    position: fixed;
    left: 0;
    top: 0;
    align-items: center;
    justify-content: center;

`

function App() {
  return (
    // <Background>

    <MainLayout>
      <Board />
    </MainLayout>
      
    // </Background>
  );
}

export default App;
