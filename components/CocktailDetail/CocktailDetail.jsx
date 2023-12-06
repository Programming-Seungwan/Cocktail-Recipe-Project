import styles from './cocktailDetail.module.css';
import { useDataContext } from '../../src/dataContext';
import { useEffect, useState } from 'react';

export default function CocktailDetail() {
  const [cocktailRecipeArray, setCocktailRecipeArray] = useState([]);
  const [cocktailIngredientsArray, setCocktailIngredientArray] = useState([]);

  const { currentDetailCocktailInfo, handleCurrentDetailCocktailInfo } = useDataContext();
  // 칵테일의 재료를 저장할 배열

  console.log(currentDetailCocktailInfo);
  useEffect(() => {
    if (currentDetailCocktailInfo.strInstructions !== null) {
      setCocktailRecipeArray(currentDetailCocktailInfo.strInstructions.split('.'));
    }

    const tmpArray = [];

    for (let i = 1; i <= 15; i++) {
      if (currentDetailCocktailInfo[`strIngredient${i}`] !== null) {
        tmpArray.push(currentDetailCocktailInfo[`strIngredient${i}`]);
      }
    }

    setCocktailIngredientArray(tmpArray);
  }, []);

  return (
    <div className={styles.cocktailDetailContainer}>
      <p>{currentDetailCocktailInfo.strDrink}</p>
      <img src={currentDetailCocktailInfo.strDrinkThumb + '/preview'} alt='cocktail image' />
      <div className={styles.ingredientsDescription}>
        <p>Ingredients</p>
        <ul>
          {cocktailIngredientsArray.map((ingredientName, index) => (
            <li key={index}>{ingredientName}</li>
          ))}
        </ul>
      </div>
      <div className={styles.recipeDescription}>
        <p>How to make it?</p>
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
