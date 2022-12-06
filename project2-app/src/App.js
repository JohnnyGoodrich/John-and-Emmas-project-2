import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import Drinks from './VodkaDrinks';
import { Routes, Route } from 'react-router-dom'
import Mainpage from './components/MainPage';

function App() {
  	return (
  	 <div>
        <Mainpage/>
    </div>
    )
     }
console.log(Mainpage)

export default App;
