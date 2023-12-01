import CocktailCard from '../../CocktailCard/CocktailCard.jsx';

export default function SearchNameData({ cocktailData }) {
  console.log(cocktailData);
  return (
    <>
      <ul>
        {cocktailData.map((cocktail) => (
          <CocktailCard cocktailInfo={cocktail} />
        ))}
      </ul>
    </>
  );
}
