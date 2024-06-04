import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import axios from "axios";
 import "../../style/foodBaby.css";


const Weaning = () => {
 
    return (
      <>
    <div className="fb_foot">
<br></br>
<br></br>
<br></br>
<br></br>

<Link to="/AddWeaning">
        <button className="btn-addBCh">
          {" "}
          Add Data in Weaning{" "}
        </button>
      </Link>
<br></br>
<br></br>
<br></br>
<br></br> 
<div className="fob-container">
      <Link to="/WeaningMonth1">
        <button className="fo-baby"> Month 6-8</button>
      </Link> 

      <Link to="/WeaningMonth6">
        <button className="fo-baby"> Month 8-12</button>
      </Link>  


      <Link to="/WeaningMonth12">
        <button className="fo-baby"> 1 year</button>
      </Link> 

      <Link to="/WeaningMonth18">
        <button className="fo-baby"> 2 year</button>
      </Link>
      </div>

<br></br>

</div>
        </>
    );
  };
  export default Weaning;