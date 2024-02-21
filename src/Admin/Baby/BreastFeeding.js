import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import axios from "axios";
 import "../../style/food.css"


const BreastFeeding = () => {
 
    return (
      <>
    
   
<br></br>
<br></br>
<br></br>
<br></br>

<Link to="/AddBreastFeeding">
        <button className="btn-addBCh">
          {" "}
          Add Data in BreastFeeding{" "}
        </button>
      </Link>
<br></br>
<br></br>
<br></br>
<br></br> 
<div className="fo-container">
      <Link to="/BreastFeedingMonth1">
        <button className="fo-b"> Month 1-6</button>
      </Link> 

      <Link to="/BreastFeedingMonth6">
        <button className="fo-b"> Month 6-12</button>
      </Link>  


      <Link to="/BreastFeedingMonth12">
        <button className="fo-b"> Month 12-18</button>
      </Link> 

      <Link to="/BreastFeedingMonth18">
        <button className="fo-b"> Month 18-24</button>
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
  export default BreastFeeding;