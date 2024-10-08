import React from "react";
import { Link } from "react-router-dom";
import "../../style/Babygrowth.css";

const Babygrowth = () => {
  return (
    <>
       <div className="ch_foot">
     
         <Link to="/AddBabyGrowth">
          <button className="btn-addBG"> Add Data in Baby Growth</button>
         </Link>
         <div className="containerBG">
        <div className="last-div-g">
          <Link to="/BabyGrowthMonth1">
            <button className="bt-MG"> Month 1</button>
          </Link>

          <Link to="/BabyGrowthMonth4">
            <button className="bt-MG"> Month 4</button>
          </Link>

          <Link to="/BabyGrowthMonth7">
            <button className="bt-MG"> Month 7</button>
          </Link>
        </div>
        <div className="last-div-g">
          <Link to="/BabyGrowthMonth2">
            <button className="bt-MG"> Month 2</button>
          </Link>

          <Link to="/BabyGrowthMonth5">
            <button className="bt-MG"> Month 5</button>
          </Link>

          <Link to="/BabyGrowthMonth8">
            <button className="bt-MG"> Month 8</button>
          </Link>
        </div>
        <div className="last-div-g"> 
          <Link to="/BabyGrowthMonth3">
            <button className="bt-MG"> Month 3</button>
          </Link>

          <Link to="/BabyGrowthMonth6">
            <button className="bt-MG"> Month 6</button>
          </Link>

          <Link to="/BabyGrowthMonth9">
            <button className="bt-MG"> Month 9</button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Babygrowth;
