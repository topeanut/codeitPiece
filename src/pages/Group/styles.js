import styled from 'styled-components';

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: calc(100% - 360px);
  margin: 40px 180px 120px;
`;

export const SearchSection = styled.div`
  width: 100%;
  max-height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 40px;
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

  .TabBox {
    display: flex;
    gap: 200px;
  }
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

export const SelectBox = styled.div`
  width: 160px;
`;

export const GroupBox = styled.div`
  width: 100%;
  min-height: 700px;
  margin-bottom: 264px;
  display: flex;
  justify-content: center;
  align-items: center;

  .noGroupImg {
    display: flex;
    justify-content: center;
  }

  img {
    align-items: center;
    max-width: 100px;
  }
`;

export const NoNotice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  .Bold18 {
    ${(props) => props.theme.fontStyles.Bold18};
    text-align: center;
    margin: 40px 0 20px;
  }

  .Regular14 {
    ${(props) => props.theme.fontStyles.Regular14};
    text-align: center;
    margin-bottom: 180px;
  }

  .GroupBtn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledButton = styled.div`
  width: 100%;
  max-width: 400px;
  height: 45px;
`;

export const GroupItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
