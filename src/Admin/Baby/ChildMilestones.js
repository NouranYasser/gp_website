import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import axios from "axios";
 import "../../style/food.css";
 import "../../style/tips.css";


const ChildMilestones = () => {
 
    return (
      <>  

<br></br>  <br></br>
<Link to="/AddChildGrowth">
        <button className="btn-addBCh">
          Add Data in Child Milestones
        </button>
      </Link>

<br></br>
<br></br>
<br></br>
<br></br> 
<div className="fo-container">
      <div>
      <Link to="/ChildMilestonesMonth1">
        <button className="fo-b"> Month 1-3</button>
      </Link> 
       
      <Link to="/ChildMilestonesMonth9">
        <button className="fo-b"> Month 9-12</button>
      </Link> 
      <Link to="/ChildMilestonesMonth18">
        <button className="fo-b"> Month 18-21</button>
      </Link>    
      </div>
      <div>
        <Link to="/ChildMilestonesMonth3">
        <button className="fo-b"> Month 3-6</button>
      </Link>  
      
      <Link to="/ChildMilestonesMonth12">
        <button className="fo-b"> Month 12-15</button>
      </Link> 
      <Link to="/ChildMilestonesMonth21">
        <button className="fo-b"> Month 21-24</button>
      </Link> 
       
      </div>
      <div className="last">
      <Link to="/ChildMilestonesMonth6">
        <button className="fo-b"> Month 6-9</button>
        </Link> 
        <Link to="/ChildMilestonesMonth15">
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
  export default ChildMilestones;