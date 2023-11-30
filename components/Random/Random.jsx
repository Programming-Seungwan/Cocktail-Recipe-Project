import styles from './random.module.css';
import CocktailCard from '../CocktailCard/CocktailCard';
import { useState, useEffect } from 'react';
import { getRandomOneCocktail } from '../../src/apiFuncs';

export default function Random() {
  const [randomTenCocktail, setRandomTenCocktail] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      getRandomOneCocktail()
        .then((data) => {
          setRandomTenCocktail((prevCocktailsArray) => [...prevCocktailsArray, data]);
        })
        .catch((err) => console.log(err))
        .finally();
    }
  }, []);
  console.log(randomTenCocktail);
  return (
    <div className={styles.randomComponentContainer}>
      <div className={styles.randomComponentContent}>
        <ul>
          {randomTenCocktail.map((cocktail) => (
            <CocktailCard cocktailInfo={cocktail[0]} />
          ))}
        </ul>
      </div>
    </div>
  );
}
