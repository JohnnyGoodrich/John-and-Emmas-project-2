import { Link } from "react-router-dom";
import Slider from "./Slider";


function Mainpage(props) {
    return<div className="div1">
      <Slider/>



   <div className="button">
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
    
    
}
export default Mainpage;