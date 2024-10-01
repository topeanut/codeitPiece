import React from 'react';
import {
  PostWrapper,
  Title,
  Subtitle,
  ImageWrapper,
  Content,
  CommentSection,
  CommentInputWrapper,
} from './post_styles';
import styled from 'styled-components';

export default function Button({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
  border: none;
  cursor: pointer;
`;
