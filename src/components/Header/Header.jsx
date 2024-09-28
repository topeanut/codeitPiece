import { HeaderWrapper } from './styles';
import logo from 'assets/logo.svg';

export const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logo} alt="logo" />
    </HeaderWrapper>
  );
};
