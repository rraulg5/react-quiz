import styled from 'styled-components';

export const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  border: 2px solid #3e5c76;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  color: #31485c;
  max-width: 1100px;
  margin-top: 1.5rem;
  padding: 20px;
  text-align: center;

  p {
    font-size: 1.2rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct ? '#59BC86' : !correct && userClicked ? '#FF5656' : '#7AA0C2'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
