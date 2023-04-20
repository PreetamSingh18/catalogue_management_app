import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from "./store/store"
import HomePage from './Pages/HomePage';
import SingleProduct from './Pages/SingleProduct';
import CategoryProduct from './Pages/CategoryProduct';
import HeroPage from './Pages/HeroPage';



function App() {
  return (
<div>
<Provider store={store}>
  <BrowserRouter>
  <Routes>
        <Route path="/" element={<HeroPage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/product/:id' element={<SingleProduct/>}></Route>
        <Route path="home/category/:category" element={<CategoryProduct/>}></Route>
  </Routes>
  </BrowserRouter>
</Provider>
</div>
  );
}

export default App;
