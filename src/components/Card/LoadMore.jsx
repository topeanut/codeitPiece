import styled from 'styled-components';
import PropTypes from 'prop-types';

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function CardContent({ children }) {
  return <Container>더보기</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 60px;
  border-radius: 6px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.gray5};
  cursor: pointer;
`;
