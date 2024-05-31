import React, { useState, useEffect } from "react";
import "../../style/productCard.css";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
function ProductCard() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = () => {
    axios
      .get("https://gradhub.hwnix.com/api/get_issues/en")
      .then((res) => {
        setIssues(res.data);
      })
      .catch((err) => {
        console.error("Error fetching issues:", err);
      });
  };

  const deleteIssue = (id) => {
    axios
      .delete(`https://gradhub.hwnix.com/api/delete_issues/${id}`)
      .then((resp) => {
        fetchIssues(); // Refresh the list after deletion
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>

    <div>
      
      {issues.map((item) => (
        <div key={item.id} className="product-Card">
          <div className="card-top"></div>
          <div className="card-info">
          <button onClick={() => deleteIssue(item.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
            <h3 className="title">{item.name}</h3>  
            <Link to={"/ShowDetails/" + item.id}>
              <button className="btnShow">Show Details</button>
            </Link>
          </div>
        
        </div>
        
      ))}
    </div>
    </>
  );
}

export default ProductCard;