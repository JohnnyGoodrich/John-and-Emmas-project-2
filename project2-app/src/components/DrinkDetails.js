import {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import Mainpage from './MainPage';
import { Link } from "react-router-dom";


function DrinkDetails(){
    const id = useParams()
    // console.log(id)
    const url= `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id.id}`
    const [drinksD, setDrinksD]=useState(null)
    useEffect( ()=> {
        fetch(url)
            .then((response)=>response.json())
            .then((json)=> {
                setDrinksD(json)
                // console.log(url)
                // console.log(drinksD.drinks[0].strDrink)
        })
            .catch(console.error)
    }, [])
    return (
        drinksD ?
        <div className="details-container">
      
            <h2>{drinksD.drinks[0].strDrink}</h2>
            <img src={drinksD.drinks[0].strDrinkThumb}height="300"/>
            <h3 className='ingredientsHead'>Ingredients:</h3>
            <ul className='ingredients'>
                <p>{drinksD.drinks[0].strMeasure1}  {drinksD.drinks[0].strIngredient1}</p>  
                <p>{drinksD.drinks[0].strMeasure2} {drinksD.drinks[0].strIngredient2}</p>  
                <p>{drinksD.drinks[0].strMeasure3} {drinksD.drinks[0].strIngredient3}</p>  
                <p>{drinksD.drinks[0].strMeasure4} {drinksD.drinks[0].strIngredient4}</p>  
                <p>{drinksD.drinks[0].strMeasure5} {drinksD.drinks[0].strIngredient5}</p>  
                <p>{drinksD.drinks[0].strMeasure6} {drinksD.drinks[0].strIngredient6}</p>  
                <p>{drinksD.drinks[0].strMeasure7} {drinksD.drinks[0].strIngredient7}</p>  
                <p>{drinksD.drinks[0].strMeasure8} {drinksD.drinks[0].strIngredient8}</p>  
                <p>{drinksD.drinks[0].strMeasure9} {drinksD.drinks[0].strIngredient9}</p>  
                <p>{drinksD.drinks[0].strMeasure10} {drinksD.drinks[0].strIngredient10}</p>  
            </ul>
            <h3>How to make a {drinksD.drinks[0].strDrink}:</h3>
            <p className='text'>{drinksD.drinks[0].strInstructions}</p>
            <div>
                <Link to="/vodka">
                <button>Vodka</button>
                </Link>
                <Link to="/rum">
                <button id="Rum">Rum</button>
                </Link>
                <Link to="/whiskey">
                <button id="Whiskey">Whiskey</button>
                </Link>
                <Link to="/gin">
                <button id="Gin">Gin</button>
                </Link>
                <Link to="/">
                <button id="home">Home</button>
                </Link>
      </div>

           

     
          
        </div> :<p>Loading...</p>
      );
      
}
export default DrinkDetails