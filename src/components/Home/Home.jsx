import styled from 'styled-components';

import { useEffect, useState } from 'react';
import CocktailCard from '../CocktailCard/CocktailCard';
import IsLoading from '../isLoading/IsLoading';

const StyledHomeContainer = styled.div`
  margin: 7vh 0;
  padding: 0 1vh;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

export default function Home() {
  // api 호출을 통해서 랜덤 칵테일 정보를 가져오고 이를 CocktailCard 컴포넌트에 전달해준다
  const [cocktailInfo, setCocktailInfo] = useState(null);

  async function getOneCocktailInfo() {
    try {
      const response = await fetch('https://thecocktaildb.com/api/json/v1/1/random.php');
      const result = await response.json();
      setCocktailInfo(result.drinks[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOneCocktailInfo();
  }, []);

  return (
    <StyledHomeContainer>
      {!cocktailInfo ? <IsLoading /> : <CocktailCard cocktailInfo={cocktailInfo} />}
    </StyledHomeContainer>
  );
}
