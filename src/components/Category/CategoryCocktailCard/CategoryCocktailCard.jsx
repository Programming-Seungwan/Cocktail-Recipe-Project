// category 탭에서 써먹을 cocktail card의 ui를 정의하는 컴포넌트이다.
// prop으로는 cocktailCardInfo라는 이름, 이미지, idDrink를 담은 정보를 전달 받는다
import styled from 'styled-components';
import { useDataContext } from '../../../dataContext';
import { getCocktailByCocktailId } from '../../../apiFuncs';
import { useNavigate } from 'react-router-dom';

const StyledCategoryCocktailCardUI = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &: hover {
    cursor: pointer;
  }

  &: active {
    transform: translate(-5px, -5px);
  }
`;

const StyledCategoryCocktailImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const StyledCategoryCocktailP = styled.p`
  font-size: 22px;
  text-align: center;
  margin: 0;
  color: #4b5563;
  font-family: Pretendard-Regular;
  position: absolute;
  bottom: 18px;
  width: 100%;
  text-align: center;
`;
export default function CategoryCocktailCard({ cocktailCardInfo }) {
  const { handleCurrentDetailCocktailInfo } = useDataContext();
  const navigate = useNavigate();

  async function handleClickCategoryCocktailCard() {
    const response = await getCocktailByCocktailId(cocktailCardInfo.idDrink);

    const cocktailData = response['drinks'][0];
    console.log(cocktailData['strInstructions']);
    // handleCurrentDetailCocktailInfo((prev) => cocktailData);
    handleCurrentDetailCocktailInfo(cocktailData);
    navigate('/cocktail-detail');
  }

  return (
    <StyledCategoryCocktailCardUI onClick={handleClickCategoryCocktailCard}>
      <StyledCategoryCocktailImage
        src={`${cocktailCardInfo.strDrinkThumb}/preview`}
        alt='category cocktail card image'
      />
      <StyledCategoryCocktailP>{cocktailCardInfo.strDrink}</StyledCategoryCocktailP>
    </StyledCategoryCocktailCardUI>
  );
}
