import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import axios from "axios";
 //import "../../style/food.css"


const Nutrition = () => {
 
    return (
      <>  
<h1 className="f-p">Nutrition </h1>
<br></br>
<br></br>
<br></br>
<br></br> 
<div className="fo-container">
<Link to="/Weaning">
        <button className="fo-b">Weaning</button>
      </Link> 

      <Link to="/BreastFeeding">
        <button className="fo-b">Breast Feeding</button>
      </Link>  

       <Link to="/ArtificalFeeding">
        <button className="fo-b">Artifical Feeding</button>
        </Link>  

        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </>
    );
  };
  export default Nutrition;