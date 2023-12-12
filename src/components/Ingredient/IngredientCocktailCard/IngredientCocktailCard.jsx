// ingredient 탭에서 써먹을 cocktail card의 ui를 정의하는 컴포넌트이다.
// prop으로는 cocktailCardInfo라는 이름, 이미지, idDrink를 담은 정보를 전달 받는다
import styled from 'styled-components';
import { useDataContext } from '../../../dataContext';
import { getCocktailByCocktailId } from '../../../apiFuncs';
import { useNavigate } from 'react-router-dom';

const StyledIngredientCocktailCardUI = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;

  &: hover {
    cursor: pointer;
  }
`;

const StyledIngredientCocktailImage = styled.img`
  border-radius: 10px;
`;

const StyledIngredientCocktailP = styled.p`
  font-size: 30px;
  text-align: center;
  font-family: yg-jalnan;
`;
export default function IngredientCocktailCard({ ingredientCardInfo }) {
  const { handleCurrentDetailCocktailInfo } = useDataContext();
  const navigate = useNavigate();

  async function handleClickCategoryCocktailCard() {
    const response = await getCocktailByCocktailId(ingredientCardInfo.idDrink);

    const cocktailData = response['drinks'][0];
    console.log(cocktailData['strInstructions']);
    // handleCurrentDetailCocktailInfo((prev) => cocktailData);
    handleCurrentDetailCocktailInfo(cocktailData);
    navigate('/cocktail-detail');
  }

  return (
    <StyledIngredientCocktailCardUI onClick={handleClickCategoryCocktailCard}>
      <StyledIngredientCocktailImage
        src={`${ingredientCardInfo.strDrinkThumb}/preview`}
        alt='ingredient cocktail card image'
      />
      <StyledIngredientCocktailP>{ingredientCardInfo.strDrink}</StyledIngredientCocktailP>
    </StyledIngredientCocktailCardUI>
  );
}
