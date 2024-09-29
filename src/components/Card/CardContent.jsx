import styled from 'styled-components';
import PropTypes from 'prop-types';

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function CardContent({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 23.4375rem;
  border-radius: 12px;
  border: 1px solid var(--gray-gray_DDDDDD, #ddd);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.gray5};
`;
