import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../style/productCard.css";
import { Link } from 'react-router-dom';

function ProductCard() {
  const [issues, setIssues] = useState({
    loading: true,
    data: [],
    err: null,
  });

  useEffect(() => {
    axios
      .get("https://gradhub.hwnix.com/api/get_issues")
      .then((resp) => {
        setIssues({
          loading: false,
          data: resp.data,
          err: null,
        });
      })
      .catch((err) => {
        setIssues({
          loading: false,
          data: [],
          err: "Something went wrong, please try again later!",
        });
      });
  }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

  return (
    <>
    {issues.loading && <p>Loading...</p>}
{issues.err && <p>{issues.err}</p>}
{issues.data && issues.data.length > 0 ? (
  issues.data.map((issue) => (
    <div className="product-Card" key={issue.id}>
      <div className="card-top"></div>
      <div className="card-info">
        <h3 className="title">{issue.title}</h3>          

     
        <Link to={"/ShowDetails/" + issue.id}>
          <button className="showdetail">Show Details</button>
        </Link>
      </div>
    </div>
  ))
) : (
  <p>No issues found</p>
)}
    </>
  );
}

export default ProductCard;