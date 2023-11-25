// 해당 파일에서 여러 상태값들을 정의해준다
import { useState, useContext, createContext } from 'react';

const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [mode, setMode] = useState('home');

  function handleAppMode(data) {
    setMode(data);
  }

  return <DataContext.Provider value={{ mode, handleAppMode }}>{children}</DataContext.Provider>;
}

// 상태를 가져오는 함수를 간편하게 사용할 수 있도록
export function useDataContext() {
  return useContext(DataContext);
}
