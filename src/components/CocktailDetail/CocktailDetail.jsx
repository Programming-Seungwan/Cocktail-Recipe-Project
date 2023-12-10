import styled from 'styled-components';
import { useDataContext } from '../../dataContext';
import { useEffect, useState } from 'react';

const StyledCocktailDetailContainer = styled.div`
  margin: 7vh 0;
  padding: 0 1vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow-y: auto;
`;

const StyledImageAndNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;
  width: 250px;
  height: 350px;
  padding-top: 10px;
`;

const StyledCocktailDetailImage = styled.img`
  border-radius: 10px;
`;

const StyledCocktailDetailP = styled.p`
  font-size: 25px;
  text-algin: center;
  font-family: yg-jalnan;
`;

const StyledIngredientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: auto;
  justify-content: space-evenly;
`;

const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

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

const StyledRecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: auto;
  justify-content: space-evenly;
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
    <StyledCocktailDetailContainer>
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
        <StyledOl>
          {recipeArray.map((recipe, index) => (
            <StyledIngredientList>{recipe}</StyledIngredientList>
          ))}
        </StyledOl>
      </StyledRecipeContainer>
    </StyledCocktailDetailContainer>
  );
}
