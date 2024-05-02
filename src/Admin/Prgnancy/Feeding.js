import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/food.css";


const Feeding = () => {
 
    

  return (
    <> 
    <br></br><br></br><br></br><br></br>
    <Link to="/AddFeeding">
        <button className="btn-addBF"> Add Data in Feeding</button>
      </Link>
    

      <div className="f_foot">
      <br></br><br></br>
        <div className="fo-container">
          <Link to="/FeedingMonth1">
            <button className="fo-b"> Month 1-3</button>
          </Link>

          <Link to="/FeedingMonth3">
            <button className="fo-b"> Month 3-6</button>
          </Link>


          <Link to="/FeedingMonth6">
            <button className="fo-b"> Month 6-9</button>
          </Link>
        </div>
      </div>



        </>
    );}
export default Feeding;
