import React from "react";
import { Link } from "react-router-dom";
import "../../style/BodyChange.css";

const Bodychange = () => {
  return (
    <>
      <br></br>
      <br></br>
      <Link to="/AddBodyChange">
        <button className="btn-addBCh"> Add Data in Body change </button>
      </Link>
      <br></br>
      <br></br>
       <br></br>
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
        <div className="last-div">
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
    </>
  );
};
export default Bodychange;
