import { GroupWrapper, TabBox } from './styles';
import { useState } from 'react';

export const Group = () => {
  const [isLock, setIsLock] = useState('public');

  const handleClick = (view) => {
    setIsLock(view);
  };

  return (
    <GroupWrapper>
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
    </GroupWrapper>
  );
};
