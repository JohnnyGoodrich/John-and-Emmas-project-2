import {useState, useEffect} from 'react';
import {useParams} from 'react-router'


function DrinkDetails(){
    const id = useParams()
    console.log(id)
    const url= `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id.id}`
    const [drinksD, setDrinksD]=useState(null)
    useEffect( ()=> {
        fetch(url)
            .then((response)=>response.json())
            .then((json)=> {
                setDrinksD(json)
                console.log(url)
                console.log(drinksD.drinks[0].strDrink)
        })
            .catch(console.error)
    }, [])
    return (
        drinksD ?
        <div className="details-container">
            <h2>{drinksD.drinks[0].strDrink}</h2>
            <img src={drinksD.drinks[0].strDrinkThumb}height="300"/>
            <h3>How to make a {drinksD.drinks[0].strDrink}:</h3>
            <p className='text'>{drinksD.drinks[0].strInstructions}</p>

           

     
          
        </div> :<p>Loading...</p>
      );
      
}
export default DrinkDetails