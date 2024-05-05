import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "../../style/productList.css";

function ProductList() {
  const [issues, setIssues] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setIssues({ ...issues, loading: true });
    axios
      .get("https://gradhub.hwnix.com/api/get_Isssues/en")
      .then((resp) => {
        setIssues({
          ...issues,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setIssues({
          ...issues,
          loading: false,
          err: "Something went wrong, please try again later!",
        });
      });
  }, [issues.reload]);

  return (
    <div className="productCard">
      {issues.loading ? (
        <p>Loading...</p>
      ) : issues.err ? (
        <p>{issues.err}</p>
      ) : (
        <ProductCard/>
      )}
    </div>
  );
}

export default ProductList;