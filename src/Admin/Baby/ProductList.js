import React from "react";
//import {Data} from "../../Data/CommonProblem";
import ProductCard  from "./ProductCard";
import "../../style/productList.css";
import { useState, useEffect } from 'react';


function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://gradhub.hwnix.com/api/get_issues') // Adjust the URL according to your backend API
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className='productCard'>
            {products.map(product => (
                <ProductCard key={product.id} name={product.title}/>
            ))}
        </div>
    );
}

export default ProductList;