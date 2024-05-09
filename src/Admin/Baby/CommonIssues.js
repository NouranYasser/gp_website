import React from "react";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import"../../style/commonissues.css";

function CommonIssues() {
  return (
    <div className ='c_fo'>
      <h1 className="c1">Common Issues</h1>
      <div className="b_conC">
      <div ><Link to="/AddIssue">
        <button className="bb"> Add Issue </button>
      </Link></div>
     <div>
      <Link to={"/ProductCardAr"}>
            <button className="bb">Arabic</button>
        </Link>
        </div></div>
     
      <ProductList/>


    </div>
  );
}

export default CommonIssues;