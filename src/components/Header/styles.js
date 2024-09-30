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

  @media (max-width: 800px) {
    padding: 26px 50px;
  }
`;
export const FakeDiv = styled.div`
  width: 100%;
  height: 100%;
  max-width: 200px;
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  img {
    min-width: 50px;
    max-width: 137px;
    width: 100%;
  }
`;

export const StyledButton = styled.div`
  /* min-width: 150px; */
  width: 100%;
  max-width: 200px;
  height: 45px;
`;
