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
            <div className="text-decoration-none">
            <Link to="/vodka" className="text-decoration-none">Vodka | </Link>
            <Link to="/rum" className="text-decoration-none">Rum | </Link>
            <Link to="/whiskey" className="text-decoration-none">Whiskey | </Link>
            <Link to="/gin" className="text-decoration-none">Gin | </Link>
            <Link to="/tequila" className="text-decoration-none">Tequila </Link>
            </div>
          </div>
        </h1>
           
      </div>  
  </div>
    )
}
    export default Mainpage;