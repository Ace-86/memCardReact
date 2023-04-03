import React from 'react';
import './App.css';
import GameBoard from './components/gameboard';
import Styled from 'styled-components';

const MainLayout = Styled.div`
    display: flex;
    flex-direction: row;
    background-color: grey;
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;

`

function App() {
  return (
    <MainLayout>
      <GameBoard />
    </MainLayout>
  );
}

export default App;
