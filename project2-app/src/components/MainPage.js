import { Link } from "react-router-dom";


function Mainpage(props) {
    return<>
    <h1 id="appname">Clink</h1>
    <img id="Mainimg" src={"https://i.pinimg.com/564x/f3/56/04/f356048cad4abaedad5000a7e2b39a92--outdoor-patio-string-lights-outdoor-patios.jpg"} alt="logo"/>
    
    
      <div>
        <Link to="/vodka">
          <button>Vodka</button>
        </Link>
    
        <Link to="/rum">
          <button id="Rum">Rum</button>
        </Link>
        
        <Link to="/whiskey">
          <button id="Whiskey">Whiskey</button>
        </Link>

        <Link to="/gin">
          <button id="Gin">Gin</button>
        </Link>
      </div>

    
    
    
    </>
    
}
export default Mainpage;