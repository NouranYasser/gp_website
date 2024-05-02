 import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import axios from "axios";
 import "../../style/food.css";
 import "../../style/tips.css";


const ChildGrowth = () => {
 
    return (
      <>  

<br></br>  <br></br>
<Link to="/AddChildGrowth">
        <button className="btn-addBCh">
          Add Data in Child Growth
        </button>
      </Link>

<br></br>
<br></br>
<br></br>
<br></br> 
<div className="fo-container">
      <div>
      <Link to="/ChildGrowthMonth1">
        <button className="fo-b"> Month 1-3</button>
      </Link> 
       
      <Link to="/ChildGrowthMonth9">
        <button className="fo-b"> Month 9-12</button>
      </Link> 
      <Link to="/ChildGrowthMonth18">
        <button className="fo-b"> Month 18-21</button>
      </Link>    
      </div>
      <div>
        <Link to="/ChildGrowthMonth3">
        <button className="fo-b"> Month 3-6</button>
      </Link>  
      
      <Link to="/ChildGrowthMonth12">
        <button className="fo-b"> Month 12-15</button>
      </Link> 
      <Link to="/ChildGrowthMonth21">
        <button className="fo-b"> Month 21-24</button>
      </Link> 
       
      </div>
      <div className="last">
      <Link to="/ChildGrowthMonth6">
        <button className="fo-b"> Month 6-9</button>
        </Link> 
        <Link to="/ChildGrowthMonth15">
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
  export default ChildGrowth;