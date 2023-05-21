import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"
import { useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import Favorites from './components/Favorites';


export const AppContext = React.createContext({})

function App() {
const [tyrs, setTyrs] = useState([])
const [favorites, setFavorites] = useState([])
const [cartItems, setCartItems] = useState([])

useEffect (()=>{
  async function axiosData(){
    const tyrsData = await axios.get('https://6469ccf403bb12ac2092dd73.mockapi.io/items')
   
    setTyrs(tyrsData.data)
   
  }
  axiosData();
},[])


  return (
    <div>
      <Router>
        <Header/>
          <Routes>
            <Route path='/favorites'
              element={
                <Favorites
                favorites = {favorites}
                setFavorites={setFavorites}
                cartItems={cartItems}
                />
              }
            />
            <Route path='/'
              element={
                <Home
                  item={tyrs}
                />
              }
            />
          </Routes>
      </Router> 
      <Footer/>
    </div>
  );
}

export default App;