import {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
import {useParams} from 'react-router'

function Drinks(){

  const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka`
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
    <h1>Loading...</h1>)
  }else{

return(
  
<div className="container">
<h1>Drinks:</h1>

{drink.drinks.map((drinky, index)=>{
  return(
    // <Link to={`/details/$${drinky.}`}
    <div className="drinks" key={index}>
      <div className="drinkName">
    <h3>{drinky.strDrink}</h3>
    </div>
    <div className="img">
    <img src={drinky.strDrinkThumb}height="100"/>
    </div>
    </div>

  )
})
}
</div>
)}}
export default Drinks