import React from "react";
import "../style/Header.css";
import {Link} from "react-router-dom";
import { removeAuthUser } from "../helper/Storage";


const Header = () => {
  const handleLogout = () => {
    removeAuthUser();
    window.location.href = "/";
  };
  return (<header>
  
    
    <button className="Newlogout" onClick={handleLogout}>Logout</button>

    <nav className="navbar">
      

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