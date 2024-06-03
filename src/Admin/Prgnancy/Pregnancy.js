import React from 'react';
import Sidebar from "./Sidebar";
import "../../style/Pregnancy.css";
import { removeAuthUser } from "../../helper/Storage";
// import myImage2 from "../../images/Pregnancy21.png";
import myImage2 from "../../images/imageconverted.png";
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
        <div className="content-div">
          <img src={myImage2} alt="My Image" className="image123" width="400px" height="400px"/> 
          <div className="info-section">
            <h2> About Pregnancy</h2>

            <h3>Body Changes</h3>
            <p>
            Give the mother data about how her body changes each month during pregnancy
            </p>

            <h3>Baby Growth</h3>
            <p>
            Provide the mother with data about the change in the size of the newborn in her womb and an example of it in real life so that she knows its exact shape
            </p>

            <h3>Feeding</h3>
            <p>
            Provide the mothers information about her nutrition during pregnancy, about the foods that are not allowed during each month, and about the foods that should be eaten in excess during pregnancy.
            </p>

            <h3>Exercises</h3>
            <p>
            Provide the mothers exercise tips to stay active during pregnancy because it is good for physical and mental health.   Light exercises such as walking, swimming,and prenatal <br></br>yoga can help improve blood circulation and reduce stress
            </p>

            <h3>Vitamins</h3>
            <p>
            Provide the mothers about prenatal vitamins and that they play a crucial role in supporting a healthy pregnancy.  It is necessary for a healthy body
 Fetal growth
            </p>

            <h3>Courses</h3>
            <p>
            Provide the mothers tips and advice and recommend videos about the pregnancy period and how to get through it correctly and healthily.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddData;


// import React from 'react';
// import axios from 'axios';
// import Sidebar from "./Sidebar";
// import { useNavigate } from "react-router-dom";
// import "../../style/Pregnancy.css";
// import { removeAuthUser } from "../../helper/Storage";
// import myImage2 from "../../images/Pregnancy21.png";
// import Header from "../../components/Headerlogout";

// function AddData() {
  
//   const handleLogout = () => {
//     removeAuthUser();
//     window.location.href = '/';
//   }
 
//   return (
//     <>
//       <Header/>
//       <div className='main-divp'>
//         <Sidebar />
//         <div className="content-div">
//           <img src={myImage2} alt="My Image" className="image123" width="400px" height="400px"/> 
//           <div className="info-section">
//             <h1>Pregnancy</h1>
//             <p>
//               Pregnancy is a beautiful and transformative journey in a woman's life, typically lasting around 40 weeks from the last menstrual period to childbirth. During this time, the body undergoes significant changes to support the development of the fetus. Regular prenatal care, a healthy diet, and appropriate exercise are crucial for the health of both the mother and the baby. Emotional support from family, friends, and healthcare providers also plays an important role in ensuring a positive pregnancy experience.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );

// }
// export default AddData;



// import React, { useState } from 'react';
// import axios from 'axios';
// import Sidebar from "./Sidebar";
// import { useNavigate } from "react-router-dom";
// import "../../style/Pregnancy.css";
// import { removeAuthUser } from "../../helper/Storage";
// import myImage2 from "../../images/Pregnancy21.png";
// import Header from "../../components/Headerlogout";
// function AddData() {
  
//   const handleLogout = () => {
//     removeAuthUser();
//     window.location.href = '/';
//   }
 
//   return (
//     <>
//      <Header/>
//      <div className='main-divp'>
//       <Sidebar />

//         <div>
//        <img src={myImage2} alt="My Image" class="image123"  width="400px" height="400px"/> 
//        </div>
       
//       </div>
      
//     </>
//   );

// }
// export default AddData; 
