// 기본적인 라우팅의 기능을 구현해주는 indicator 폴더에 해당한다
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataContextProvider from './dataContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Random from './components/Random/Random';
import SearchName from './components/SearchName/SearchName';
import Ingredient from './components/Ingredient/Ingredient';
import Category from './components/Category/Category';
import CocktailDetail from './components/CocktailDetail/CocktailDetail';
import DeveloperDetail from './components/DeveloperDetail/DeveloperDetail';

export default function App() {
  return (
    <>
      <DataContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/*' element={<Home />}></Route>
            <Route path='/random' element={<Random />}></Route>
            <Route path='/search-name' element={<SearchName />}></Route>
            <Route path='/ingredient' element={<Ingredient />}></Route>
            <Route path='/category' element={<Category />}></Route>
            <Route path='/cocktail-detail' element={<CocktailDetail />}></Route>
            <Route path='/developer-detail' element={<DeveloperDetail />}></Route>
          </Routes>
          <Footer />
        </Router>
      </DataContextProvider>
    </>
  );
}
