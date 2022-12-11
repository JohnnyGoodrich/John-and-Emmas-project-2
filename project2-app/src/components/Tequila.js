import {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
import {useParams} from 'react-router'

function Tequila(){

  const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila`
  const [drink, setDrink]=useState(null)
  useEffect( ()=> {
      fetch(url)
          .then((response)=>response.json())
          .then((json)=> {
              setDrink(json)
              // console.log(drink.drinks)
      })
          .catch(console.error)

  }, [])
  if (drink === null){
  return ( 
    <h1>Loading...</h1>)
  }else{

return(
<div className="drink-container">
              <h1 className='header'>
        <div className='header-content'>
          <a class="text-decoration-none" href="/">Clink!</a>
          {/* <img className='header-image' src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F421571%2Fscreenshots%2F10888517%2Fglasses_4x.jpg'height="80"></img> */}
          <div className='drink-head'>
          <Link to="/vodka" class="text-decoration-none">Vodka | </Link>
          <Link to="/rum" class="text-decoration-none">Rum | </Link>
          <Link to="/whiskey" class="text-decoration-none">Whiskey | </Link>
          <Link to="/gin" class="text-decoration-none">Gin | </Link>
          <Link to="/tequila" class="text-decoration-none">Tequila </Link>
          </div>
        </div>
        </h1>
  
<div className="container">
  
<h1 className="drink-title">Tequila Drinks:</h1>

{drink.drinks.map((drinky, index)=>{
  return(
    <Link id="drink-page-text" class="text-decoration-none" to={`/drinks/${drinky.idDrink}`} key={index}>
      <div className="drinks" key={index}>
        <div className="drinkName">
          <h3>{drinky.strDrink}</h3>
        </div>
        <div className="img2">
          <img src={drinky.strDrinkThumb}height="100"/>
        </div>
      </div>
    </Link>

  )
})
}
</div>
</div>
)}}
export default Tequila