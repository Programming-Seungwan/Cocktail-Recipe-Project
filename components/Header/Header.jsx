import { useDataContext } from '../../src/dataContext';

import HomeHeader from './HomeHeader/HomeHeader';
import IngredientHeader from './IngredientHeader/IngredientHeader';
import RandomHeader from './RandomHeader/RandomHeader';
import CategoryHeader from './CategoryHeader/CategoryHeader';
import SearchNameHeader from './SearchNameHeader/SearchNameHeader';
import CocktailDetailHeader from './CocktailDetailHeader/CocktailDetailHeader';

export default function Header() {
  const { mode, handleAppMode } = useDataContext();
  return (
    <>
      {mode === 'home' && <HomeHeader />}
      {mode === 'random' && <RandomHeader />}
      {mode === 'ingredient' && <IngredientHeader />}
      {mode === 'category' && <CategoryHeader />}
      {mode === 'searchName' && <SearchNameHeader />}
      {mode === 'cocktailDetail' && <CocktailDetailHeader />}
    </>
  );
}
