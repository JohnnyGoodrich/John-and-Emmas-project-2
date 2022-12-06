import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router'
import Drinks from './VodkaDrinks';
import { Routes, Route } from 'react-router-dom'

function App() {
  	
  	  const id = "b"
  	    // console.log(id)
  	  const url= "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka"
  	  const [drink, setDrink]=useState(null)
  	  useEffect( ()=> {
  	      fetch(url)
  	          .then((response)=>response.json())
  	          .then((json)=> {
  	              setDrink(json)
  	              console.log(drink.drinks)
  	      })
  	          .catch(console.error)
  
  	  }, [])
  	  if (drink === null){
  	  return ( 
  	    <h1>Loading..</h1>)
  	  }else{
  
      return(
    <div className="App">
      <h1>Drink:</h1>
      {drink.drinks.map((drinky, index)=>{
        return(
          <div key={index}>
          <h1>{drinky.strDrink}</h1>
          <img src={drinky.strDrinkThumb}height="200"/>
          </div>

        )
      })
      }
      <main>
        {/* <Routes>
          <Route path="/" element={ <Drinks /> } />
        </Routes> */}
      </main>
      

    </div>
     )}}


export default App;
