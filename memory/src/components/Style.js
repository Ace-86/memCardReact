import Styled from "styled-components";

export const GameLayout = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const CardLayout = Styled.div`
display: flex;
flex-direction: row;
`

export const ShuffleLayout = Styled.div`
  display: flex;
  flex-direction: row;
`;

export const TopContains = Styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 0;
  left: 0;
  right: 0;
`;

export const Container = Styled.div `
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  width: 100vw;
  
`;

export const RightContainer = Styled.div`
  display: flex;
  justify-self: end;
  align-self: end;
  gap: 100px;
  color: white;
`;

export const LeftContainer = Styled.div`
  display: flex;
  align-self: start;
  color: white;
  
`;

export const CardSquare = Styled.div `
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 250px;
    font-weight: 300;
    font-size: 1rem;
    align-items: center;
    justify-items: center;
    padding: 10px;
    gap: 20px;
    margin: 20px;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 0 5px 2px #c7c7c7;
    }
   
`
export const ImageLink = Styled.img`
    align-self: center;
    justify-self: center;
    width: 80%;
    height: 80%;
`

export const TextWrap = Styled.h1`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
    color: white;
    font-size: 20px;
`
// export const MainLayout = Styled.div`
//     display: flex;
//     flex-direction: row;
//     background-image: url(${background});
//     width: 100%;
//     height: 100%;
//     backgroud-repeat: no-repeat;
//     position: fixed;
//     left: 0;
//     top: 0;
//     align-items: center;
//     justify-content: center;
// `