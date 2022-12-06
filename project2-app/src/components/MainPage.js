import React from "react";

function Mainpage(props) {
    return<>
    <h1 id="appname">Clink</h1>
    <img className="img-responsive" src={"https://i.pinimg.com/564x/f3/56/04/f356048cad4abaedad5000a7e2b39a92--outdoor-patio-string-lights-outdoor-patios.jpg"} alt="logo"/>
    
    
      <div>
        {/* 👇️ react router link */}
        <Link to="/about">
          <button>Vodka</button>
        </Link>

        <br />
        <br />

        {/* 👇️ Anchor link */}
        <a href="https://google.com" target="_blank" rel="noreferrer">
          <button>Click</button>
        </a>
      </div>
    

    <button id="Rum">Rum</button>
    <button id="Whiskey">Whiskey</button>
    <button id="Gin">Gin</button>

    
    
    
    </>
    
}
export default Mainpage;