// 이 파일에서는 칵테일의 이름을 통한 검색을 하고, 검색한 내용을 칵테일 카드로 보여준다
// 처음에는 입력 form 만을 보여주고, 사용자가 검색을 하면 그때 관련된 정보들을 나타내주기
// 이는 상태를 이용한다. 상태가 없어지면 그때에는 다시 Form만 보이게 만들어주기
// form 과 cocktail Card가 왔다갔다 하는 방식
// 다시 검색하기 버튼을 누르면 기존의 카드 사라지고, form이 나타나고
// 이게 아니면 그냥 form만 존재하는 경우
// 검색을 했는데 없다면 그냥 검색 결과가 존재하지 않음을 알려주어야 한다
import { useRef, useState } from 'react';
import styled from 'styled-components';
import CocktailCard from '../CocktailCard/CocktailCard';
import { getCocktailsByName } from '../../apiFuncs';

const StyledSearchNameContainer = styled.div`
  margin: 7vh 0 10vh 0;
  padding: 0 1vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
  position: relative;
`;

// 최외곽 컨테이너에 바로 들어갈
const StyledSearchFormContainer = styled.form`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledFormRegenerateButton = styled.button`
  width: 30%;
  height: 40px;
  margin: 20px;
  background-color: green;
`;

// 검색한 칵테일 카드들이 버튼과 겹치기에 position을 absolute로 해주고 부모인 껍데기 container를 relative로 만들어줌
const StyledSearchCocktailsUL = styled.ul`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 90px;
`;

export default function SearchName() {
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [searchCocktailsData, setSearchCocktailsData] = useState([]);
  const cocktailNameRef = useRef(null);

  function handleFormSubmit(ev) {
    ev.preventDefault();
    console.log(cocktailNameRef.current.value);
    // 입력 폼은 제출되었고 이제 폼은 사라지고 데이터 칵테일카드가 보여지거나 데이터가 없으면 존재하지 않는다는 문구 표시
    setIsFormSubmit(true);

    getCocktailsByName(cocktailNameRef.current.value).then((data) => setSearchCocktailsData(data.drinks));
  }

  function handleClickRegenerateFormbutton() {
    setIsFormSubmit(false);
    setSearchCocktailsData([]);
  }

  return (
    <StyledSearchNameContainer className='scroll-box'>
      {/* 아직 제출 안됐을 때에는 form이 보이게 되고, 제출되면 실패 ui 카드나 칵테일 정보 카드가 위치 */}
      {isFormSubmit && (
        <StyledFormRegenerateButton onClick={handleClickRegenerateFormbutton}>
          Search Cocktail by name again!
        </StyledFormRegenerateButton>
      )}
      {!isFormSubmit && (
        <StyledSearchFormContainer onSubmit={handleFormSubmit}>
          <p>Search by Cocktail name</p>
          <input type='text' placeholder='Cocktail Name' ref={cocktailNameRef} />
          <button type='submit'>Search</button>
        </StyledSearchFormContainer>
      )}

      {isFormSubmit && (
        <StyledSearchCocktailsUL style={{ margin: '0', padding: '0' }}>
          {searchCocktailsData === null ? (
            <div>There is no search cocktail data!</div>
          ) : (
            searchCocktailsData.map((cocktailInfo, index) => <CocktailCard key={index} cocktailInfo={cocktailInfo} />)
          )}
        </StyledSearchCocktailsUL>
      )}
    </StyledSearchNameContainer>
  );
}
