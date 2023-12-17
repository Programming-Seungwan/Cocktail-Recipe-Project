import styled from 'styled-components';
import { getRandomOneCocktail } from '../../apiFuncs';
import { useEffect, useState } from 'react';
import CocktailCard from '../CocktailCard/CocktailCard';
import IsLoading from '../IsLoading/IsLoading';

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

  useEffect(() => {
    getRandomOneCocktail().then((data) => setCocktailInfo(data[0]));
  }, []);

  return (
    <StyledHomeContainer>
      {!cocktailInfo ? <IsLoading /> : <CocktailCard cocktailInfo={cocktailInfo} />}
    </StyledHomeContainer>
  );
}
