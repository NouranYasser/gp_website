import React from "react";
import {Data} from "../../Data/CommonProblem";
import ProductCard  from "./ProductCard";
import "../../style/productList.css";
import { useState, useEffect } from 'react';


function ProductList (){
    const items = Data;
    return (
        <div class='productCard'>
            {
               items.map((item) => {
                    return <ProductCard key={item.id} 
                    name={item.name} 
                    description={item.description}       
                 
                    />
                    ;
                })
            
            }
        </div>
        
    );
  
};

export default ProductList;
