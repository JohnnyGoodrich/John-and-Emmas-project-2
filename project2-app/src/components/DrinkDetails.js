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
               <h1 className='header'>
        <div className='header-content'>
          <a className='clink' href="/">Clink! &#127864;</a>
          {/* <img className='header-image' src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F421571%2Fscreenshots%2F10888517%2Fglasses_4x.jpg'height="80"></img> */}
          <div className='drink-head'>
          <Link to="/vodka" className='drink-link-head'>Vodka | </Link>
          <Link to="/rum" className='drink-link-head'>Rum | </Link>
          <Link to="/whiskey" className='drink-link-head'>Whiskey | </Link>
          <Link to="/gin" className='drink-link-head'>Gin | </Link>
          <Link to="/tequila" className='drink-link-head'>Tequila </Link>
          </div>
        </div>
        </h1>
        <div className='above-all'>
            <div className='all'>
            <section className='drink-ing'>
                <div className='drink-title-pic'>
                    <h2>{drinksD.drinks[0].strDrink}</h2>
                    <img className='details-image' src={drinksD.drinks[0].strDrinkThumb}height="270"/>
                </div>
                <div className='ingredgients-body'>
                    <ul className='ingredients'>
                    <h3 className='ingredientsHead'>Ingredients:</h3>
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
                </div>
            </section>
            <div className='instructions-body'>    
                <div className='instructions'>
                <h3>How to make a {drinksD.drinks[0].strDrink}:</h3>
                <p className='text'>{drinksD.drinks[0].strInstructions}</p>
                </div>
            </div>    
            </div>
  
        </div>
        </div> :<p>Loading...</p>
      );
      
}
export default DrinkDetails