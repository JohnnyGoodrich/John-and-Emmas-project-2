import { Link } from "react-router-dom";
import Slider from "./Slider";


function Mainpage(props) {
  return  <div>
   
    <div className="button">
      <div className="div1">
        <div className="div2">
        </div>
        <div className="title-container">
          <div className="title-page-img">Clink!</div>
        </div>
        <Slider />
        <div className="buttons">
          <div className="div3">


            <Link to="/vodka">
              <button>Vodka</button>
            </Link>

            <Link to="/rum">
              <button id="rum">Rum</button>
            </Link>

            <Link to="/whiskey">
              <button>Whiskey</button>
            </Link>

            <Link to="/gin">
              <button>Gin</button>
            </Link>
          </div>

        </div>


        <div className="div6">
          <Link to="/tequila">
            <button>Tequila</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
    
}
    export default Mainpage;