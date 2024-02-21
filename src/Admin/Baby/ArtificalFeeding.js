import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
 import axios from "axios";
 import "../../style/food.css"


const ArtificalFeeding = () => {
 
    return (
      <>
    
   
<br></br>
<br></br>
<br></br>
<br></br>

<Link to="/AddArtificalFeeding">
        <button className="btn-addBCh">
          {" "}
          Add Data in ArtificalFeeding{" "}
        </button>
      </Link>
<br></br>
<br></br>
<br></br>
<br></br> 
<div className="fo-container">
      <Link to="/ArtificalFeedingMonth1">
        <button className="fo-b"> Month 1-6</button>
      </Link> 

      <Link to="/ArtificalFeedingMonth6">
        <button className="fo-b"> Month 6-12</button>
      </Link>  


      <Link to="/ArtificalFeedingMonth12">
        <button className="fo-b"> Month 12-18</button>
      </Link> 

      <Link to="/ArtificalFeedingMonth18">
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
  export default ArtificalFeeding;