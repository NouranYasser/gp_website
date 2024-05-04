import React from "react";
import Header from "../components/Headerlogout";
import "../style/UserHome.css";
import { Link } from "react-router-dom";
// import Image from "../images/logo.png"
// import myImage from '../images/images logo.png';
import Image from "../images/pregnancy.jpg"
import myImage from "../images/Baby2.jpg";
import "./Baby/Sidebar";
import "./Baby/BabyHome";
//import { useState } from "react";

const UserHome = () => {
 
  return (
    <> 
       <div className="nouran">
       <Header />
      <div className="main-div">
      <div className="b-div">
       <img src={myImage} alt="My Image" class="image"  width="300px" height="300px"/>
      <br></br>
      <Link to="/BabyHome">
        <button className="Newborn"> New Born</button>
      </Link>     
      </div>
      <div className="b-div">
        
      <img src={Image} alt="My Image" class="image"  width="50px" height="300px"/>
      <br></br>
       <Link to="/Pregnancy">
        <button className="Newborn"> pregnancy</button>
      </Link>
      </div>

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

