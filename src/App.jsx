// 기본적인 라우팅의 기능을 구현해주는 indicator 폴더에 해당한다
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Random from '../components/Random/Random';
import Ingredient from '../components/Ingredient/Ingredient';
import Category from '../components/Category/Category';
import DataContextProvider from './dataContext.jsx';
import SearchName from '../components/SearchName/SearchName.jsx';

export default function App() {
  return (
    <>
      <DataContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/*' element={<Home />}></Route>
            <Route path='/searchName' element={<SearchName />}></Route>
            <Route path='/random' element={<Random />}></Route>
            <Route path='/ingredient' element={<Ingredient />}></Route>
            <Route path='/category' element={<Category />}></Route>
          </Routes>
          <Footer />
        </Router>
      </DataContextProvider>
    </>
  );
}
