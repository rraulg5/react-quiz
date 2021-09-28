import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './assets/img/mountains.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #444;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Rubik;
    color: #2980b9;

    font-weight: 400;
    background-size: 100%;
    background-clip: text;

    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    color: #fff;
    background: #1a5276;
    border: 2px solid #2471a3;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
