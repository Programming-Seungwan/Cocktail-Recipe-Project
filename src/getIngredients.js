// 해당 파일은 json 파일에 ingredient를 기록하기 위한 것에 해당(crawling)
import { getIngredientNameById } from './apiFuncs.js';
import { readFileSync, writeFileSync } from 'fs';

let i = 1;
const jsonFilePath = './ingredients.json';

while (i < 616) {
  const data = await getIngredientNameById(i);
  const memoData = data['ingredients'];
  if (memoData === null) {
    i++;
    continue;
  } else {
    const existingData = JSON.parse(readFileSync(jsonFilePath, 'utf8'));
    existingData.push(memoData[0]);
    writeFileSync(jsonFilePath, JSON.stringify(existingData, null, 2), 'utf8');
    i++;
  }
}
