import styled from 'styled-components';
import { useDataContext } from '../../dataContext';
import { useEffect, useState } from 'react';

const StyledCocktailDetailContainer = styled.div`
  margin: 7vh 0;
  padding: 2vh 1vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  // 주 방향의 정렬을 space-between을 해줘야지 space-around 같은 거로 해주면 안된다
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
`;

// 덩어리 1 = 이미지 + 칵테일 명
const StyledImageAndNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;
  width: 250px;
  height: 350px;
  margin-bottom: 2vh;
`;

const StyledCocktailDetailImage = styled.img`
  border-radius: 10px;
`;

const StyledCocktailDetailP = styled.p`
  font-size: 25px;
  text-align: center;
  font-family: yg-jalnan;
`;

// 덩어리 2 = 재료 + 재료들 나열
const StyledIngredientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: auto;
  justify-content: space-evenly;
  border: 1px solid black;
  border-radius: 15px;
  margin-bottom: 2vh;
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
  font-family: GmarketSansMedium;
  width: 100%;
  display: flex;
  justify-content: center;
`;

// 덩어리 3 = 레시피 + 레시피 나열
const StyledRecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: auto;
  justify-content: space-evenly;
  border: 1px solid black;
  border-radius: 15px;
  padding: 0 10px 10px 10px;
  margin-bottom: 2vh;
`;

const StyledRecipeList = styled.li`
  font-family: GmarketSansMedium;
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
        <StyledCocktailDetailP style={{ fontSize: '15px' }}>Ingredients for your cocktail!</StyledCocktailDetailP>

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
