import React from "react";
import { Link } from "react-router-dom";
import "../../style/Babygrowth.css";

const Bodychange = () => {
  return (
    <>
    <br></br>
     <Link to="/AddBodyChange">
        <button className="bb"> Add Data on Body change </button>
      </Link>
      <br></br>
     
      <div className="container">
        <div>
          <Link to="/BodyChangeMonth1">
            <button className="signadmin"> Month 1</button>
          </Link>

          <Link to="/BodyChangeMonth2">
            <button className="signadmin"> Month 4</button>
          </Link>

          <Link to="/BodyChangeMonth7">
            <button className="signadmin"> Month 7</button>
          </Link>
        </div>
        <div>
          <Link to="/BodyChangeMonth2">
            <button className="signadmin"> Month 2</button>
          </Link>

          <Link to="/BodyChangeMonth5">
            <button className="signadmin"> Month 5</button>
          </Link>

          <Link to="/BodyChangeMonth8">
            <button className="signadmin"> Month 8</button>
          </Link>
        </div>
        <div>
          <Link to="/BodyChangeMonth3">
            <button className="signadmin"> Month 3</button>
          </Link>

          <Link to="/BodyChangeMonth6">
            <button className="signadmin"> Month 6</button>
          </Link>

          <Link to="/BodyChangeMonth9">
            <button className="signadmin"> Month 9</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Bodychange;
