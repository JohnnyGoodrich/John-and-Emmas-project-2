import {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
import {useParams} from 'react-router'

function Rum(){

  const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum`
  const [drink, setDrink]=useState(null)
  useEffect( ()=> {
      fetch(url)
          .then((response)=>response.json())
          .then((json)=> {
              setDrink(json)
            //   console.log(drink.drinks)
      })
          .catch(console.error)

  }, [])
  if (drink === null){
  return ( 
    <h1>Loading...</h1>)
  }else{

return(
  
  <><div className="container">
    <h1>Rum Drinks:</h1>

    {drink.drinks.map((drinky, index) => {
      return (
        <Link to={`/drinks/${drinky.idDrink}`} key={index}>
          <div className="drinks" key={index}>
            <div className="drinkName">
              <h3>{drinky.strDrink}</h3>
            </div>
            <div className="img">
              <img src={drinky.strDrinkThumb} height="100" />
            </div>
          </div>
        </Link>


      )
    })}
  </div><div className='btns'>
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
    </div></>

)}}
export default Rum