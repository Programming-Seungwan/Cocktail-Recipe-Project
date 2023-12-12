// 재료를 알파벳에 따라서 버튼으로 나누고, 해당 버튼을 누르면 그 다음 목록으로 보여주는 방식을 택할 것이다
// 하드 코딩 방식으로 useEffect에서 상태로 조지는 것보다 어떻게 하면 깔끔하고 유지 보수가 쉬운 코드를 짤 수 있을까?
// 먼저 사용자가 초성을 고르고, 그 다음에 그에 해당하는 버튼들이 나타나면 이걸 누르면 관련된 카드가 나타나는 방식

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ingredientData from '../../ingredients.json';
import { getCocktailByIngredientName } from '../../apiFuncs';
import IngredientCocktailCard from './IngredientCocktailCard/IngredientCocktailCard';

const StyledIngredientContainer = styled.div`
  margin: 7vh 0;
  padding: 0 1vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
`;

const StyledAlphabetButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledAlphabetButton = styled.button`
  background-color = var(--grey2);
`;

const StyledIngredientButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledIngredientButton = styled.button`
  background-color: var(--grey2);
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

  async function handleClickIngredientButton(ev) {
    const buttonIngredientName = ev.target.innerText;
    // console.log(buttonIngredientName);
    try {
      const response = await getCocktailByIngredientName(buttonIngredientName);

      setSelectedIngredientCocktailCardInfoArray(response['drinks']);
    } catch (error) {
      setSelectedIngredientCocktailCardInfoArray([]);
    }
  }
  // setSelectedIngredientCocktailCardInfoArray(data['drinks']);
  // 처음 컴포넌트가 렌더링될 때, 재료들을 ingredientArray 상태에 넣어줌
  useEffect(() => {
    const tmpIngredientArray = [];
    for (let i = 0; i < 26; i++) tmpIngredientArray.push([]);

    for (let i = 0; i < ingredientData.length; i++) {
      const firstLetter = ingredientData[i]['strIngredient'][0];
      // console.log(firstLetter);
      const firstLetterAlphabetIndex = alphabet.indexOf(firstLetter.toLowerCase());
      if (firstLetterAlphabetIndex >= 0 && firstLetterAlphabetIndex <= 25) {
        tmpIngredientArray[firstLetterAlphabetIndex].push(ingredientData[i]['strIngredient']);
      }
    }

    setIngredientArray(tmpIngredientArray);
  }, []);

  // 아래 useEffect 훅의 효과를 그냥 버튼의 onClick 속성에서 진행할 수도 있을까?
  useEffect(() => {
    if (selectedAlphabetButtonIndex === null) return;

    setShowingIngredients(ingredientArray[selectedAlphabetButtonIndex]);
    setSelectedIngredientCocktailCardInfoArray([]);
  }, [selectedAlphabetButtonIndex]);

  return (
    <StyledIngredientContainer>
      <StyledAlphabetButtonContainer>
        <ul>
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
        </ul>
      </StyledAlphabetButtonContainer>

      {showingIngredients !== null && (
        <StyledIngredientButtonContainer>
          {showingIngredients.length > 0 ? (
            <ul>
              {showingIngredients.map((ingredient, index) => (
                <StyledIngredientButton key={index} onClick={handleClickIngredientButton}>
                  {ingredient}
                </StyledIngredientButton>
              ))}
            </ul>
          ) : (
            <div>No ingredient!</div>
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
