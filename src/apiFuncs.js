// 랜덤으로 칵테일 하나를 불러오는 함수
export async function getRandomOneCocktail() {
  try {
    const response = await fetch('https://thecocktaildb.com/api/json/v1/1/random.php');
    const { drinks } = await response.json();
    return drinks;
  } catch (error) {
    console.log(error);
  }
}

// getRandomOneCocktail().then((result) => console.log(typeof result));

// 칵테일의 이름을 통해서 데이터를 불러오는 함수, 이는 결과가 여러 개가 나올 수도 있음
// 어찌됐건 반환형은 프로미스이기 때문에 알아서 잘 처리해주어야 함
export async function getCocktailsByName(cocktailName) {
  const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;

  try {
    const response = await fetch(url);
    const datas = response.json();
    return datas;
  } catch (error) {
    console.log(error);
  }
}

getCocktailsByName('margarita').then((data) => console.log(data['drinks']));
