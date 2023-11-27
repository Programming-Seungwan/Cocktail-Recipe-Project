import styles from './header.module.css';
import { useDataContext } from '../../src/dataContext';

import HomeHeader from './HomeHeader';
import IngredientHeader from './IngredientHeader';
import RandomHeader from './RandomHeader';
import CategoryHeader from './CategoryHeader';
import SearchNameHeader from './SearchNameHeader';

export default function Header() {
  const { mode, handleAppMode } = useDataContext();
  return (
    <>
      {mode === 'home' && <HomeHeader />}
      {mode === 'random' && <RandomHeader />}
      {mode === 'ingredient' && <IngredientHeader />}
      {mode === 'category' && <CategoryHeader />}
      {mode === 'searchName' && <SearchNameHeader />}
    </>
  );
}
