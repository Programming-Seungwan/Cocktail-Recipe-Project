import styles from './searchName.module.css';
import { useState } from 'react';
import SearchNameForm from './SearchNameForm/SearchNameForm';
import SearchNameData from './SearchNameForm/SearchNameDatas';
import { getCocktailsByName } from '../../src/apiFuncs';

export default function SearchName() {
  const [isSearchingNow, setIsSearchingNow] = useState(true);
  const [searchCocktails, setSearchCocktails] = useState([]);

  function getCocktailsBySearchName(ev) {
    ev.preventDefault();
    const cocktailSearchName = ev.target.cocktailName.value;
    getCocktailsByName(cocktailSearchName).then((data) => setSearchCocktails(data['drinks']));
    setIsSearchingNow(false);
  }

  // html 폼이 제출되어서 받아온 데이터가 없다면 그냥 null 값일 수도 있다
  console.log(searchCocktails);

  return (
    <div className={styles.searchNameComponentContainer}>
      {isSearchingNow ? (
        <SearchNameForm onSubmitFunc={getCocktailsBySearchName} />
      ) : (
        <SearchNameData cocktailData={searchCocktails} />
      )}
    </div>
  );
}
