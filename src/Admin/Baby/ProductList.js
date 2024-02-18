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
      .get("https://gradhub.hwnix.com/api/get_issues")
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


// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import axios
// import ProductCard from "./ProductCard";
// import "../../style/productList.css";

// function ProductList() {
//   const [issues, setIssues] = useState({
//     loading: true,
//     results: [],
//     err: null,
//     reload: 0,
//   });

//   useEffect(() => {
//     setIssues({ ...issues, loading: true });
//     axios
//       .get("https://gradhub.hwnix.com/api/get_issues")
//       .then((resp) => {
//         setIssues({
//           ...issues,
//           results: resp.data,
//           loading: false,
//           err: null,
//         });
//       })
//       .catch((err) => {
//         setIssues({
//           ...issues,
//           loading: false,
//           err: "Something went wrong, please try again later!",
//         });
//       });
//   }, [issues.reload]);

//   return (
//     <div className="productCard">
//       {issues.loading ? (
//         <p>Loading...</p>
//       ) : issues.err ? (
//         <p>{issues.err}</p>
//       ) : (
//         issues.results.map((item) => (
//           <ProductCard
//           key={item.id}
//           title={item.title}
//         //   description={item.description}
//           />
//         ))
//       )}
//     </div>
//   );
// }

// export default ProductList;



// import React, { useState, useEffect } from "react";
// import ProductCard from "./ProductCard";
// import "../../style/productList.css";

// function ProductList() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://gradhub.hwnix.com/api/add_issue");
//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       const data = await response.json();
//       setItems(data); // Assuming data is an array of objects similar to Data in your example
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div className="productCard">
//       {items.map((item) => (
//         <ProductCard
//           key={item.id}
//           title={item.title}
//           description={item.description}
//         />
//       ))}
//     </div>
//   );
// }

// export default ProductList;


// import React from "react";
// import {Data} from "../../Data/CommonProblem";
// import ProductCard  from "./ProductCard";
// import "../../style/productList.css";

// function ProductList (){
//     const items = Data;
//     return (
//         <div class='productCard'>
//             {
//                items.map((item) => {
//                     return <ProductCard key={item.id} 
//                     name={item.name} 
//                     description={item.description}                      
//                     />
//                     ;
//                 })
            
//             }
//         </div>
        
//     );
  
// };

// export default ProductList;
