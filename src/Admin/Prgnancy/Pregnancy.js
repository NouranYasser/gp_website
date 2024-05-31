import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import "../../style/Pregnancy.css";
import { removeAuthUser } from "../../helper/Storage";
import myImage2 from "../../images/Pregnancy21.png";
import Header from "../../components/Headerlogout";
function AddData() {
  
  const handleLogout = () => {
    removeAuthUser();
    window.location.href = '/';
  }
 
  return (
    <>
     <Header/>
     <div className='main-divp'>
      <Sidebar />

        <div>
       <img src={myImage2} alt="My Image" class="image123"  width="400px" height="400px"/> 
       </div>
       
      </div>
      
    </>
  );

}
export default AddData; 
