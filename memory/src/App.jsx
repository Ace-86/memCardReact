import React from 'react';
import './App.css';
import Board from './components/Gameboard';
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
      <Board />
    </MainLayout>
  );
}

export default App;
