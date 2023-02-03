import {  Container } from '@mui/material';
import './App.css';
import Bar from './components/Bar';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Trending from './pages/Trending';
import Movies from './pages/Movies';
//import Favorite from './pages/Favorite';
import Searchs from './pages/Searchs';
import Favorite from './pages/Favorite';
import { createContext, useContext, useState } from 'react';

export const favoriteContext= createContext()

function App() {
  const [favourites, setFavourites] = useState([]);
  return (
    <favoriteContext.Provider value={{favourites ,setFavourites}}>
    <BrowserRouter>
      <Bar/>
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Movies/>} />
            <Route path="/trending" element={<Trending/>} />
            <Route path="/search" element={<Searchs/>} />
            <Route path="/favorite" element={<Favorite/>} />
          </Routes>
        </Container>
      </div>
      <NavigationBar />
    </BrowserRouter>
    </favoriteContext.Provider>
  );
}

export default App;
//  <Route path="/favorite" element={<Favorite/>} />