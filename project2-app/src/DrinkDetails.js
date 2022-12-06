import {useState, useEffect} from 'react';
import {useParams} from 'react-router'


function DrinkDetails(){
    const id = useParams()
    console.log(id)
    const url= `https://ga-audubon-api.herokuapp.com/api/birds/gin`
    const [drinksD, setDrinksD]=useState(null)
    useEffect( ()=> {
        fetch(url)
            .then((response)=>response.json())
            .then((json)=> {
                setDrinksD(json)
                console.log(drinksD)
        })
            .catch(console.error)
    }, [])
    return (
        drinksD ?
        <div className="details-container">
            <h2>{drinksD.strDrink}</h2>

     
          
        </div> :<p>Loading...</p>
      );
      
}
export default DrinkDetails