import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import Drinks from './components/Vodka';
import { Routes, Route } from 'react-router-dom'
import Mainpage from './components/MainPage';
import DrinkDetails from './components/DrinkDetails';
import Gin from './components/Gin';
import Whiskey from './components/Whiskey';
import Rum from './components/Rum';

function App() {
  	

        return(
    
      <main>
        <Routes>
          <Route path="/" element={ <Mainpage /> } />
          <Route path="/test" element={ <Mainpage /> } />
          <Route path="/vodka" element={ <Drinks /> } />
          <Route path="/gin" element={ <Gin /> } />
          <Route path="/whiskey" element={ <Whiskey /> } />
          <Route path="/rum" element={ <Rum /> } />
          <Route path="/drinks/:id" element={ <DrinkDetails /> } />
        </Routes>
      </main>
      
      
)}


export default App;
