import React from "react";
import Header from "../../components/Headerlogout";
import myImage from '../../images/image.png';
import { useState } from "react";
import "../../style/Sidebar.css";
import { PiBabyLight } from "react-icons/pi";
import { GiMedicines } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoAccessibility } from "react-icons/io5";
import { IoDesktopSharp } from "react-icons/io5";
import { FaBars } from 'react-icons/fa';
import {  NavLink } from 'react-router-dom';

const Sidebar  = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[       
        {      
            path:"/TipsAndActivities",
            name:"Tips And Activities",
            icon:<FaBaby/>
        },
             
        {
            path:"/ChildMilestones",
            name:"Child Milestones",
            icon:<PiBabyLight />
        },
      
        {
            path:"/Nutrition",
            name:"Nutrition",
            icon:<IoFastFoodOutline/>
        },
        {
            path:"/Vaccinations",
            name:"Vaccinations",
            icon:<GiMedicines/>
        },
        {
            path:"/commonIssues",
            name:"common issues",
            icon:<IoAccessibility/>
        },
       
    ]
  
    return (   
    <div>
                   <main className='contant'>{children}</main>

    <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                 
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               <div className='image'>
               <img src={myImage} alt="My Image" class="image"  width="300px" height="120px"/>
          
              <br></br>
              <br></br>
              </div>
               {
       menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <Header/>
  

           </div>
        </div>
   
    );
}
export default Sidebar;