// 해당 파일에서 여러 상태값들을 정의해준다
import { useState, useContext, createContext } from 'react';

const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [mode, setMode] = useState('home');
  const [currentDetailCocktailInfo, setCurrentDetailCocktailInfo] = useState('');

  function handleAppMode(data) {
    setMode(data);
  }

  function handleCurrentDetailCocktailInfo(data) {
    setCurrentDetailCocktailInfo(data);
  }

  return (
    <DataContext.Provider value={{ mode, handleAppMode, currentDetailCocktailInfo, handleCurrentDetailCocktailInfo }}>
      {children}
    </DataContext.Provider>
  );
}

// 상태를 가져오는 함수를 간편하게 사용할 수 있도록
export function useDataContext() {
  return useContext(DataContext);
}
