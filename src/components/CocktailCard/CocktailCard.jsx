// 해당 칵테일 카드는 prop으로 칵테일의 관련 정보를 전달 받으며 이미지와 이름을 보여준다.
// 칵테일 카드를 클릭하면 cocktail-detail path로 넘어가며 contextAPI로 관리되는 전체 상태를 변경시켜주어 그 다음 렌더링을 해준다
import styled from 'styled-components';
import { useDataContext } from '../../dataContext';
import { Link } from 'react-router-dom';

const StyledCocktailCardUI = styled.div`
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

  // &: active {
  //   transform: translate(-5px, -5px);
  // }
`;

const StyledCocktailImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const StyledCocktailP = styled.p`
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

// 모든 CocktailCard에는 cocktailInfo가 prop으로 전달된다
export default function CocktailCard({ cocktailInfo }) {
  const { handleCurrentDetailCocktailInfo } = useDataContext();

  function handleClickCocktailCard() {
    handleCurrentDetailCocktailInfo(cocktailInfo);
  }

  return (
    <Link to='/cocktail-detail' onClick={handleClickCocktailCard} style={{ textDecoration: 'none', color: 'black' }}>
      <StyledCocktailCardUI>
        <StyledCocktailImage src={`${cocktailInfo.strDrinkThumb}`} alt='cocktail card image' />
        <StyledCocktailP>{cocktailInfo.strDrink}</StyledCocktailP>
      </StyledCocktailCardUI>
    </Link>
  );
}
