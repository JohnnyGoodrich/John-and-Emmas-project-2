import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "./Slider";


function Mainpage(props) {
  return  (
  <div className="mainpage">
   
    <div className="button">
      <div className="div1">
        <div className="div2">
        </div>
        {/* <Slider /> */}
    </div>
        <div className="title-container">
          <div className="title-page-img">Clink!</div>
        </div>
  </div>
      <div className="mp-header-container">
        <h1 className='mp-header'>
          <div className='mp-header-content'>
            <div className='mp-drink-head'>
            <Link to="/vodka" className='drink-link-head'>Vodka | </Link>
            <Link to="/rum" className='drink-link-head'>Rum | </Link>
            <Link to="/whiskey" className='drink-link-head'>Whiskey | </Link>
            <Link to="/gin" className='drink-link-head'>Gin | </Link>
            <Link to="/tequila" className='drink-link-head'>Tequila </Link>
            </div>
          </div>
        </h1>
            {/* <Slider/> */}
      </div>  
  </div>
    )
}
    export default Mainpage;