import React from "react";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";

function CommonIssues() {
  return (
    <div>
      <h1>Common Issues</h1>
      <Link to="/AddIssue">
        <button className="bb"> Add Issue </button>
      </Link>
      <ProductList/>
    </div>
  );
}

export default CommonIssues;