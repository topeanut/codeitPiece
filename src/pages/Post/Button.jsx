import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border-radius: 6px;
  background: var(--black-black_282828, #282828);
  display: flex;
  width: 400px;
  height: 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  cursor: pointer;
  color: #fafafa;
`;

const Button = ({ text, onClick }) => {
  //if use text
  return <ButtonWrapper onClick={onClick}>{text}</ButtonWrapper>;
};
export default Button;
