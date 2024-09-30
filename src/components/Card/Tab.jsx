import styled from 'styled-components';
import PropTypes from 'prop-types';

Tab.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Tab({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  min-height: 45px;
  border-radius: 22.5px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
`;
