import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/food.css";


const Feeding = () => {
 
    

  return (
    <> 
     <div className="f_foot">
    <Link to="/AddFeeding">
        <button className="btn-addBF"> Add Data in Feeding</button>
      </Link>
<h1 className="f-p">Food </h1>

        <div className="fo-container">
          <Link to="/FoodMonth1">
            <button className="fo-b"> Month 1-3</button>
          </Link>

          <Link to="/FoodMonth3">
            <button className="fo-b"> Month 3-6</button>
          </Link>


          <Link to="/FoodMonth6">
            <button className="fo-b"> Month 6-9</button>
          </Link>
        </div>
      </div>



        </>
    );}
export default Feeding;
