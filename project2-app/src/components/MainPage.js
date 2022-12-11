import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "./Slider";


function Mainpage(props) {
  return  (
    <div className="mainpage">
        <div className="title-container">
          <div className="title-page-img">Clink!</div>
        </div>

  <div className="slider">
      <Slider/>

  </div>
      <div className="mp-header-container">
        <h1 className='mp-header'>
          <div className='mp-header-content'>
            <div class="text-decoration-none" className='mp-drink-head'>
            <Link to="/vodka" class="text-decoration-none">Vodka | </Link>
            <Link to="/rum" class="text-decoration-none">Rum | </Link>
            <Link to="/whiskey" class="text-decoration-none">Whiskey | </Link>
            <Link to="/gin" class="text-decoration-none">Gin | </Link>
            <Link to="/tequila" class="text-decoration-none">Tequila </Link>
            </div>
          </div>
        </h1>
           
      </div>  
  </div>
    )
}
    export default Mainpage;