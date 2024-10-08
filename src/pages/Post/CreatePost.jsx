import React from 'react'; //for jsx
import {
  CreatePostContainer,
  Form,
  InputContainer,
  Input,
} from './CreatePost_styles';
import Button from 'components/Card/Button';
//대문자는 컴포넌트 소문자는 html
const CreatePost = () => {
  return (
    <CreatePostContainer>
      <h1 style={{ fontStyle: 'bold' }}>추억 올리기</h1>
      <Form>
        <InputContainer>
          <h3>닉네임</h3>
          <Input type="text" placeholder="닉네임을 입력해주세요"></Input>
          <h3>제목</h3>
          <Input type="text" placeholder="제목을 입력해주세요"></Input>
          <h3>이미지</h3>
          <Input type="file" placeholder="이미지를 첨부해주세요"></Input>
          <h3>본문</h3>
          <Input type="text" placeholder="본문을 입력해주세요"></Input>
        </InputContainer>
        <InputContainer>
          <div>
            <h3>태그</h3>
            <Input
              type="text"
              placeholder="해시태그를 입력해주세요"
              //value={tagInput}
              //onChange={(e) => setTagInput(e.target.value)}
            ></Input>
            <Button>추가</Button>
          </div>
        </InputContainer>
      </Form>
    </CreatePostContainer>
  );
};

export default CreatePost;
