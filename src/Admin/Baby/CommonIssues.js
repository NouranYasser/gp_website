import React from "react";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import"../../style/commonissues.css";

function CommonIssues() {
  return (
    <div>
      <h1 className="c1">Common Issues</h1>
      <div className="b-iss"><Link to="/AddIssue">
        <button className="bb"> Add Issue </button>
      </Link></div>
     
      <Link to={"/CommonIssuesAr/"}>
            <button className="">Arabic</button>
        </Link>
     
      <ProductList/>


    </div>
  );
}

export default CommonIssues;