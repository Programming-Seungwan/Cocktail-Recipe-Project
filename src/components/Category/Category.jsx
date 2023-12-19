// 해당 컴포넌트에서는 카테고리 별로 버튼을 클릭하면 그에 맞는 cocktailCard를 쭈욱 보여줄 필요가 있다
// 이번에는 카테고리 버튼을 클릭했다고 해서 카테고리 버튼 군집이 사라지지 않고 그 아래에 그냥 칵테일이 바뀔 필요가 있는 것이다.
// useEffect 훅을 사용하여 선택된 카테고리가 달라질 때마다 cocktailInfo 군집 상태 배열을 다시 변경시킨다
// 사용자는 제시된 버튼 중에서 클릭을 하는 것이기 때문에 아무것도 출력이 안되는 경우는 없음
// 하지만 중간에 네트워크 오류 등의 이유로 상태가 꼬여버리면 그냥 오류가 생겼다는 UI를 출력해주는 것이 좋을까?

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import CategoryCocktailCard from './CategoryCocktailCard/CategoryCocktailCard';
import { getCocktailsByCategoryName } from '../../apiFuncs';

const StyledCategoryContainer = styled.div`
  margin: 8vh 0;
  padding: 0 1vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
`;

const StyledCategoryButtonUL = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledCategoryButton = styled.button`
  background-color: var(--grey4);
  width: calc(33% - 15px);
  height: 55px;
  margin: 5px;
  border-radius: 10px;
  padding: 0;
  border: 1px;
  font-family: GmarketSansMedium;

  &:hover {
    cursor: pointer;
  }
`;

const StyledCategoryCocktaiCardUL = styled.ul`
  margin: 0;
  padding: 0;
`;

export default function Category() {
  const categoryArray = [
    'Ordinary_drink',
    'Cocktail',
    'Other / Unknown',
    'Shot',
    'Soft Drink',
    'Punch / Party Drink',
    'Shake',
    'Coffee / Tea',
  ];

  // 해당 이벤트 트리거 함수가 발동되면 useEffect 훅의 실행으로 새로운 데이터들이 받아와짐
  function handleClickCategoryButton(ev) {
    setSelectedCategory(ev.target.innerText);
  }

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryCocktailArray, SetCategoryCocktailArray] = useState([]);

  useEffect(() => {
    if (selectedCategory === null) return;

    getCocktailsByCategoryName(selectedCategory).then((data) => SetCategoryCocktailArray(data.drinks));
  }, [selectedCategory]);

  return (
    <StyledCategoryContainer className='scroll-box'>
      <StyledCategoryButtonUL>
        {categoryArray.map((categoryName, index) => (
          <StyledCategoryButton key={categoryName} onClick={handleClickCategoryButton}>
            {categoryName}
          </StyledCategoryButton>
        ))}
      </StyledCategoryButtonUL>

      <StyledCategoryCocktaiCardUL>
        {categoryCocktailArray.map((categoryCocktail, index) => (
          <CategoryCocktailCard key={index} cocktailCardInfo={categoryCocktail} />
        ))}
      </StyledCategoryCocktaiCardUL>
    </StyledCategoryContainer>
  );
}
