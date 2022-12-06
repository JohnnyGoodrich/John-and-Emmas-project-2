import {useState, useEffect} from 'react';
import {useParams} from 'react-router'


function DrinkDetails(){
    const id = useParams()
    console.log(id)
    const url= `https://ga-audubon-api.herokuapp.com/api/birds/${id.id}`
    const [drinksD, setDrinksD]=useState(null)
    useEffect( ()=> {
        fetch(url)
            .then((response)=>response.json())
            .then((json)=> {
                setBird(json)
                console.log(bird)
        })
            .catch(console.error)
    }, [])
    return (
        drinksD ?
        <div className="details-container">
            
     
          </div>
        </div> :<p>Loading...</p>
      );
      
}
export default DrinkDetails