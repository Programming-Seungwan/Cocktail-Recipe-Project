// 해당 칵테일 카드는 prop으로 칵테일의 관련 정보를 전달 받으며 이미지와 이름을 보여준다.
// 칵테일 카드를 클릭하면 cocktail-detail path로 넘어가며 contextAPI로 관리되는 전체 상태를 변경시켜주어 그 다음 렌더링을 해준다
import styled from 'styled-components';
import { useDataContext } from '../../dataContext';
import { Link } from 'react-router-dom';

const StyledCocktailCardUI = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
  position: relative;

  &: hover {
    cursor: pointer;
  }

  &: active {
    transform: translate(-5px, -5px);
  }
`;

const StyledCocktailImage = styled.img`
  border-radius: 10px;
  position: absolute;
  top: 10px;
`;

const StyledCocktailP = styled.p`
  font-size: 30px;
  text-align: center;
  display: block;
  margin: 0;
  font-family: GmarketSansMedium;
  position: absolute;
  bottom: 10px;
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
        <StyledCocktailImage
          src={`${cocktailInfo.strDrinkThumb}`}
          alt='cocktail card image'
          width='250px'
          height='250px'
        />
        <StyledCocktailP>{cocktailInfo.strDrink}</StyledCocktailP>
      </StyledCocktailCardUI>
    </Link>
  );
}
