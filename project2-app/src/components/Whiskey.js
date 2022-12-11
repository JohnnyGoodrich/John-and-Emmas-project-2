import {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
import {useParams} from 'react-router'

function Whiskey(){

  const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon`
  const url2=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=scotch`
  const [drink, setDrink]=useState(null)
  const [drink2, setDrink2]=useState(null)
  useEffect( ()=> {
      fetch(url)
          .then((response)=>response.json())
          .then((json)=> {
              setDrink(json)
              // console.log(drink.drinks)
      })
          .catch(console.error)

  }, [])
  useEffect( ()=> {
    fetch(url2)
        .then((response)=>response.json())
        .then((json2)=> {
            setDrink2(json2)
            console.log(drink2.drinks)
    })
        .catch(console.error)

}, [])
  if (drink === null || drink2 === null){
  return ( 
    <h1>Loading...</h1>)
  }else{

return(
  <div className="drink-container">
      <h1 className='header'>
        <div className='header-content'>
          <a className="text-decoration-none" href="/">Clink!</a>
          <div className='drink-head'>
          <Link to="/vodka" className="text-decoration-none">Vodka | </Link>
          <Link to="/rum" className="text-decoration-none">Rum | </Link>
          <Link to="/whiskey" className="text-decoration-none">Whiskey | </Link>
          <Link to="/gin" className="text-decoration-none">Gin | </Link>
          <Link to="/tequila" className="text-decoration-none">Tequila </Link>
          </div>
        </div>
      </h1>
  
<div className="container">
<h1 className="drink-title">Bourbon Drinks:</h1>

{drink.drinks.map((drinky, index)=>{
  return(
    <Link id="drink-page-text" className="text-decoration-none" to={`/drinks/${drinky.idDrink}`} key={index}>
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
<div className="container">
<h1 className="drink-title">Scotch Drinks:</h1>

{drink2.drinks.map((drinky, index)=>{
  return(
    <Link id="drink-page-text" className="text-decoration-none" to={`/drinks/${drinky.idDrink}`} key={index}>
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
export default Whiskey