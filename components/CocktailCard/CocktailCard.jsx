// 본 컴포넌트는 여러 곳에서 써먹을 칵테일 기본 UI에 해당함
// 이 카드의 우측 상단에 뒤집기 버튼을 클릭하면 도수가 보이고 왔다갔다.
// 하지만 그냥 본체를 클릭하면 detail 페이지로 넘어간다
import styles from './cocktailCard.module.css';
import { useDataContext } from '../../src/dataContext';
import { useNavigate } from 'react-router-dom';

export default function CocktailCard({ cocktailInfo }) {
  const { handleAppMode, currentDetailCocktailInfo, handleCurrentDetailCocktailInfo } = useDataContext();
  const navigate = useNavigate();

  function handleClickCocktailCard(data) {
    handleCurrentDetailCocktailInfo(data);
    handleAppMode('cocktailDetail');
    console.log(currentDetailCocktailInfo);
    navigate('/cocktail-detail');
  }

  return (
    <div className={styles.cocktailCardComponentContainer} onClick={() => handleClickCocktailCard(cocktailInfo)}>
      <img src={cocktailInfo.strDrinkThumb + '/preview'} alt='cocktail image' />
      <p>{cocktailInfo.strDrink}</p>
    </div>
  );
}
