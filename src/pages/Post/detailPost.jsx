import React from 'react'; //for jsx
import {
  PostWrapper,
  Title,
  Subtitle,
  ImageWrapper,
  Content,
  CommentSection,
  CommentInputWrapper,
} from './post_styles';
import Button from './Button';
import CommentList from './commentList';

import { useState } from 'react';

const DetailPost = () => {
  return (
    <PostWrapper>
      <Title>제목</Title>
      <hr
        style={{
          border: '1px solid gray',
          height: '2px',
          margin: '20px 0',
          color: 'gray',
        }} //for object, js in jsx
      />
      <ImageWrapper>
        이미지
        <br></br>
      </ImageWrapper>
      <Content>
        본문 시작<br></br>
        <br></br>
        <br></br>본문 끝
      </Content>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button text="댓글 등록하기"></Button>
      </div>
    </PostWrapper>
  );
};
PostWrapper.displayName = 'PostWrapper';
export default DetailPost;
