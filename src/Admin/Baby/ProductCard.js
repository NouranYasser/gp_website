import React, { useState, useEffect } from "react";
import "../../style/productCard.css";
import axios from "axios";
import { Link } from 'react-router-dom';

function ProductCard() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios
      .get("https://gradhub.hwnix.com/api/get_issues")
      .then((res) => {
        setIssues(res.data);
      })
      .catch((err) => {
        console.error("Error fetching issues:", err);
      });
  }, []);

  return (
    <div>
      {issues.map((item) => (
        <div key={item.id} className="product-Card">
          <div className="card-top"></div>
          <div className="card-info">
            <h3 className="title">{item.title}</h3>
            <Link to={"/ShowDetails/" + item.id}>
              <button className="btnShow">Show Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
