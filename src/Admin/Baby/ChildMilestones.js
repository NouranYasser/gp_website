 import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import axios from "axios";
 import "../../style/ChildMilestones.css";
//  import "../../style/tips.css";


const ChildMilestones = () => {
 
    return (
      <>  

<div className="ff_foot">
<Link to="/AddChildMilestones">
        <button className="btn-addBCh">
          Add Data in Child Milestones
        </button>
      </Link>


<div className="fooo-container">
      <div>
      <Link to="/ChildMilestonesMonth1">
        <button className="foob"> Month 1-3</button>
      </Link> 
       
      <Link to="/ChildMilestonesMonth9">
        <button className="foob"> Month 9-12</button>
      </Link> 
      <Link to="/ChildMilestonesMonth18">
        <button className="foob"> Month 18-21</button>
      </Link>    
      </div>
      <div>
        <Link to="/ChildMilestonesMonth3">
        <button className="foob"> Month 3-6</button>
      </Link>  
      
      <Link to="/ChildMilestonesMonth12">
        <button className="foob"> Month 12-15</button>
      </Link> 
      <Link to="/ChildMilestonesMonth21">
        <button className="foob"> Month 21-24</button>
      </Link> 
       
      </div>
      <div className="last">
      <Link to="/ChildMilestonesMonth6">
        <button className="foob"> Month 6-9</button>
        </Link> 
        <Link to="/ChildMilestonesMonth15">
        <button className="foob"> Month 15-18</button>
      </Link> 

      </div>
      </div>


      </div>
        </>
    );
  };
  export default ChildMilestones;