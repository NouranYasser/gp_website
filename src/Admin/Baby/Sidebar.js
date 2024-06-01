import React, { useState } from "react";
import myImage from '../../images/baby born-02.png';
import "../../style/Sidebar.css";
import { PiBabyLight } from "react-icons/pi";
import { GiMedicines } from "react-icons/gi";
import { FaBaby, FaBars } from "react-icons/fa";
import { IoFastFoodOutline, IoAccessibility } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/TipsAndActivities",
            name: "Tips And Activities",
            icon: <FaBaby />
        },
        {
            path: "/ChildMilestones",
            name: "Child Milestones",
            icon: <PiBabyLight />
        },
        {
            path: "/Nutrition",
            name: "Nutrition",
            icon: <IoFastFoodOutline />
        },
        {
            path: "/commonIssues",
            name: "Common Issues",
            icon: <IoAccessibility />
        },
    ];

    return (
        <div className="main-container">
            <div className="sidebar" style={{ width: isOpen ? "200px" : "50px" }}>
                <div className="top_section">
                    <div className="bars" onClick={toggle} style={{ marginLeft: isOpen ? "50px" : "0px" }}>
                        <FaBars />
                    </div>
                </div>
                <div className="image">
                    <img src={myImage} alt="My Image" className="image" width="300px" height="120px" />
                    <br />
                    <br />
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text" style={{ display: isOpen ? "block" : "none" }}>
                                {item.name}
                            </div>
                        </NavLink>
                    ))
                }
            </div>
            <main className='content'>{children}</main>
        </div>
    );
};

export default Sidebar;



// import React from "react";
// //import Header from "../../components/Headerlogout";
// import myImage from '../../images/baby born-02.png';
// import 

// { useState } from "react";
// import "../../style/Sidebar.css";
// import { PiBabyLight } from "react-icons/pi";
// import { GiMedicines } from "react-icons/gi";
// import { FaBaby } from "react-icons/fa";
// import { IoFastFoodOutline } from "react-icons/io5";
// import { IoAccessibility } from "react-icons/io5";
// import { IoDesktopSharp } from "react-icons/io5";
// import { FaBars } from 'react-icons/fa';
// import {  NavLink } from 'react-router-dom';

// const Sidebar  = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[       
//         {      
//             path:"/TipsAndActivities",
//             name:"Tips And Activities",
//             icon:<FaBaby/>
//         },
             
//         {
//             path:"/ChildMilestones",
//             name:"Child Milestones",
//             icon:<PiBabyLight />
//         },
      
//         {
//             path:"/Nutrition",
//             name:"Nutrition",
//             icon:<IoFastFoodOutline/>
//         },
        
//         {
//             path:"/commonIssues",
//             name:"common issues",
//             icon:<IoAccessibility/>
//         },
       
//     ]
  
//     return (   
//     <div>
//                    <main className='contant'>{children}</main>

//     <div className="container">
//            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//                <div className="top_section">
                 
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                <div className='image'>
//                <img src={myImage} alt="My Image" class="image"  width="300px" height="120px"/>
          
//               <br></br>
//               <br></br>
//               </div>
//                {
//        menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            {/* <Header/> */}
  

//            </div>
//         </div>
   
//     );
// }
// export default Sidebar;