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

// import React from "react";
// // import Image from '../shared/images.png';
// import ProductList from "./ProductList";
// import ProductCard from "./ProductCard";

// function CommonIssues(){
//   return (
 
//    <>

//     <ProductList/>
//     <productCard/>
//       <div className="content">
//         <div >
//           {/* <img src={Image} alt="My Image" /> */}     
//         </div>
//         <ul>
//         </ul>

//       </div>
   
//     </>
  
//   );
// };
// export default CommonIssues;
