// import React from 'react';
// import Sidebar from "./Sidebar";
// import "../../style/BabyHome.css";
// import myImage from '../../images/BabyBorn.png';

// import Headerlogout from "../../components/Headerlogout";


// function BabyHome() {

//   return (
//     <>
//       <Sidebar />
//       <div className='back'>
//          <div className='main-back'>
        

//          <img src={myImage} alt="My Image" class="image"  width="4000px" height="1000px"/>
//          </div>

//          <Headerlogout/>
      
//       </div>

//     </>
//   );

// }
// export default BabyHome;

import React from 'react';
import Sidebar from "./Sidebar";
import "../../style/BabyHome.css";
import { removeAuthUser } from "../../helper/Storage";
import myImage2 from "../../images/imagepr22.png";
import Header from "../../components/Headerlogout";

function BabyHome(){
  
  const handleLogout = () => {
    removeAuthUser();
    window.location.href = '/';
  }
 
  return (
    <>
      <Header/>
      <div className='back'>
        <Sidebar />
        <div className='main-back'>
          <img src={myImage2} alt="My Image" className="image123" width="400px" height="400px"/> 
          <div className="info-section">
            <h2 className="Ab">About BabyBorn</h2>
           
            <h3 className='pre-title'>Tips and Activities</h3>
            <p>
            Talk to the mother that children love to play, and they love to play more when they can touch different materials with their little hands. Children learn about themselves and the world around them through hands-on activities
            </p>

            <h3 className='pre-title'>Child Milestones</h3>
            <p>
            Talk to the mother about developmental milestones, which are behaviors that define the stages of typical growth. Children all develop at their own pace. However, most <br></br>children go through certain changes around the same time as they grow older.
            </p>

          <h3 className='pre-title'>Feeding</h3>
            <p>
            Types of Feeding for Baby Born :
            <br></br>

            - Breastfeeding:Breast milk is the best source of nutrition for most babies. As the baby grows, the mother's breast milk will change to meet the baby's nutritional <br></br><tr></tr>needs.
            <br></br>

            - BottleFeeding:Use the provided bottle to simulate feeding. The bottle can be filled with water to mimic real feeding.
           <br></br>
        
            - Weaning:It starts with the first mouthful of food and ends with the last feed of breastmilk or formula milk.

            </p>

            <h3 className='pre-title'>CommonIssuses</h3>
            <p>
            Children often face a variety of common problems as they grow and develop. Talk to the mother about these problems and help her solve them because understanding ,<br></br>these problems and knowing how to address them can help parents ensure the health of their children.
            </p>

          </div>
        </div>
      </div>
    </>
  );
}

export default BabyHome;

