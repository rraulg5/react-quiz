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
    font-family: 'Rubik', sans-serif;
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
    color: #fff;
    font-family: Rubik;
    font-size: 1.5rem;
    margin: 0;
    background: #3e5c75;
    border-radius: 10px;
    border: 2px solid #fff;
    padding: 10px 70px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
  }

  h1 {
    font-family: Rubik;
    color: #3e5c76;

    font-weight: 400;
    background-size: 100%;
    background-clip: text;

    font-size: 2.5rem;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    color: #fff;
    background: #538ec2;
    border: 2px solid #3e5c76;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-size: 1.2rem;
    height: 40px;
    margin-top: 20px;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
    margin-bottom: 20px;
  }
`;
