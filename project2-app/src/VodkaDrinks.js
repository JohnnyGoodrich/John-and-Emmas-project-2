import {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
import {useParams} from 'react-router'

function Drinks(){
    const id = "b"
    // console.log(id)
    const url= "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
  const [drink, setDrink]=useState(null)
  useEffect( ()=> {
      fetch(url)
          .then((response)=>response.json())
          .then((json)=> {
              setDrink(json)
              console.log(json)
      })
          .catch(console.error)
  }, [])
  return (
    <section className="container">
        {drink?.map((vodka)=>{
            return (
<Link to={`/details/${ vodka.drinks.idDrink }`} key={ vodka.drinks.idDrink }>
  <div className="card">
    <div className="card-image">
      <img src={vodka.drinks.strDrinkThumb} />
    </div>
    <div className="card-title">
      {/* <h3>{vodka.name}</h3> */}
    </div>
  </div>
  </Link>
    )
    })}
</section>
  )
}
export default Drinks