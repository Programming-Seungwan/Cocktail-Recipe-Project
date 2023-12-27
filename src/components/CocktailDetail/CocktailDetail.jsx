import styled from 'styled-components';
import { useDataContext } from '../../dataContext';
import { useEffect, useState } from 'react';

const StyledCocktailDetailContainer = styled.div`
  margin: 8vh 0;
  padding: 1vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: auto;
`;

// 덩어리 1 = 이미지 + 칵테일 명
const StyledImageAndNameContainer = styled.div`
  overflow: hidden;
  border-radius: 1rem;
  width: 300px;
  height: 400px;
  min-height: 400px;
  position: relative;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const StyledCocktailImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const StyledCocktailName = styled.p`
  font-size: 22px;
  text-align: center;
  margin: 0;
  color: #4b5563;
  font-family: Pretendard-Regular;
  // margin-top: 50px;
  width: 100%;
  position: absolute;
  bottom: 18px;
  text-align: center;
`;
// 덩어리 2 = 재료 + 재료들 나열
const StyledIngredientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 1rem;
`;

const StyledIngredientDescriptionP = styled.p`
  width: 90%;
  text-align: center;
  font-size: 22px;
`;

const StyledIngredientNameDiv = styled.div`
  width: 90%;
  margin: 10px 0;
  font-family: Pretendard-Regular;
  color: #4b5563;
  font-size: 20px;
`;

// 덩어리 3 = 레시피 + 레시피 나열
const StyledRecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: auto;
  justify-content: space-between;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const StyledRecipeDescriptionP = styled.p`
  width: 90%;
  text-align: center;
  font-size: 22px;
`;

const StyledRecipeDiv = styled.div`
  width: 90%;
  font-family: Pretendard-Regular;
  color: #4b5563;
  font-size: 20px;
  margin: 10px 0;
`;

export default function CocktailDetail() {
  const { currentDetailCocktailInfo } = useDataContext();
  const [ingredientArray, setIngredientArray] = useState([]);
  const [recipeArray, setRecipeArray] = useState([]);

  useEffect(() => {
    const tmpIngredientArray = [];
    console.log(currentDetailCocktailInfo);
    for (let i = 1; i <= 15; i++) {
      if (currentDetailCocktailInfo[`strIngredient${i}`] !== null) {
        tmpIngredientArray.push(currentDetailCocktailInfo[`strIngredient${i}`]);
      }
    }
    const tmpRecipeArray = currentDetailCocktailInfo['strInstructions'].split('.');

    setIngredientArray(tmpIngredientArray);
    setRecipeArray(tmpRecipeArray);
  }, []);

  console.log(recipeArray);
  return (
    <StyledCocktailDetailContainer className='scroll-box'>
      <StyledImageAndNameContainer>
        <StyledCocktailImage src={`${currentDetailCocktailInfo.strDrinkThumb}/preview`} />
        <StyledCocktailName>{currentDetailCocktailInfo.strDrink}</StyledCocktailName>
      </StyledImageAndNameContainer>

      <StyledIngredientContainer>
        <StyledIngredientDescriptionP>Ingredients 🍶</StyledIngredientDescriptionP>
        {ingredientArray.map((ingredient, index) => (
          <StyledIngredientNameDiv key={ingredient}>
            {index + 1}. {ingredient}
          </StyledIngredientNameDiv>
        ))}
      </StyledIngredientContainer>

      <StyledRecipeContainer>
        <StyledRecipeDescriptionP>Recipes 📋</StyledRecipeDescriptionP>
        {recipeArray.map((recipe, index) => {
          if (recipe.length !== 0)
            return (
              <StyledRecipeDiv key={recipe}>
                {index + 1}. {recipe}
              </StyledRecipeDiv>
            );
          else return;
        })}
      </StyledRecipeContainer>
    </StyledCocktailDetailContainer>
  );
}
