// 해당 파일에서는 그냥 임의의 10개 cocktail Card를 제시해줄 수 있어야 한다.
// 한번 처리되면 렌더링이 그에 맞춰서 진행되는 문제가 발생한다. 그냥 받아오는 것을 매번 반복하고 한번에 때려박을 필요가 있다.
// 즉, 이는 fetching 작업에 빡 집중하고 그 다음에야 렌더링을 해주는 것이 더 낫다는 말이다
// 처음에 들어왔을 때, 하나씩 결과를 가져올 때마다 렌더링이 되는 비효율이 발생한다. 이를 어떻게 해결할 수 있나?
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import CocktailCard from '../CocktailCard/CocktailCard';
import IsLoading from '../IsLoading/IsLoading';
import { getRandomOneCocktail } from '../../apiFuncs';

const StyledRandomContainer = styled.div`
  margin: 7vh 0;
  padding: 0 1vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
`;

export default function Random() {
  const [randomFiveCocktailInfoArray, setRandomFiveCocktailInfoArray] = useState([]);

  useEffect(() => {
    getRandomOneCocktail().then((mydata) => console.log(mydata));
    for (let i = 0; i < 5; i++) {
      getRandomOneCocktail().then((data) => setRandomFiveCocktailInfoArray((prev) => [...prev, data[0]]));
    }

    return () => setRandomFiveCocktailInfoArray([]);
  }, []);

  return (
    <StyledRandomContainer className='scroll-box'>
      <div>This is random!</div>
      {randomFiveCocktailInfoArray.length < 5 ? (
        <IsLoading />
      ) : (
        <ul style={{ margin: '0', padding: '0' }}>
          {randomFiveCocktailInfoArray.map((cocktailInfo, index) => (
            <CocktailCard key={index} cocktailInfo={cocktailInfo} />
          ))}
        </ul>
      )}
    </StyledRandomContainer>
  );
}
