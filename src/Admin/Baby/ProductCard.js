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
        // Handle error appropriately, e.g., setIssues([]) or display an error message
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


// import React, { useState, useEffect } from "react";
// import "../../style/productCard.css";
// import axios from "axios";
// import { Link } from 'react-router-dom';

// function ProductCard(props) {
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
//     <div className="product-Card">
//       <div className="card-top">
//       </div>
//       <div className="card-info">
//         <h3 className="title">{props.title}</h3>
//         <h4>{props.description}</h4>      
//           <Link key={issues.id} to={"/ShowDetails/" + issues.results.id}>
//             <button className="btnShow">Show Details</button>
//           </Link>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

// import React, { useState, useEffect } from "react";
// import "../../style/productCard.css";
// import axios from "axios";
// import { Link } from 'react-router-dom';

// function ProductCard(props) {
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

//   // Selecting the ID of the first item in the results array
//   const firstItemId = issues.results.length > 0 ? issues.results[0].id : null;

//   return (
//     <div className="product-Card">
//       <div className="card-top"></div>
//       <div className="card-info">
//         <h3 className="title">{props.title}</h3>
//         <h4>{props.description}</h4>
//         <Link to={"/ShowDetails/" + firstItemId}>
//           <button className="btnShow">Show Details</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;




// import React , { useState, useEffect } from "react";
// import "../../style/productCard.css";
// import axios from "axios"; 
// //import { Helmet } from 'react-helmet';
// //import ShowDetails from "./Admin/Baby/ShowDetails.js"
// import { Link } from 'react-router-dom';
 
// //props read only
// function ProductCard (props) {
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
//     <div className="product-Card">
//       <div className="card-top">
//       </div> 
//        <div className="card-info">
//          <h3 className="title"><h3>{props.title}</h3></h3>
//          <h4> {props.description}</h4>       
//         {/* <Link to={`/ShowDetails`}>Show Details</Link> */}
//         <Link to={"/ShowDetails/" + issues.results[1]?.id}>
//             <button className="btnShow">Show Details</button>
//         </Link>
//        </div>
//     </div>
//     )
// };

// export default ProductCard;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../../style/productCard.css";
// import { Link } from 'react-router-dom';

// function ProductCard() {
//   const [issues, setIssues] = useState({
//     loading: true,
//     data: [],
//     err: null,
//   });

//   useEffect(() => {
//     axios
//       .get("https://gradhub.hwnix.com/api/get_issues")
//       .then((resp) => {
//         setIssues({
//           loading: false,
//           data: resp.data,
//           err: null,
//         });
//       })
//       .catch((err) => {
//         setIssues({
//           loading: false,
//           data: [],
//           err: "Something went wrong, please try again later!",
//         });
//       });
//   }, []);

//   return (
//     <div>
//       {issues.loading && <p>Loading...</p>}
//       {issues.err && <p>{issues.err}</p>}
//       {issues.data.map((issue) => (
//         <div className="product-Card" key={issue.id}>
//           <div className="card-top"></div>
//           <div className="card-info">
//             <h3 className="title">{issue.title}</h3>
            
//             <Link to={"/ShowDetails/" + issue.id}>
//               <button className="btnShow">Show Details</button>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductCard;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../../style/productCard.css";
// import { Link } from 'react-router-dom';

// function ProductCard() {
//   const [issues, setIssues] = useState({
//     loading: true,
//     data: [],
//     err: null,
//   });

//   useEffect(() => {
//     axios
//       .get("https://gradhub.hwnix.com/api/get_issues")
//       .then((resp) => {
//         setIssues({
//           loading: false,
//           data: resp.data,
//           err: null,
//         });
//       })
//       .catch((err) => {
//         setIssues({
//           loading: false,
//           data: [],
//           err: "Something went wrong, please try again later!",
//         });
//       });
//   }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

//   return (
//     <>
//     {issues.loading && <p>Loading...</p>}
//     {issues.err && <p>{issues.err}</p>}
//     {issues.data && issues.data.length > 0 ? (
//      issues.data.map((issue) => (
//     <div className="product-Card" key={issue.id}>
//       <div className="card-top"></div>
//       <div className="card-info">
//         <h3 className="title">{issue.title}</h3>          
//         <Link to={"/ShowDetails/" + issue.id}>
//           <button className="btnShow">Show Details</button>
//         </Link>
//       </div>
//     </div>
//   ))
// ) : (
//   <p>No issues found</p>
// )}
//     </>
//   );
// }

// export default ProductCard;

// import React , { useState, useEffect } from "react";
// import axios from "axios";
// import "../../style/productCard.css";
// //import { Helmet } from 'react-helmet';
// //import ShowDetails from "./Admin/Baby/ShowDetails.js"
// import { Link } from 'react-router-dom';
 
// //props read only
// function ProductCard () {
     
//   const [issue, setIssue] = useState({
//         loading: true,
//         data: null,
//         err: null,
//       });

//         useEffect(() => {
//     axios
//       .get("https://gradhub.hwnix.com/api/get_issues")
//       .then((resp) => {
//         setIssue({
//           loading: false,
//           data: resp.data[0], // Accessing the first item in the array
//           err: null,
//         });
//       })
//       .catch((err) => {
//         setIssue({
//           loading: false,
//           data: null,
//           err: "Something went wrong, please try again later!",
//         });
//       });
//   }, []);

//   return ( 
//     <div className="product-Card">
//       <div className="card-top">
//       </div> 
//        <div className="card-info">

//          <h3 className="title"><h3>{issue.title}</h3></h3>
//          <h4> {issue.description}</h4>
        
        
//         {/* <Link to={`/ShowDetails`}>Show Details</Link> */}
//         <Link to={"/ShowDetails/" + issue.id}>
//                     <button className="btnShow">Show Details</button>
//          </Link>

//        </div>
//     </div>
//     )
// };

// export default ProductCard;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../../style/productCard.css";
// import { Link } from 'react-router-dom';

// function ProductCard() {
//   const [issue, setIssue] = useState({
//     loading: true,
//     data: null,
//     err: null,
//   });

//   useEffect(() => {
//     axios
//       .get("https://gradhub.hwnix.com/api/get_issues")
//       .then((resp) => {
//         setIssue({
//           loading: false,
//           data: resp.data[0], // Accessing the first item in the array
//           err: null,
//         });
//       })
//       .catch((err) => {
//         setIssue({
//           loading: false,
//           data: null,
//           err: "Something went wrong, please try again later!",
//         });
//       });
//   }, []);

//   return (
//     <div>
//       {issue.loading && <p>Loading...</p>}
//       {issue.err && <p>{issue.err}</p>}
//       {issue.data && (
//         <div className="product-Card" key={issue.data.id}>
//           <div className="card-top"></div>
//           <div className="card-info">
//             <h3 className="title">{issue.data.title}</h3>
//             <Link to={"/ShowDetails/" + issue.data.id}>
//               <button className="btnShow">Show Details</button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductCard;







// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../../style/productCard.css";
// import { Link } from "react-router-dom";

// function ProductCard() {
//   const [issue, setIssue] = useState({
//     loading: true,
//     data: null,
//     err: null,
//   });

//   useEffect(() => {
//     axios
//       .get("https://gradhub.hwnix.com/api/get_issues")
//       .then((resp) => {
//         setIssue({
//           loading: false,
//           data: resp.data, // Assuming resp.data is an array
//           err: null,
//         });
//       })
//       .catch((err) => {
//         setIssue({
//           loading: false,
//           data: null,
//           err: "Something went wrong, please try again later!",
//         });
//       });
//   }, []);

//   return (
//     <div className="product-Card">
//       <div className="card-top"></div>
//       <div className="card-info">
//         {issue.loading && <p>Loading...</p>}
//         {issue.err && <p>{issue.err}</p>}
//         {issue.data && (
//           <>
//             {issue.data.map((item) => (
//               <div key={item.id}>
//                 <h3 className="title">{item.title}</h3>
//                 <h4>{item.description}</h4>
//                 <Link to={"/ShowDetails/" + item.id}>
//                   <button className="btnShow">Show Details</button>
//                 </Link>
//               </div>
//             ))}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;


{/* <div>
        {bodychanges.err && <p>{bodychanges.err}</p>}
        {bodychanges.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="div-container"> 
          <table  className="table-content">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Month</th>
                <th>Image</th>
                <th></th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{bodychanges.results.title}</td>
                <td>{bodychanges.results.description}</td>
                <td>{bodychanges.results.month}</td>
                <td>
                  {bodychanges.results.FullSrc ? (
                    <img
                      src={bodychanges.results.FullSrc}
                      alt="Baby Image"
                      style={{ maxWidth: '1000px', maxHeight: '100px' }}
                    />
                  ) : (
                    <span>No image available</span>
                  )}
                </td>
                <td>
                <Link to={"/UpdateBodyChange/" + bodychanges.results.id}>
                    <button className="btnUpdate">Update</button>
                  </Link>
                  </td>
                  <td>
                  <button
                    className="btnDelete"
                    onClick={(e) => {
                      deleteBodychange(bodychanges.results.id);
                    }}
                  >
                    Delete
                  </button>
                  
                  </td>
                
              </tr>
            </tbody>
          </table>
          </div>
        )}

      </div> */}

















   