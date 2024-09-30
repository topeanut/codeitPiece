import {
  GroupWrapper,
  SearchBox,
  SearchInput,
  SearchSection,
  TabBox,
} from './styles';
import { useState } from 'react';
import searchIcon from 'assets/Group/searchBar.svg';

export const Group = () => {
  const [isLock, setIsLock] = useState('public');

  const handleClick = (view) => {
    setIsLock(view);
  };

  return (
    <GroupWrapper>
      <SearchSection>
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
        <SearchBox>
          <img src={searchIcon} style={{ backgroundColor: 'transparent' }} />
          <SearchInput placeholder="그룹명을 검색해 주세요" />
        </SearchBox>
      </SearchSection>
    </GroupWrapper>
  );
};
