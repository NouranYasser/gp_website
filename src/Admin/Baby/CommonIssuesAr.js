import React from "react";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import "../../style/commonissues.css";
import ProductListAr from "./ProductListAr";

function CommonIssuesAr() {
  return (
    <div className="c_fo">
      <h1 className="c1">المشاكل الشائعة</h1>
      <div className="b_conC">
        <div>
          <Link to={"/CommonIssues"}>
            <button className="bb">English</button>
          </Link>
        </div>
      </div>

      <ProductListAr />
    </div>
  );
}

export default CommonIssuesAr;
