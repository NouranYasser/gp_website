import React from "react";
import "../style/Header.css";
import {Link} from "react-router-dom";
import { removeAuthUser } from "../helper/Storage";

// import { Link } from "react-router-dom";

// import myImage from '../images/images.png';
//import myImage from "../images/final.png";


const Header = () => {
  const handleLogout = () => {
    removeAuthUser();
    window.location.href = "/Login";
  };
  return (<header>
    {/* <img src={myImage} alt="My Image" class="logo"  width="110px" height="110px"/> */}
    
    <button className="Newlogout" onClick={handleLogout}>Logout</button>

    <nav className="navbar">
      
      {/* <ul>
          <div className="divHome">
          <a to="/">Home</a>
          </div>
         
          <div className="divHome">
            
          
          </div>
          </ul>
       */}
    </nav>
  </header>
  );
};
export default Header;

/*
<header>
    <img src={myImage} alt="My Image" class="logo"  width="110px" height="110px"/>

    <nav className="navbar">
      
      <ul>
          <div className="divHome">
          <a to="/">Home</a>
          </div>
         
          <div className="divHome">
            
         <a  onClick={handleLogout}>
           Logout
          </a>
          </div>
          </ul>
       
      
      
    </nav>
  </header>
  */