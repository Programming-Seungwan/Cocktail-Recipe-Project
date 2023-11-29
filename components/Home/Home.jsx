import { useDataContext } from '../../src/dataContext';
import { getRandomOneCocktail } from '../../src/apiFuncs';
import styles from './home.module.css';
import { useEffect, useState } from 'react';
import LoadingUI from '../LoadingUI/LoadingUI';
import CocktailCard from '../CocktailCard/CocktailCard';

export default function Home() {
  const [todayCocktail, setTodayCocktail] = useState('');
  const { mode, handleAppMode } = useDataContext();

  useEffect(() => {
    async function getTodayRandomCocktail() {
      try {
        const todayRandomCocktailData = await getRandomOneCocktail();
        return todayRandomCocktailData;
      } catch (error) {
        console.log(error);
      }
    }

    getTodayRandomCocktail().then((data) => setTodayCocktail(data[0]));
  }, []);

  return (
    <div className={styles.homeComponentContainer}>
      <div className={styles.homeComponentContent}>
        {!todayCocktail ? (
          <LoadingUI />
        ) : (
          <div className={styles.homeComponentCocktailCard}>
            <CocktailCard cocktailInfo={todayCocktail} />
          </div>
        )}
      </div>
    </div>
  );
}
