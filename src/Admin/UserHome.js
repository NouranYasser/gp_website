import React from "react";
import Header from "../components/Headerlogout";
import "../style/UserHome.css";
import { Link } from "react-router-dom";
//import Image from "./logo.png";
import myImage from '../images/images logo.png';
//import { useState } from "react";

const UserHome = () => {
 
  return (
    <>

       <Header />
      <div className="main-div">
      <div className="b-div">
       <img src={myImage} alt="My Image" class="image"  width="300px" height="300px"/>
      <br></br>
      <Link to="/SignAdmin">
        <button className="signadmin"> New Born</button>
      </Link>     
      </div>
      <div className="b-div">
        
      <img src={Image} alt="My Image" class="image"  width="50px" height="300px"/>
      <br></br>
       <Link to="/Pregnancy">
        <button className="signadmin"> pregnancy</button>
      </Link>
      </div>

      </div>

<br></br>
<br></br>
<br></br>
<br></br>
    </>
  );
};
export default UserHome;

