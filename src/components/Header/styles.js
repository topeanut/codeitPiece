import styled from 'styled-components';
import Button from 'components/Card/Button';
import logo from 'assets/logo.svg';

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 180px;
  position: relative;
  gap: 20px;
`;
export const FakeDiv = styled.div`
  width: 200px;
  min-width: 150px;
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.div`
  min-width: 150px;
  width: 200px;
  height: 45px;

  @media (max-width: 1000px) {
    width: 100px;
  }
`;

export const Header = ({ showCreateGroupButton }) => {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      {showCreateGroupButton && <StyledButton>그룹 만들기</StyledButton>}
    </HeaderWrapper>
  );
};
