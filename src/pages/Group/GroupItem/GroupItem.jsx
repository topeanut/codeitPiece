import { useState } from 'react';
import {
  DDay,
  DetailContent,
  ImgContainer,
  PublicBox,
  ItemList,
  ItemTitle,
  ItemWrapper,
  Introduction,
  CountBox,
} from './styles';
import noimg from 'assets/Group/noImgBack.svg';
import logo from 'assets/flower.svg';
import { useNavigate } from 'react-router';
import CardContent from 'components/Card/CardContent';

const GroupItem = ({ groups }) => {
  const hasgroups = groups && groups.length > 0;
  const [showDetail, setShowDetail] = useState(null);
  const navigate = useNavigate();

  const handleClickToGo = (id) => {
    navigate(`${id}`);
  };

  // 날짜 차이를 계산하는 함수
  const calculateDaysDiff = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - createdDate); // 절대값으로 차이를 계산
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 일수로 변환
    return diffDays;
  };

  return (
    <>
      {hasgroups ? (
        <ItemList>
          {groups.map((group, index) => (
            <CardContent key={index}>
              <ItemWrapper>
                {group.imageUrl && group.isPublic && (
                  <ImgContainer imageUrl={group.imageUrl}>
                    {/* {group.imageUrl && <img src={group.imageUrl} alt="groupImg" />} */}
                  </ImgContainer>
                )}

                <DetailContent>
                  <div className="oneSection">
                    <DDay>D+{calculateDaysDiff(group.createdAt)}</DDay> |
                    <PublicBox>{group.isPublic ? '공개' : '비공개'} </PublicBox>
                  </div>
                  <div className="twoSection">
                    <ItemTitle onClick={() => handleClickToGo(group.id)}>
                      {group.name.length <= 8
                        ? group.name
                        : `${group.name.slice(0, 8)}...`}
                    </ItemTitle>
                    <Introduction>{group.introduction}</Introduction>
                  </div>
                  <div className="threeSection">
                    {group.isPublic && (
                      <CountBox>
                        <p>획득 뱃지</p>
                        <span>{group.badgeCount}</span>
                      </CountBox>
                    )}
                    <CountBox>
                      <p>추억</p>
                      <span>{group.postCount}</span>
                    </CountBox>
                    <CountBox>
                      <p>그룹 공감</p>
                      <span>
                        <img src={logo} />
                        {group.likeCount}
                      </span>
                    </CountBox>
                  </div>
                </DetailContent>
              </ItemWrapper>
            </CardContent>
          ))}
        </ItemList>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </>
  );
};
export default GroupItem;
