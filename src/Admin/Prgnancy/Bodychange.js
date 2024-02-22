import React from "react";
import { Link } from "react-router-dom";
import "../../style/BodyChange.css";
import Footer from "../../shared/Footer";

const Bodychange = () => {
  return (
    <>
    <div className="ch_foot">

      <Link to="/AddBodyChange">
        <button className="btn-addBCh"> Add Data in Body change </button>
      </Link>
      
      <div className="containerBCH">
        <div className="last-div">
          <Link to="/BodyChangeMonth1">
            <button className="btn-M"> Month 1</button>
          </Link>

          <Link to="/BodyChangeMonth2">
            <button className="btn-M"> Month 4</button>
          </Link>

          <Link to="/BodyChangeMonth7">
            <button className="btn-M"> Month 7</button>
          </Link>
        </div>
        <div className="last-div">
          <Link to="/BodyChangeMonth2">
            <button className="btn-M"> Month 2</button>
          </Link>

          <Link to="/BodyChangeMonth5">
            <button className="btn-M"> Month 5</button>
          </Link>

          <Link to="/BodyChangeMonth8">
            <button className="btn-M"> Month 8</button>
          </Link>
        </div>
        <div className="last-div-ch">
          <Link to="/BodyChangeMonth3">
            <button className="btn-M"> Month 3</button>
          </Link>

          <Link to="/BodyChangeMonth6">
            <button className="btn-M"> Month 6</button>
          </Link>

          <Link to="/BodyChangeMonth9">
            <button className="btn-M"> Month 9</button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
};
export default Bodychange;
