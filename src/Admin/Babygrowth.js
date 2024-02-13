import React from "react";
import { Link } from "react-router-dom";
import "../style/Babygrowth.css";

const Babygrowth = () => {
  return (
    <>
      <br></br>
      <div className="container">
        <div>
          <Link to="/BabyGrowthMonth1">
            <button className="signadmin"> Month 1</button>
          </Link>

          <Link to="/BabyGrowthMonth4">
            <button className="signadmin"> Month 4</button>
          </Link>

          <Link to="/BabyGrowthMonth7">
            <button className="signadmin"> Month 7</button>
          </Link>
        </div>
        <div>
          <Link to="/BabyGrowthMonth2">
            <button className="signadmin"> Month 2</button>
          </Link>

          <Link to="/BabyGrowthMonth5">
            <button className="signadmin"> Month 5</button>
          </Link>

          <Link to="/BabyGrowthMonth8">
            <button className="signadmin"> Month 8</button>
          </Link>
        </div>
        <div>
          <Link to="/BabyGrowthMonth3">
            <button className="signadmin"> Month 3</button>
          </Link>

          <Link to="/BabyGrowthMonth6">
            <button className="signadmin"> Month 6</button>
          </Link>

          <Link to="/BabyGrowthMonth9">
            <button className="signadmin"> Month 9</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Babygrowth;
