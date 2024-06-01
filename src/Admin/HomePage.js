import React from "react";
import "../style/UserHome.css";
import { Link } from "react-router-dom";
import { removeAuthUser } from "../helper/Storage";
import myImage from "../images/imagepr2.png"
import Image from "../images/imageconverted.png"
import myImage2 from "../images/baby born-02.png";
import "./Baby/Sidebar";
import "./Baby/BabyHome";
//import { useState } from "react";

const UserHome = () => {
  const handleLogout = () => {
    removeAuthUser();
    window.location.href = "/Login";
  };
  return (
    <> 
       <div className="nouran222">
        <div className="header12">
       <header>
    <img src={myImage2} alt="My Image2" class="logo"  width="200px" height="200px"/>

    <button className="Newlogout2" onClick={handleLogout}>Logout</button>

    <nav className="navbar">
      
    </nav>
  </header>
  </div>
      <div className="main-div">
      <div className="b-div">
       <img src={myImage} alt="My Image" class="image"  width="400px" height="400px"/>
      <br></br>
      <Link to="/BabyHome">
        <button className="Newborn"> New Born</button>
      </Link>
      </div>
      <div className="b-div">

      <img src={Image} alt="My Image" class="image"  width="400px" height="400px"/>
      <br></br>
       <Link to="/Pregnancy">
        <button className="Newborn"> pregnancy</button>
      </Link>
      </div>

      </div>
      </div>


    </>
  );
};
export default UserHome;