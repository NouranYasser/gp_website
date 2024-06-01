import React from "react";
//import Header from "../../components/Headerlogout";
import myImage from '../../images/baby born-02.png';
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
            path:"/Bodychange",
            name:"Body change",
            icon:<FaBaby/>
        },
             
        {
            path:"/Babygrowth",
            name:"Baby growth",
            icon:<PiBabyLight />
        },
      
        {
            path:"/Feeding",
            name:"Feeding",
            icon:<IoFastFoodOutline/>
        },
        {
            path:"/Vitamins",
            name:"Vitamins",
            icon:<GiMedicines/>
        },
        {
            path:"/Exercises",
            name:"Exercises",
            icon:<IoAccessibility/>
        },
        {
            path:"/Courses",
            name:"Courses",
            icon:<IoDesktopSharp/>
        },
    
    ]
  
    return (   
    <div>
                   <main className='contant'>{children}</main>

    <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                 
                   <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars ">
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
                           <div className="icon mr-3" >{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text mx-3">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
      

           </div>
        </div>
   
    );
}
export default Sidebar;