import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/babygrowthMonth.css";
import { useParams } from "react-router-dom";
const ShowDetails = () => {
  const [details, setDetails] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });
  const { id } = useParams();
  useEffect(() => {
    setDetails({ ...details, loading: true });
    axios
      .get(`https://gradhub.hwnix.com/api/get_issue/${id}`)
      .then((resp) => {
        setDetails((prevDetails) => ({
          ...prevDetails,
          results: resp.data,
          loading: false,
          err: null,
        }));
      })
      .catch((err) => {
        setDetails((prevDetails) => ({
          ...prevDetails,
          loading: false,
          err: "Something went wrong, please try again later!",
        }));
      });
  }, [details.reload]);



  const deleteBabygrowth = (id) => {
    axios
      .delete(`http://localhost:8000/api/delete/${id}`)
      .then((resp) => {
        setDetails({ ...details, reload: details.reload + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        {details.err && <p>{details.err}</p>}
        {details.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="div-container">
            <table className="table-content">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {details.results.map((result) => (
                  <tr key={result.id}>
                    <td>{result.title}</td>
                    <td>{result.description}</td>                
                     <td>
                      <Link to={"/Update/" + result.id}>
                        <button className="btnUpdate">Update</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btnDelete"
                        onClick={() => {
                          deleteBabygrowth(result.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowDetails;

// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import "../../style/ShowDetails.css";
// import { Link } from 'react-router-dom';

// const ShowDetails = () => {
//   const [details, setDetails] = useState({
//     loading: true,
//     results: [],
//     err: null,
//     reload: 0,
//   });

//   useEffect(() => {
//     setDetails({ ...details, loading: true });
//     axios
//       .get(`https://gradhub.hwnix.com/api/get_issue/${id}`)
//       .then((resp) => {
//         setDetails({
//           ...details,
//           results: resp.data,
//           loading: false,
//           err: null,
//         });
//       })
//       .catch((err) => {
//         setDetails({
//           ...details,
//           loading: false,
//           err: "Something went wrong, please try again later!",
//         });
//       });
//   }, [id, details.reload]);

//   const deleteCourse = (id) => {
//     // Implement your delete logic here
//   };

//   return (
//     <>
//       <div>
//         {details.err && <p>{details.err}</p>}
//         {details.loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div className="div-container">
//             <table className="table-content">
//               <thead>
//                 <tr>
//                   <th>Title</th>
//                   <th>Description</th>
//                   <th></th>
//                   <th></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {details.results.map((result) => (
//                   <tr key={result.id}>
//                     <td>{result.title}</td>
//                     <td>{result.description}</td>
//                     <td>
//                       <Link to={`/Update/${result.id}`}>
//                         <button className="btnUpdate">Update</button>
//                       </Link>
//                     </td>
//                     <td>
//                       <button
//                         className="btnDelete"
//                         onClick={() => deleteCourse(result.id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default ShowDetails;





// import React, { useState , useEffect} from 'react';
// import "../../style/ShowDetails.css";
// import axios from "axios";

// const ShowDetails = () => {
//     const [details, setDetails] = useState({
//       loading: true,
//       results: [],
//       err: null,
//       reload: 0,
//     });
  
//     useEffect(() => {
//         setDetails({ ...details, loading: true });
//       axios
//         .get(`https://gradhub.hwnix.com/api/get_issue/${issue_id}`)
//         .then((resp) => {
//             setDetails({
//             ...details,
//             results: resp.data,
//             loading: false,
//             err: null,
//           });
//         })
//         .catch((err) => {
//             setDetails({
//             ...details,
//             loading: false,
//             err: "Something went wrong, please try again later!",
//           });
//         });
//     }, [details.reload]);
  
//     // const deleteCourse = (id) => {
//     //   axios
//     //     .delete(`https://gradhub.hwnix.com/api/delete/${id}`)
//     //     .then((resp) => {
//     //         setDetails({ ...details, reload: details.reload + 1 });
//     //     })
//     //     .catch((err) => {
//     //       console.log(err);
//     //     });
//     // };
  
//       return (
//     <>
//       <div  >
//         {details.err && <p>{details.err}</p>}
//         {details.loading ? (
//           <p>Loading...</p>
//         ) : (
//          <div className="div-container"> 
//          <table className="table-content">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th></th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{details.results.title}</td>
//                 <td>{details.results.description}</td>
//                 {/* <td>
                  
//                   <Link to={"/Update/" + details.results.id}>
//                     <button className="btnUpdate">Update</button>
//                   </Link>
//                   </td>
//                   <td>
//                   <button
//                     className="btnDelete"
//                     onClick={(e) => {
//                       deleteBabygrowth(tips.results.id);
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </td> */}
//               </tr>
//             </tbody>
//           </table></div>
//         )}
//       </div>
//     </>
//   );

// //   return (
// //     <>

// // <div>
// //         {details.err && <p>{details.err}</p>}
// //         {details.loading ? (
// //           <p>Loading...</p>
// //         ) : (
// //           <div className="div-container">
// //             <table className="table-content">
// //               <thead>
// //                 <tr>
// //                   <th>Title</th>
// //                   <th>Description</th>
                 
// //                   <th></th>
// //                   <th></th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {details.results.map((result) => (
// //                   <tr key={result.id}>
// //                     <td>{result.title}</td>
// //                     <td>{result.description}</td>
                   
// //                     {/* <td>
// //                       <Link to={"/Update/" + result.id}>
// //                         <button className="btnUpdate">Update</button>
// //                       </Link>
// //                     </td>
// //                     <td>
// //                       <button
// //                         className="btnDelete"
// //                         onClick={() => {
// //                           deleteBabygrowth(result.id);
// //                         }}
// //                       >
// //                         Delete
// //                       </button>
// //                     </td> */}
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         )}
// //       </div>
      
// //      {/* <div key={details.id} className="product-Card">
// //     <div className="card-top"></div>
// //     <div className="card-info">
// //       <h3 className="title">{details.title}</h3>
// //       <h4 className="description">{details.description}</h4>
// //     </div>
// //   </div> */}
         
// //       {/* <div className='main-form'>
// //         <form className="form-pppp">

// //           <label htmlFor="title"  className='label-Show'>Title:</label>
// //           <input className='outbox'
// //             type="text"
// //             id="title"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //           />


// //           <label htmlFor="description"  className='label-Show'>Description:</label><br></br>

// //           <textarea

// //             id="description"
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //           />
       
// //         </form>
    
// //       </div>
// //    */}
      
// //     </>
// //   );

// }
// export default ShowDetails;
