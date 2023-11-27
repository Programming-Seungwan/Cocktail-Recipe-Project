import { useDataContext } from '../../src/dataContext';
import styles from './home.module.css';
import { useEffect, useState } from 'react';
import LoadingUI from '../LoadingUI/LoadingUI';

export default function Home() {
  const [todayCocktail, setTodayCocktail] = useState('');
  const { mode, handleAppMode } = useDataContext();

  useEffect(() => {}, []);

  return (
    <div className={styles.homeComponentContainer}>
      {!todayCocktail ? <LoadingUI /> : <div>This is home component!</div>}
    </div>
  );
}
