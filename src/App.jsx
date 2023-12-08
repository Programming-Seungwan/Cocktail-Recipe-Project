// 기본적인 라우팅의 기능을 구현해주는 indicator 폴더에 해당한다
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataContextProvider from './dataContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

export default function App() {
  return (
    <>
      <DataContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/*' element={<Home />}></Route>
          </Routes>
          <Footer />
        </Router>
      </DataContextProvider>
    </>
  );
}
