import React from "react";
import "../../style/productCard.css";
//import { Helmet } from 'react-helmet';
//import ShowDetails from "./Admin/Baby/ShowDetails.js"
import { Link } from 'react-router-dom';
 
//props read only
function ProductCard (props) {


  return ( 
    <div className="product-Card">
      <div className="card-top">
      </div> 


       <div className="card-info">

         <h3 className="title"><h3>{props.name}</h3></h3>
         <h4> {props.description}</h4>
        
        
        <Link to={`/ShowDetails`}>Show Details</Link>


       </div>
    </div>
    )
};

export default ProductCard;
   

// <button className="buy"><h4 className="now">Buy now</h4></button>
// /${ProductId}