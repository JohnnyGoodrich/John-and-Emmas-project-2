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
              // console.log(drink.drinks)
      })
          .catch(console.error)

  }, [])
  if (drink === null){
  return ( 
    <h1>Loading...</h1>)
  }else{

return(
  <div>
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
<div className="container">
<h1>Vodka Drinks:</h1>

{drink.drinks.map((drinky, index)=>{
  return(
    <Link to={`/drinks/${drinky.idDrink}`}key={index}>
      <div className="drinks" key={index}>
        <div className="drinkName">
          <h3>{drinky.strDrink}</h3>
        </div>
        <div className="img">
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
export default Drinks