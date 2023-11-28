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
    const datas = await response.json();
    return datas;
  } catch (error) {
    console.log(error);
  }
}

// getCocktailsByName('margarita').then((data) => console.log(data['drinks']));

// 재료 id를 이용해서 재료명과 설명, 알콜여부, 도수를 데이터로 반환하는 함수
export async function getIngredientNameById(ingredientId) {
  const url = `https://thecocktaildb.com/api/json/v1/1/lookup.php?iid=${ingredientId}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// category에 맞는 칵테일 정보를 호출하는 함수
// 해당 함수는 카테고리에 맞는 칵테일의 세부 정보를 모두 반환하지 않고 이름과 id만을 반환하므로 다시 요청을 날려서 데이터를 정확히 얻어내야함

export async function getCocktailsByCategoryName(categoryName) {
  const url = `https://thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

// getCocktailsByCategoryName('Cocktail').then((data) => console.log(data['drinks'].length));

export async function getCocktailByCocktailId(cocktailId) {
  const url = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

// getCocktailByCocktailId(11007).then((data) => console.log(data));
