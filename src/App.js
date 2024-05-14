import './App.scss'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Tvshows from './Components/Tvshows/Tvshows';
import Movies from './Components/Movies/Movies';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>  
    <Home/>   
    <Routes>
      {/* <Route path='/home' element={<Home/>} ></Route> */}
      <Route path='/tvshows' element={<Tvshows/>}></Route>
      <Route path='/movies' element={<Movies/>}></Route>
    </Routes>
   
    </BrowserRouter>
    </>
  );
}

export default App;
