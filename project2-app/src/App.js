import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import Drinks from './Drinks';
import { Routes, Route } from 'react-router-dom'
import Mainpage from './components/MainPage';
import DrinkDetails from './DrinkDetails';

function App() {
  	

        return(
    
      <main>
        <Routes>
          <Route path="/drinks" element={ <Drinks /> } />
          <Route path="/drinks/:url" element={ <DrinkDetails /> } />
          
        </Routes>
        <Mainpage/>
      </main>
      
      

)}


export default App;
