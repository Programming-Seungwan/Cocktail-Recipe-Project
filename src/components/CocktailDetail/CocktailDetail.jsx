import styled from 'styled-components';
import { useDataContext } from '../../dataContext';
import { useEffect, useState } from 'react';

const StyledCocktailDetailContainer = styled.div`
  margin: 7vh 0;
  padding: 0vh 1vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
`;

// 덩어리 1 = 이미지 + 칵테일 명
const StyledImageAndNameContainer = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  width: 300px;
  height: 400px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const StyledCocktailDetailImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const StyledCocktailDetailP = styled.p`
  font-size: 22px;
  text-align: center;
  font-family: Pretendard-Regular;
  position: absolute;
  width: 100%;
  margin: 0;
  color: #4b5563;
  bottom: 18px;
  text-align: center;
  line-height: 60px;
`;

// 덩어리 2 = 재료 + 재료들 나열
const StyledIngredientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: auto;
  justify-content: space-between;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 1rem;
  padding: 15px;
  margin: 20px 0;
`;

const StyledIngredientDetailP = styled.p`
  font-size: 22px;
  margin: 0 0 35px 0;
`;

// ul은 재료를 나열하는 데에 쓰인다
const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

// ol은 레시피에서 쓰인다
const StyledOl = styled.ol`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`;

const StyledIngredientList = styled.li`
  font-family: 'Pretendard-Regular';
  width: 100%;
  display: flex;
  justify-content: center;
  color: #4b5563;
`;

// 덩어리 3 = 레시피 + 레시피 나열
const StyledRecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: auto;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 2vh;
`;

const StyledRecipeList = styled.li`
  font-family: 'Pretendard-Regular';
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function CocktailDetail() {
  const { currentDetailCocktailInfo } = useDataContext();
  const [ingredientArray, setIngredientArray] = useState([]);
  const [recipeArray, setRecipeArray] = useState([]);

  useEffect(() => {
    const tmpIngredientArray = [];

    for (let i = 1; i <= 15; i++) {
      console.log(currentDetailCocktailInfo[`strIngredient${i}`]);
      if (currentDetailCocktailInfo[`strIngredient${i}`] !== null) {
        tmpIngredientArray.push(currentDetailCocktailInfo[`strIngredient${i}`]);
      }
    }
    const tmpRecipeArray = currentDetailCocktailInfo['strInstructions'].split('.');

    setIngredientArray(tmpIngredientArray);
    setRecipeArray(tmpRecipeArray);
  }, []);

  return (
    <StyledCocktailDetailContainer className='scroll-box'>
      <StyledImageAndNameContainer>
        <StyledCocktailDetailImage
          src={`${currentDetailCocktailInfo.strDrinkThumb}/preview`}
          alt='cocktail card image'
        />
        <StyledCocktailDetailP>{currentDetailCocktailInfo.strDrink}</StyledCocktailDetailP>
      </StyledImageAndNameContainer>

      <StyledIngredientContainer>
        <StyledIngredientDetailP>Ingredients for your cocktail!</StyledIngredientDetailP>

        <StyledUl>
          {ingredientArray.map((ingredient, index) => (
            <StyledIngredientList key={index}>{ingredient}</StyledIngredientList>
          ))}
        </StyledUl>
      </StyledIngredientContainer>

      <StyledRecipeContainer>
        <StyledCocktailDetailP style={{ fontSize: '15px' }}>Recipes for your cocktail!</StyledCocktailDetailP>
        <StyledOl>
          {recipeArray.map((recipe, index) => (
            <StyledRecipeList key={index}>{recipe}</StyledRecipeList>
          ))}
        </StyledOl>
      </StyledRecipeContainer>
    </StyledCocktailDetailContainer>
  );
}
