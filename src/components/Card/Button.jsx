import styled from 'styled-components';
import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Button({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 23.4375rem;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
`;
