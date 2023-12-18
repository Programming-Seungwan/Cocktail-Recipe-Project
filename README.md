# 칵테일 레시피 추천 웹 애플리케이션

## 생각할 포인트

1. cocktailDetail에 대한 정보를 contextAPI를 통해 공유하고 관련 페이지로 넘기는 것 vs 특정 cocktailCard를 클릭했을 떄 id만을 url path에 넘겨서 새로 api 요청을 날리는 것
2. api 호출을 할지 아니면 그냥 데이터를 크롤링 해놓고 json 파일을 일종의 미니 데이터베이스로 활용할지? => 파일 시스템 접근이 아무래도 매번 api 호출을 일일히 해주는 것보다는 더 안전하고 빠름

> 해당 칵테일 프로젝트는 칵테일의 가짓수가 해봐야 1000개를 넘기 힘들기 떄문에 매번 네트워크 통신을 하는 데이터베이스, api를 활용하는 것보다는 파일 시스템을 이용하는 것이 더 안전하다.
> But 칵테일 id를 모두 일일히 알 수가 없기 때문에 그냥 정도껏 크롤릴 해주는것이 중요

3. random 탭에 들어갔을 때 10개가 fetching 되면서 딜레이가 발생함

4. 각 리스트 아이템들의 key 값을 그냥 일단 index로 만들어준 것에 대한 해결책이 필요함

5. random.jsx 컴포넌트의 45번쨰 줄에서 randomCocktailArray의 길이 조건부 렌더링의 기준치가 개발 환경에서는 strict mode로 인해 10이되는데, 프로덕션 환경에서는 그냥 5이므로 이를 해결해줘야 함

6. category로 켁테일 api를 호출하는 것은 이름, 이미지, idDrink에 대한 정보만 주어짐. 일단 칵테일 카드 형식으로 이걸 보여주고 클릭했을 시에 contextAPI에 해당하는 cocktailDetail에 대한 정보를 보여줄 필요가 있음

7. 여러 컴포넌트들에서 정의하고 사용하는 함수들을 useCallback() 훅을 통해서 기록하여 메모리적 효율을 높이거나, 아니면 그냥 apiFunc.js 파일에서 만들어준 함수를 import해 사용하는 방법 중 하나를 골라야 함

8. apiFunc.js 파일에 여러 api 함수들을 정의하고 이를 끌어쓰는 코드 리팩터링이 필요함

## 전체 웹 앱 레이아웃 구조

1.
