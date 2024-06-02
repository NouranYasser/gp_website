import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import axios from "axios";
 import "../../style/nutration.css";


const Nutrition = () => {
 
    return (
      <>  
      <div className='f_foot_N'>
        <br></br>
        <br></br>
<h1 className="f-pN">Nutrition </h1>
<br></br>
<br></br>
<br></br>
<br></br> 
<div className="fo-containerN">
<Link to="/Weaning">
        <button className="fo-bN">Weaning</button>
      </Link> 

      <Link to="/BreastFeeding">
        <button className="fo-bN">Breast Feeding</button>
      </Link>  

       <Link to="/ArtificalFeeding">
        <button className="fo-bN">Artifical Feeding</button>
        </Link>  

        </div>
        
  </div>
      </>
    );
  };
  export default Nutrition;