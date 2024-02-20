import React from "react";
import { Link } from "react-router-dom";


const Vaccinations = () => {
 
    return (
      <>  
      <br></br>
<br></br>
<br></br> 
<h1 className="f-p"> Vaccinations </h1>
<br></br>
<br></br>
<br></br>

<div className="fo-container">
<Link to="/CompulsoryVaccinations">
        <button className="fo-b">Compulsory Vaccinations</button>
      </Link> 

      <Link to="/AdditionalVaccines">
        <button className="fo-b">Additional recommemded Vaccines</button>
      </Link>  

        </div>
      </>
    );
  };
  export default Vaccinations;