import { useRef, useState } from 'react';
import styled from 'styled-components';
import CocktailCard from '../CocktailCard/CocktailCard';
import { getCocktailsByName } from '../../apiFuncs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';

const StyledSearchNameContainer = styled.div`
  margin: 7vh 0;
  padding: 2vh 1vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
`;

// 최외곽 컨테이너에 바로 들어갈
const StyledSearchFormContainer = styled.form`
  width: 85%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const StyledSearchInputContainerDiv = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey5);
  padding: 0 15px;
  border-radius: 15px;
`;

const StyledSearchFormInput = styled.input`
  width: 70%;
  line-height: 40px;
  top: 10px;
  border: none;
  outline: none;
  background-color: var(--grey5);
  flex-grow: 0.8;
  font-size: 16px;

  &::placeholder {
    font-size: 16px;
  }
`;

const StyledFormRegenerateButton = styled.button`
  width: 250px;
  height: 50px;
  min-height: 50px;
  position: sticky;
  top: 0;
  background-color: #0497f3;
  color: white;
  z-index: 10;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

// 검색한 칵테일 카드들이 버튼과 겹치기에 position을 absolute로 해주고 부모인 껍데기 container를 relative로 만들어줌
const StyledSearchCocktailsUL = styled.ul`
  margin: 25px 0 0 0;
  padding: 0;
  // position: absolute;
  // top: 90px;
`;

export default function SearchName() {
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [searchCocktailsData, setSearchCocktailsData] = useState([]);
  const cocktailNameRef = useRef(null);

  function handleFormSubmit(ev) {
    ev.preventDefault();
    setIsFormSubmit(true);
    getCocktailsByName(cocktailNameRef.current.value).then((data) => setSearchCocktailsData(data.drinks));
  }

  function handleClickRegenerateFormbutton() {
    setIsFormSubmit(false);
    setSearchCocktailsData([]);
  }

  function handleClickXIcon() {
    cocktailNameRef.current.value = '';
  }

  return (
    <StyledSearchNameContainer className='scroll-box'>
      {!isFormSubmit && (
        <StyledSearchFormContainer onSubmit={handleFormSubmit}>
          <StyledSearchInputContainerDiv>
            <FontAwesomeIcon icon={faSearch} />
            <StyledSearchFormInput type='text' placeholder='Cocktail Name' ref={cocktailNameRef} />
            <FontAwesomeIcon icon={faXmark} className='hover' onClick={handleClickXIcon} />
          </StyledSearchInputContainerDiv>
        </StyledSearchFormContainer>
      )}

      {isFormSubmit && (
        <StyledFormRegenerateButton onClick={handleClickRegenerateFormbutton} className='button'>
          Click here to search cocktail again!
        </StyledFormRegenerateButton>
      )}

      {isFormSubmit && (
        <StyledSearchCocktailsUL>
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
