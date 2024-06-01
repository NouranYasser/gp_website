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
            <h2 className="mx-10">About Pregnancy</h2>
            <p>
              Pregnancy is a beautiful and transformative journey in a woman's life, typically lasting around 40 weeks from the last menstrual period to childbirth. During this time, the body undergoes significant changes to support the development of the fetus. Regular prenatal care, a healthy diet, and appropriate exercise are crucial for the health of both the mother and the baby. Emotional support from family, friends, and healthcare providers also plays an important role in ensuring a positive pregnancy experience.
            </p>

            <h3>Managing Body Changes</h3>
            <p>
              Throughout pregnancy, a woman's body undergoes numerous changes, including weight gain, hormonal fluctuations, and physical transformations. Managing these changes involves maintaining a balanced diet, staying hydrated, and wearing comfortable clothing. It’s important to stay informed about what changes to expect and to communicate with healthcare providers to address any concerns.
            </p>

            <h3>Baby Growth</h3>
            <p>
              Baby growth during pregnancy is a miraculous process, with the fetus developing from a single cell to a fully formed baby. This growth is tracked in three trimesters, each marked by significant milestones such as the development of the heart, brain, and limbs. Regular ultrasounds and prenatal visits help monitor the baby’s progress and ensure everything is on track.
            </p>

            <h3>Feeding</h3>
            <p>
              Proper nutrition is vital during pregnancy to support the health of both the mother and the developing baby. A diet rich in fruits, vegetables, lean proteins, and whole grains provides essential nutrients. Prenatal vitamins often supplement the diet to ensure adequate intake of important nutrients like folic acid, iron, and calcium.
            </p>

            <h3>Exercises</h3>
            <p>
              Staying active during pregnancy is beneficial for both physical and mental health. Gentle exercises such as walking, swimming, and prenatal yoga can help improve circulation, reduce stress, and prepare the body for labor. It’s important to consult with healthcare providers before starting any exercise regimen to ensure it’s safe for both mother and baby.
            </p>

            <h3>Vitamins and Courses</h3>
            <p>
              Prenatal vitamins play a crucial role in supporting a healthy pregnancy. These vitamins typically include folic acid, iron, calcium, and DHA, which are essential for fetal development. Additionally, attending prenatal courses can be incredibly beneficial for expecting parents. These courses provide valuable information on childbirth, breastfeeding, and newborn care, helping parents feel more prepared and confident.
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
