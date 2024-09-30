import Tab from 'components/Card/Tab';
import { GroupWrapper, TabBox } from './styles';
import { useState } from 'react';

export const Group = () => {
  const [isLock, setIsLock] = useState('public');

  return (
    <GroupWrapper>
      <TabBox>공개</TabBox>
      <TabBox>비공개</TabBox>
    </GroupWrapper>
  );
};
