import { Link } from "react-router-dom";


function Mainpage(props) {
    return(
      <div className="div1">
   <div className="div2">
    </div>
      <div className="title-container">
        <div className="title-page-img">Clink!</div>
        </div>
    <div className="buttons">
      <div className="div3">
        <Link to="/vodka">
          <button>Vodka</button>
        </Link>
      </div>
    
        <div className="div4">
        <Link to="/rum">
          <button>Rum</button>
        </Link>
        </div>
       
        <div className="div5">
        <Link to="/whiskey">
          <button>Whiskey</button>
        </Link>
        </div>
        
        <div className="div6">
        <Link to="/gin">
          <button>Gin</button>
        </Link>
        </div>
        <div className="div6">
        <Link to="/tequila">
          <button>Tequila</button>
        </Link>
        </div>
</div>
    </div>
    )
}
export default Mainpage;