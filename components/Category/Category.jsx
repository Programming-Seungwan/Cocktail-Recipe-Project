import styles from './category.module.css';
import { useState, useEffect } from 'react';
import { getCocktailsByCategoryName, getCocktailByCocktailId } from '../../src/apiFuncs';
// CocktailCard로 넘기면 안됨 => 세부 정보들이 비어 있어서 제대로 렌더링을 해줄 수가 없음
import CategoryCocktailCard from './CategoryCocktailCard';
import CocktailCard from '../CocktailCard/CocktailCard';

export default function Category() {
  const [cocktailsGetByCategoryName, setCocktailsGetByCategoryName] = useState(null);

  const categoryArray = [
    'Ordinary_drink',
    'Cocktail',
    'Other / Unknown',
    'Shot',
    'Soft Drink',
    'Punch / Party Drink',
    'Shake',
    'Coffee / Tea',
  ];

  async function handleButtonClick(a) {
    const data = await getCocktailsByCategoryName(a);
    const incompleteCocktailArray = data.drinks;
    console.log(incompleteCocktailArray);
    // 여기에서 id를 이용해 다시 요청을 보내는 것은 요청을 받아서 다시 보내는 것에 해당함
    setCocktailsGetByCategoryName(incompleteCocktailArray);
  }

  return (
    <div className={styles.categoryComponentContainer}>
      <ul>
        {categoryArray.map((category) => (
          <li key={category}>
            <button onClick={() => handleButtonClick(category)}>{category}</button>
          </li>
        ))}
      </ul>
      {cocktailsGetByCategoryName && (
        <ul>
          {cocktailsGetByCategoryName.map((cocktailInfo) => (
            <CategoryCocktailCard cocktailInfo={cocktailInfo} />
          ))}
        </ul>
      )}
    </div>
  );
}
