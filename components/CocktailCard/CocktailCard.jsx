// 본 컴포넌트는 여러 곳에서 써먹을 칵테일 기본 UI에 해당함
// 이 카드의 우측 상단에 뒤집기 버튼을 클릭하면 도수가 보이고 왔다갔다.
// 하지만 그냥 본체를 클릭하면 detail 페이지로 넘어간다

import styles from './cocktailCard.module.css';

export default function CocktailCard({ cocktailInfo }) {
  console.log(cocktailInfo);
  return (
    <div className={styles.cocktailCardComponentContainer}>
      <img src={cocktailInfo.strDrinkThumb + '/preview'} alt='cocktail image' />
      <p>{cocktailInfo.strDrink}</p>
    </div>
  );
}
