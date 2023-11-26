import styles from './homeHeader.module.css';

export default function HomeHeader() {
  return (
    <div className={styles.homeHeaderContainer}>
      <div className={styles.wanCocktail}>Wan Cocktail</div>
      <img className={styles.cocktailImage} src='/assets/header/cocktail.png' alt='Cocktail image' />
    </div>
  );
}
