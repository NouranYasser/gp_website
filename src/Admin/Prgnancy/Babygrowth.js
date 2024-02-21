import React from "react";
import { Link } from "react-router-dom";
import "../../style/Babygrowth.css";

const Babygrowth = () => {
  return (
    <>
      <br></br>
      <div className="container-g">
        <div>
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
        <div>
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
        <div className="last-divG"> 
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
    </>
  );
};

export default Babygrowth;
