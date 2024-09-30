import styled from 'styled-components';
import Button from 'components/Card/Button';
import logo from 'assets/logo.svg';
import { FakeDiv, HeaderWrapper, LogoContainer, StyledButton } from './styles';

export const Header = ({ showCreateGroupButton }) => {
  return (
    <HeaderWrapper>
      {showCreateGroupButton && <FakeDiv></FakeDiv>}
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      {showCreateGroupButton && (
        <StyledButton>
          <Button>그룹 만들기</Button>
        </StyledButton>
      )}
    </HeaderWrapper>
  );
};
