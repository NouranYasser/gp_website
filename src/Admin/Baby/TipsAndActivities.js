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
      <Link to="/TipsAndActivitiesMonth1">
        <button className="fo-b"> Month 1-3</button>
      </Link> 

      <Link to="/TipsAndActivitiesMonth3">
        <button className="fo-b"> Month 3-6</button>
      </Link>  


      <Link to="/TipsAndActivitiesMonth6">
        <button className="fo-b"> Month 6-9</button>
      </Link> 
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