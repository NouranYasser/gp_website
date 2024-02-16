import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import axios from "axios";
 import "../../style/food.css"


const TipsAndActivities = () => {
 
    return (
      <>  
   
<br></br>
<br></br>
<br></br>
<br></br>
<h1 className="f-p">Tips And Activities </h1>
<br></br>
<br></br>
<br></br>
<br></br>
<div className="fo-container">
      <div>
      <Link to="/TipsAndActivitiesMonth1">
        <button className="fo-b"> Month 1-3</button>
      </Link> 
       
      <Link to="/TipsAndActivitiesMonth9">
        <button className="fo-b"> Month 9-12</button>
      </Link> 
      <Link to="/TipsAndActivitiesMonth18">
        <button className="fo-b"> Month 18-21</button>
      </Link>    
      </div>
      <div>
        <Link to="/TipsAndActivitiesMonth3">
        <button className="fo-b"> Month 3-6</button>
      </Link>  
      
      <Link to="/TipsAndActivitiesMonth12">
        <button className="fo-b"> Month 12-15</button>
      </Link> 
      <Link to="/TipsAndActivitiesMonth21">
        <button className="fo-b"> Month 21-24</button>
      </Link> 
       
      </div>
      <div>
      <Link to="/TipsAndActivitiesMonth6">
        <button className="fo-b"> Month 6-9</button>
        </Link> 
        <Link to="/TipsAndActivitiesMonth15">
        <button className="fo-b"> Month 15-18</button>
      </Link> 

      </div>
      </div> 


<br></br>
<br></br>
<br></br>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
        </>
    );
  };
  export default TipsAndActivities;