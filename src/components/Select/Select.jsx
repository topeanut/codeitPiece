import React, { useRef, useState } from 'react';
import Select from 'react-select';
import { useTheme } from 'styled-components';

function CustomSelect() {
  const theme = useTheme();
  const firstSelectRef = useRef(null);

  const options = [
    { value: '최신순', label: '최신순' },
    { value: '댓글순', label: '댓글순' },
    { value: '공감순', label: '공감순' },
  ];

  // 기본 선택된 옵션을 '최신순'으로 설정
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const onChangeSelect = (option) => {
    setSelectedOption(option);
    console.log(option);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: '100%',
      height: '45px',
      color: 'black',
      backgroundColor: 'transparent', // Control의 배경색
      border: state.isFocused ? '2px solid #EFEDE4' : '1px solid black',
      boxShadow: state.isFocused ? '0 0 5px #EFEDE4' : 'none',
      transition: 'border-color 0.2s ease',
      ...theme.fontStyles.Regular14,
    }),
    menu: (provided) => ({
      ...provided,
      width: '100%',
      fontWeight: '500',
      backgroundColor: '#EFEDE4',
      ...theme.fontStyles.Regular14,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? theme.colors.gray4
        : theme.colors.white, // 선택된 옵션 배경
      padding: '10px',
      color: state.isSelected ? theme.colors.gray1 : theme.colors.black,
      fontFamily: theme.fontStyles.Regular14.fontFamily,
      fontSize: theme.fontStyles.Regular14.fontSize,
      fontWeight: theme.fontStyles.Regular14.fontWeight,
    }),
  };

  return (
    <Select
      styles={customStyles}
      ref={firstSelectRef}
      onChange={onChangeSelect}
      options={options}
      placeholder="카테고리 선택"
      value={selectedOption} // 현재 선택된 옵션을 표시
      isSearchable={false} // 입력 불가
    />
  );
}

export default CustomSelect;
