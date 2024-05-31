import React from 'react';
import Sidebar from "./Sidebar";
import "../../style/BabyHome.css";
import myImage from '../../images/BabyBorn.png';

import Headerlogout from "../../components/Headerlogout";


function BabyHome() {

  return (
    <>
      <Sidebar />
      <div className='back'>
         <div className='main-back'>
        

         <img src={myImage} alt="My Image" class="image"  width="4000px" height="1000px"/>
         </div>

         <Headerlogout/>
      
      </div>

    </>
  );

}
export default BabyHome;


