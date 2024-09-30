import styled from 'styled-components';

export const GroupWrapper = styled.div`
  width: calc(100% - 360px);
  margin: 40px 180px 120px;
  color: ${(props) => props.theme.colors.gray1};
`;

export const SearchSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TabBox = styled.button`
  width: 66px;
`;
