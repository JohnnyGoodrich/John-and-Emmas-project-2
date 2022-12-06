import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import Drinks from './Drinks';
import { Routes, Route } from 'react-router-dom'
import Mainpage from './components/MainPage';
import DrinkDetails from './DrinkDetails';
import Gin from './Gin';
import Whiskey from './Whiskey';

function App() {
  	

        return(
    
      <main>
        <Routes>
          <Route path="/vodka" element={ <Drinks /> } />
          <Route path="/gin" element={ <Gin /> } />
          <Route path="/whiskey" element={ <Whiskey /> } />
          <Route path="/drinks/:id" element={ <DrinkDetails /> } />
          
        </Routes>
        {/* <Mainpage/> */}
      </main>
      
      

)}


export default App;
