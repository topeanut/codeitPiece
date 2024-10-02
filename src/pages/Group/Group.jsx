import {
  GroupBox,
  GroupItemsWrapper,
  GroupWrapper,
  NoNotice,
  SearchBox,
  SearchInput,
  SearchSection,
  SelectBox,
  StyledButton,
  TabBox,
} from './styles';
import { useEffect, useState } from 'react';
import searchIcon from 'assets/Group/searchBar.svg';
import noGroup from 'assets/Group/nopublic.svg';
import CustomSelect from 'components/Select/Select';
import Button from 'components/Card/Button';
import LoadMore from 'components/Card/LoadMore';
import GroupItem from './GroupItem/GroupItem';
import flower from 'assets/flower.svg';

export const Group = () => {
  const [isLock, setIsLock] = useState('public');
  const [sortOrder, setSortOrder] = useState('최신순');
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: '에델바이스',
      imageUrl:
        'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg',
      isPublic: true,
      likeCount: 1.5,
      badgeCount: 2,
      postCount: 8,
      createdAt: '2024-02-22T07:47:49.803Z',
      introduction: '서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.',
    },
    {
      id: 2,
      name: 'string',
      imageUrl:
        'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg',

      isPublic: true,
      likeCount: 0,
      badgeCount: 0,
      postCount: 0,
      createdAt: '2024-02-22T07:47:49.803Z',
      introduction: 'string',
    },
    {
      id: 3,
      name: 'string',
      imageUrl:
        'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg',

      isPublic: false,
      likeCount: 0,
      badgeCount: 0,
      postCount: 0,
      createdAt: '2024-02-22T07:47:49.803Z',
      introduction: 'string',
    },
    {
      id: 4,
      name: 'string',
      imageUrl: '',
      isPublic: true,
      likeCount: 0,
      badgeCount: 0,
      postCount: 0,
      createdAt: '2024-02-22T07:47:49.803Z',
      introduction: 'string',
    },
    {
      id: 5,
      name: 'string',
      imageUrl: '',
      isPublic: true,
      likeCount: 0,
      badgeCount: 0,
      postCount: 0,
      createdAt: '2024-02-22T07:47:49.803Z',
      introduction: 'string',
    },
    {
      id: 6,
      name: 'string',
      imageUrl: '',
      isPublic: true,
      likeCount: 0,
      badgeCount: 0,
      postCount: 0,
      createdAt: '2024-02-22T07:47:49.803Z',
      introduction: 'string',
    },
    {
      id: 7,
      name: 'string',
      imageUrl: '',
      isPublic: true,
      likeCount: 0,
      badgeCount: 100,
      postCount: 10,
      createdAt: '2024-02-22T07:47:49.803Z',
      introduction: 'string',
    },
    {
      id: 8,
      name: 'string',
      imageUrl: '',
      isPublic: true,
      likeCount: 0,
      badgeCount: 0,
      postCount: 0,
      createdAt: '2024-02-22T07:47:49.803Z',
      introduction: 'string',
    },
    {
      id: 9,
      name: 'string',
      imageUrl: '',
      isPublic: true,
      likeCount: 0,
      badgeCount: 0,
      postCount: 0,
      createdAt: '2024-02-22T07:47:49.803Z',
      introduction: 'string',
    },
    {
      id: 10,
      name: 'string',
      imageUrl: '',
      isPublic: true,
      likeCount: 0,
      badgeCount: 0,
      postCount: 0,
      createdAt: '2024-02-22T07:47:49.803Z',
      introduction: 'string',
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10; // 페이지당 그룹 수

  //useEfeect로 처음에 그룹을 가져오고 디폴트로 공개 그룹애들만 보여주다가
  // 비공개 탭을 누르면 isPrivate인 아이들만 다시 거르는 함수로 어ㅓㅉ구
  // useEffect(() => {
  //   const fetchGroups = async (currentPage, pageSize) => {
  //     const response = await fetch(
  //       `/api/groups?page=${currentPage}&pageSize=${pageSize}&isPublic=${isLock === 'public'}&sortBy=${sortOrder}&keyword=${searchKeyword}`
  //     );
  //     const data = await response.json();
  //     setGroups(data.data);
  //   };

  //   fetchGroups();
  // }, [isLock, sortOrder, searchKeyword]); // 정렬 순서나 공개/비공개가 변경될 때마다 그룹 데이터를 다시 가져옴

  const handleClick = (view) => {
    setIsLock(view);
  };

  const handleSortChange = (selectedOption) => {
    setSortOrder(selectedOption.value); // 선택된 옵션의 value를 상태로 저장
  };

  const items = [
    { id: 1, title: 'Item 1', createdAt: '2024-01-01', likes: 10 },
    { id: 2, title: 'Item 2', createdAt: '2024-02-01', likes: 20 },
    { id: 3, title: 'Item 3', createdAt: '2024-01-15', likes: 15 },
    // ... 추가 아이템
  ];
  // 선택된 정렬 기준에 따라 아이템 정렬
  const sortedItems = [...items].sort((a, b) => {
    if (sortOrder === '최신순') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sortOrder === '댓글순') {
      // 댓글 수를 기준으로 정렬 (예시)
      return b.comments - a.comments; // 댓글 수가 없는 경우 수정 필요
    } else if (sortOrder === '공감순') {
      return b.likes - a.likes; // 공감 수로 정렬
    }
    return 0;
  });

  return (
    <GroupWrapper>
      <SearchSection>
        <div className="TabBox">
          <TabBox
            aria-pressed={isLock === 'public'}
            onClick={() => handleClick('public')}
            $isLock={isLock === 'public' ? 'true' : 'false'}
          >
            공개
          </TabBox>
          <TabBox
            aria-pressed={isLock === 'private'}
            onClick={() => handleClick('private')}
            $isLock={isLock === 'private' ? 'true' : 'false'}
          >
            비공개
          </TabBox>
        </div>
        <SearchBox>
          <img src={searchIcon} style={{ backgroundColor: 'transparent' }} />
          <SearchInput placeholder="그룹명을 검색해 주세요" />
        </SearchBox>
        <SelectBox>
          <CustomSelect onChange={handleSortChange} />
        </SelectBox>
      </SearchSection>
      <GroupBox>
        {groups.length > 0 ? (
          <GroupItemsWrapper>
            <GroupItem groups={groups} />
            <LoadMore />
          </GroupItemsWrapper>
        ) : (
          <NoNotice>
            <div className="noGroupImg">
              <img src={noGroup} />
            </div>
            <p className="Bold18">등록된 공개 그룹이 없습니다</p>
            <p className="Regular14">가장 먼저 그룹을 만들어 보세요!</p>
            <div className="GroupBtn">
              <StyledButton>
                <Button>그룹 만들기</Button>
              </StyledButton>
            </div>
          </NoNotice>
        )}
      </GroupBox>
    </GroupWrapper>
  );
};
