// 재료를 알파벳에 따라서 버튼으로 나누고, 해당 버튼을 누르면 그 다음 목록으로 보여주는 방식을 택할 것이다
// 하드 코딩 방식으로 useEffect에서 상태로 조지는 것보다 어떻게 하면 깔끔하고 유지 보수가 쉬운 코드를 짤 수 있을까?
// 먼저 사용자가 초성을 고르고, 그 다음에 그에 해당하는 버튼들이 나타나면 이걸 누르면 관련된 카드가 나타나는 방식

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ingredientData from '../../ingredients.json';
import { getCocktailByIngredientName } from '../../apiFuncs';
import IngredientCocktailCard from './IngredientCocktailCard/IngredientCocktailCard';
import NoIngredientUI from './NoIngredientUI';

const StyledIngredientContainer = styled.div`
  margin: 7vh 0;
  padding: 2vh 1vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
`;

const StyledButtonUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const StyledAlphabetButton = styled.button`
  background-color = var(--grey4);
  width: calc(33% - 15px);
  height: 55px;
  margin: 5px;
  border-radius: 10px;
  padding: 0;
  border: 1px;
  font-family: GmarketSansMedium;

  &: hover {
    cursor: pointer;
  }
`;

const StyledIngredientButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const StyledIngredientButton = styled.button`
  width: calc(33% - 15px);
  height: 55px;
  margin: 5px;
  border-radius: 10px;
  padding: 0 15px;
  border: 1px;
  font-family: GmarketSansMedium;
  font-size: 11px;
  word-wrap: break-word;

  &: hover {
    cursor: pointer;
  }
`;

const StyledIngredientCocktaiCardUL = styled.ul`
  margin: 0;
  padding: 0;
`;

export default function Ingredient() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const [ingredientArray, setIngredientArray] = useState([]);
  // 알파벳 버튼이 클릭되면 선택된 알파벳 버튼의 인덱스가 바뀌어야함 : 각각의 알파벳 버튼은 내부 속성으로 인덱스를 품고 있어 클릭되면 또 뭔가 속성이 바뀜
  // selectedAlphabetButtonIndex가 null이면 ingredient button은 나타나지 않는다
  const [selectedAlphabetButtonIndex, setSelectedAlphabetButtonIndex] = useState(null);
  const [showingIngredients, setShowingIngredients] = useState(null);
  const [selectedIngredientCocktailCardInfoArray, setSelectedIngredientCocktailCardInfoArray] = useState([]);

  // 선택된 재료로 만든 칵테일 배열을 채우는 함수이다.
  async function handleClickIngredientButton(ev) {
    const buttonIngredientName = ev.target.innerText;
    try {
      const response = await getCocktailByIngredientName(buttonIngredientName);

      setSelectedIngredientCocktailCardInfoArray(response['drinks']);
    } catch (error) {
      setSelectedIngredientCocktailCardInfoArray([]);
    }
  }

  // 처음 컴포넌트가 렌더링될 때, 재료명을 ingredientArray 상태에 넣어줌
  useEffect(() => {
    const tmpIngredientArray = [];
    for (let i = 0; i < 26; i++) tmpIngredientArray.push([]);

    for (let i = 0; i < ingredientData.length; i++) {
      const firstLetter = ingredientData[i]['strIngredient'][0];
      const firstLetterAlphabetIndex = alphabet.indexOf(firstLetter.toLowerCase());

      if (firstLetterAlphabetIndex >= 0 && firstLetterAlphabetIndex <= 25) {
        tmpIngredientArray[firstLetterAlphabetIndex].push(ingredientData[i]['strIngredient']);
      }
    }

    setIngredientArray(tmpIngredientArray);
  }, []);

  // 아래 useEffect 훅의 효과를 그냥 버튼의 onClick 속성에서 진행할 수도 있을까?
  useEffect(() => {
    // 첫 렌더링 시 마운트 될 때에는 재료를 보여주지 않고 pass
    if (selectedAlphabetButtonIndex === null) return;

    setShowingIngredients(ingredientArray[selectedAlphabetButtonIndex]);
    // 여러 칵테일을 보는 와중에도 다시 알파벳을 눌렀다면 보여지는 칵테일들을 사라지게 만들고 재료만 보이게 해줌
    setSelectedIngredientCocktailCardInfoArray([]);
  }, [selectedAlphabetButtonIndex]);

  return (
    <StyledIngredientContainer className='scroll-box'>
      <StyledButtonUl>
        {alphabet.split('').map((character, index) => (
          <StyledAlphabetButton
            key={character}
            onClick={() => {
              setSelectedAlphabetButtonIndex(index);
            }}
          >
            {character}
          </StyledAlphabetButton>
        ))}
      </StyledButtonUl>

      {showingIngredients !== null && (
        <StyledIngredientButtonContainer>
          {showingIngredients.length > 0 ? (
            <StyledButtonUl>
              {showingIngredients.map((ingredient, index) => (
                <StyledIngredientButton key={index} onClick={handleClickIngredientButton}>
                  {ingredient}
                </StyledIngredientButton>
              ))}
            </StyledButtonUl>
          ) : (
            <NoIngredientUI>No ingredient!</NoIngredientUI>
          )}
        </StyledIngredientButtonContainer>
      )}

      {selectedIngredientCocktailCardInfoArray.length > 0 && (
        <StyledIngredientCocktaiCardUL>
          {selectedIngredientCocktailCardInfoArray.map((cocktailCardInfo, index) => (
            <IngredientCocktailCard key={index} ingredientCardInfo={cocktailCardInfo} />
          ))}
        </StyledIngredientCocktaiCardUL>
      )}
    </StyledIngredientContainer>
  );
}
