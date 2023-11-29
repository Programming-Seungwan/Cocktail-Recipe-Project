import styles from './cocktailDetail.module.css';
import { useDataContext } from '../../src/dataContext';

export default function CocktailDetail() {
  const { currentDetailCocktailInfo, handleCurrentDetailCocktailInfo } = useDataContext();
  // 칵테일의 재료를 저장할 배열
  const detailCocktailIngredients = [];
  const cocktailRecipeArray = currentDetailCocktailInfo.strInstructions.split('.');

  for (let i = 1; i <= 15; i++) {
    if (currentDetailCocktailInfo[`strIngredient${i}`] !== null) {
      detailCocktailIngredients.push(currentDetailCocktailInfo[`strIngredient${i}`]);
    }
  }
  console.log(detailCocktailIngredients);
  console.log(cocktailRecipeArray);

  return (
    <div className={styles.cocktailDetailContainer}>
      <p>{currentDetailCocktailInfo.strDrink}</p>
      <img src={currentDetailCocktailInfo.strDrinkThumb + '/preview'} alt='cocktail image' />
      <div>
        재료
        <ul>
          {detailCocktailIngredients.map((ingredientName, index) => (
            <li key={index}>{ingredientName}</li>
          ))}
        </ul>
      </div>
      <div>
        레시피
        <ul>
          {cocktailRecipeArray.map((cocktailRecipe, index) => {
            if (cocktailRecipe.length >= 3) {
              return <li key={index}>{cocktailRecipe}</li>;
            }
          })}
        </ul>
      </div>
    </div>
  );
}
