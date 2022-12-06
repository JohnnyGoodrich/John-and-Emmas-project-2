import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import Drinks from './Drinks';
import { Routes, Route } from 'react-router-dom'

function App() {
  	

        return(
    
      <main>
        <Routes>
          <Route path="/drinks" element={ <Drinks /> } />
          
        </Routes>
      </main>
      
      

)}


export default App;
