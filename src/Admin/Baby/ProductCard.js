import React, { useState, useEffect } from "react";
import "../../style/productCard.css";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdDelete } from "react-icons/md";
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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
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


// import React, { useState, useEffect } from "react";
// import "../../style/productCard.css";
// import axios from "axios";
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// function ProductCard() {
//   const [issues, setIssues] = useState([]);

//   useEffect(() => {
//     fetchIssues();
//   }, []);

//   const fetchIssues = () => {
//     axios
//       .get("https://gradhub.hwnix.com/api/get_issues/en")
//       .then((res) => {
//         setIssues(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching issues:", err);
//       });
//   };

//   const deleteIssue = (id) => {
//     axios
//       .delete(`https://gradhub.hwnix.com/api/delete_issues/${id}`)
//       .then((resp) => {
//         fetchIssues(); // Refresh the list after deletion
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <>

//     <div>
      
//       {issues.map((item) => (
//         <div key={item.id} className="product-Card">
//           <div className="card-top"></div>
//           <div className="card-info">
//             <h3 className="title">{item.name}</h3>
//             <Link to={"/ShowDetails/" + item.id}>
//               <button className="btnShow">Show Details</button>
//             </Link>
//           </div>
        
//         </div>
        
//       ))}
//     </div>
//     </>
//   );
// }

// export default ProductCard;