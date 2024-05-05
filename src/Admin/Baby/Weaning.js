import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import axios from "axios";
 import "../../style/food.css";


const Weaning = () => {
 
    return (
      <>
    <div className="f_foot">
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
<div className="fo-container">
      <Link to="/WeaningMonth1">
        <button className="fo-b"> Month 1-6</button>
      </Link> 

      <Link to="/WeaningMonth6">
        <button className="fo-b"> Month 6-12</button>
      </Link>  


      <Link to="/WeaningMonth12">
        <button className="fo-b"> Month 12-18</button>
      </Link> 

      <Link to="/WeaningMonth18">
        <button className="fo-b"> Month 18-24</button>
      </Link>
      </div>

<br></br>

</div>
        </>
    );
  };
  export default Weaning;