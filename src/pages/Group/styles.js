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
  justify-content: space-evenly;
  gap: 10px;
`;

export const TabBox = styled.button`
  ${(props) => props.theme.fontStyles.Bold14};
  width: 66px;
  height: 45px;
  border-radius: 22.5px;
  border: none;
  color: ${({ theme, $isLock }) =>
    $isLock === 'true' ? `${theme.colors.white}` : `${theme.colors.black}`};
  background-color: ${({ theme, $isLock }) =>
    $isLock === 'true' ? `${theme.colors.black}` : 'transparent'};
  cursor: pointer;
`;

export const SearchBox = styled.div`
  flex: 1;
  border-radius: 6px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.gray4};
  display: flex;
  gap: 10px;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  border-radius: 5px; // 테두리 둥글기
  width: 100%;

  ::placeholder {
    ${(props) => props.theme.fontStyles.Regular14};
    color: ${(props) => props.theme.colors.gray2};
  }

  &:focus {
    outline: none; // 기본 outline 제거
    /* box-shadow: 0 0 0 2px ${(props) =>
      props.theme.colors.gray3}; // 포커스 시 box-shadow  } */
  }
`;
