import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function Slider(){
    
    const url= `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    const [drinksD, setDrinksD]=useState(null)
    useEffect( ()=> {
        fetch(url)
            .then((response)=>response.json())
            .then((json)=> {
                setDrinksD(json)  
                    
        })
            .catch(console.error)
    }, [])
    return (
        
        drinksD ?
        
        <div className="details-container">
            <section className='drink-ing'>
                <div className='drink-title-pic'>
                    <h2>{drinksD.drinks[0].strDrink}</h2>
                    <img src={drinksD.drinks[0].strDrinkThumb}height="300"/>
                    
                </div>
            </section>
        </div> :<p>Loading...</p>
        
        ); 

}
function Interval (props){

    useEffect(() => {
        let interval = setInterval(async () => {
            const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
        }, 2000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    }

export default Slider;