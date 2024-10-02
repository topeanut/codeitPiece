import styled from 'styled-components';
import noimg from 'assets/Group/noImgBack.svg';

export const ItemList = styled.div`
  display: grid;
  grid-template-areas: auto;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: 200px auto;  */

  gap: 20px;
  /* flex-grow: 1;  */

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemWrapper = styled.div`
  min-width: 200px;
  width: calc(100% - 40px);
  margin: 20px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1; /* 높이를 유동적으로 조정 */
`;

export const Item = styled.div`
  flex: 1 1 calc(50% - 1.125rem);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    width: 100%;
    padding-top: 100%; /* 비율을 유지하며 높이를 너비의 100%로 설정하여 정사각형으로 만듦 */
    position: relative;
    overflow: hidden;
  }

  img {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }
`;
export const ItemTitle = styled.p`
  color: ${(props) => props.theme.colors.black};
  ${(props) => props.theme.fontStyles.Bold14};

  text-align: left;
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1; /* Allow this to take available space */

  .oneSection {
    display: flex;
    gap: 10px;
  }

  .twoSection {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .threeSection {
    display: flex;
    gap: 40px;
    width: calc(100% - 50px);
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  min-width: 200px;
  flex: 1;
  min-height: 300px;
  position: relative;
  overflow: hidden;
  background-image: ${({ imageUrl }) =>
    imageUrl ? `url(${imageUrl})` : `url(${noimg})`};
  background-size: cover; /* 이미지 크기를 조정 */
  background-position: center; /* 이미지를 가운데에 배치 */
  height: auto;
  /* background: #efede4; */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    min-width: 300px;
    /* flex: 1; */
    /* width: 100%; */
    height: 100%;
  }
`;

export const DDay = styled.span`
  ${(props) => props.theme.fontStyles.Regular14};
  color: ${(props) => props.theme.colors.black};
`;

export const PublicBox = styled.span`
  ${(props) => props.theme.fontStyles.Regular14};
  color: ${(props) => props.theme.colors.gray1};
`;

export const Introduction = styled.p`
  color: ${(props) => props.theme.colors.black};
  ${(props) => props.theme.fontStyles.Regular14};
  line-height: normal;
`;

export const CountBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${(props) => props.theme.colors.gray2};
  ${(props) => props.theme.fontStyles.Regular12};

  @media (max-width: 1700px) {
    font-size: 10px;
  }
  @media (max-width: 1500px) {
    font-size: 8px;
  }

  span {
    width: 100%;
    color: ${(props) => props.theme.colors.black};
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;
