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
            <h2 className="mx-10">About BabyBorn</h2>
           
            <h3 className='pre-title'>Tips and Activities</h3>
            <p>
            Babies love to play, and even more so when they can touch different textures with their little hands. Babies learn about about themselves and the world around them through hands-on activities. That’s why sensory play activities are not only fun for babies but also an important part of their development.            
            </p>

            <h3 className='pre-title'>Child Milestones</h3>
            <p>
            Developmental milestones are the behaviors that mark stages of typical growth. Children all develop at their own pace. However, most children pass through specific changes at approximately the same time as they get older. Examples of developmental milestones in a baby’s first year of life may include:Smiling intentionally.
            Sitting without support.Waving goodbye.Moving objects from one hand to the other.Transitioning from crawling to taking steps.As they grow older, a child’s developmental milestones may include:Knowing names of people or body parts.Using sentences with two to four words.Sorting shapes and colors.Repeating familiar songs or poems from memory.Telling stories.           </p>

          <h3 className='pre-title'>Feeding</h3>
            <p>
            Types of Feeding for Baby Born :
            <br></br>

            - Breastfeeding:Breast milk is the best source of nutrition for most babies. As the baby grows, the mother's breast milk will change to meet the baby's nutritional needs.
            <br></br>

            - BottleFeeding:Use the provided bottle to simulate feeding. The bottle can be filled with water to mimic real feeding.
           <br></br>
        
            - Weaning:It starts with the first mouthful of food and ends with the last feed of breastmilk or formula milk.

            </p>

            <h3 className='pre-title'>CommonIssuses</h3>
            <p>
            Babies often encounter a variety of common issues as they grow and develop. Understanding these issues and knowing how to address them can help parents ensure their baby's well-being.
            </p>

          </div>
        </div>
      </div>
    </>
  );
}

export default BabyHome;

