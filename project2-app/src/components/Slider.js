

import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap'


function Slider() {

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`


    const [drinks, setDrinks] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setDrinks(json)

            })
            .catch(console.error)
    }, [])

    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        console.log(index)
    };
    if (!drinks) {
        return (<h1>no drinks</h1>)
    }else{
       console.log(drinks.drinks)
        const eachDrink = drinks.drinks.map((drink, imageIndex) => 
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={drinks.drinks[imageIndex].strDrinkThumb}
          alt="drink"/>
          <Carousel.Caption>
          <h3>{drinks.drinks[imageIndex].strDrink
}</h3>
          <p>{drinks.drinks[imageIndex].strCategory
}</p>
        </Carousel.Caption>
        </Carousel.Item>
        )
        
        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
    {eachDrink}
</Carousel>



        );

}
}


export default Slider;