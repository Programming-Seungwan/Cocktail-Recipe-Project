import { useDataContext } from '../../src/dataContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CategoryCocktailCard({ cocktailInfo }) {
  const [categoryCocktailInfo, setCategoryCocktailInfo] = useState(null);
  const { currentDetailCocktailInfo, handleCurrentDetailCocktailInfo } = useDataContext();
  const navigate = useNavigate();

  function handleClickCocktailCard(data) {
    handleCurrentDetailCocktailInfo(data);
    console.log(currentDetailCocktailInfo);
    navigate('/cocktail-detail');
  }
  console.log(cocktailInfo);
  return (
    <div>
      <img src={cocktailInfo.strDrinkThumb} alt='cocktail image' />
      <p>{cocktailInfo.strDrink}</p>
    </div>
  );
}
