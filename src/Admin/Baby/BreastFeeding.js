import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import axios from "axios";
 import "../../style/foodBaby.css";


const BreastFeeding = () => {
 
    return (
      <>
       <div className="fb_foot">
   
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
<div className="fob-container">
      <Link to="/BreastFeedingMonth1">
        <button className="fo-baby"> Month 1-6</button>
      </Link> 

      <Link to="/BreastFeedingMonth6">
        <button className="fo-baby"> Month 6-12</button>
      </Link>  


      <Link to="/BreastFeedingMonth12">
        <button className="fo-baby"> Month 12-18</button>
      </Link> 

      <Link to="/BreastFeedingMonth18">
        <button className="fo-baby"> Month 18-24</button>
      </Link>
      </div>




</div> 
        </>
    );
  };
  export default BreastFeeding;