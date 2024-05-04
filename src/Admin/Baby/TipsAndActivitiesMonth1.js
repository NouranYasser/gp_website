import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/babygrowthMonth.css";

const TipsAndActivitiesMonth1 = () => {
  const [tips, setTips] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setTips({ ...tips, loading: true });
    axios
      .get(`https://gradhub.hwnix.com/api/get_tip/1/en`)
      .then((resp) => {
        setTips({
          ...tips,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setTips({
          ...tips,
          loading: false,
          err: "Something went wrong, please try again later!",
        });
      });
  }, [tips.reload]);

  const deleteBabygrowth = (id) => {
    axios
      .delete(`https://gradhub.hwnix.com/api/delete_desc/${id}`)
      .then((resp) => {
        setTips({ ...tips, reload: tips.reload + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bmo">
        {tips.err && <p>{tips.err}</p>}
        {tips.loading ? (
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
                {tips.results.map((result) => (
                  <tr key={result.id}>
                    <td>{result.title}</td>
                    <td>{result.description}</td>
                    <td>
                      <Link to={"/UpdateTipsAndActivities/" + result.id}>
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
            <Link to={"/TipsAndActivitiesMonth1Ar"}>
                    <button className="btnArabic">Arabic</button>
        </Link>
          
          </div>
        )}
      </div>
    </>
  );
};

export default TipsAndActivitiesMonth1;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "../../style/babygrowthMonth.css";
// const TipsAndActivitiesMonth1 = () => {
//   const [tips, setTips] = useState({
//     loading: true,
//     results: [],
//     err: null,
//     reload: 0,
//   });

//   useEffect(() => {
//     setTips({ ...tips, loading: true });
//     axios
//       .get(`https://gradhub.hwnix.com/api/get_tips/1`)
//       .then((resp) => {
//         setTips({
//           ...tips,
//           results: resp.data,
//           loading: false,
//           err: null,
//         });
//       })
//       .catch((err) => {
//         setTips({
//           ...tips,
//           loading: false,
//           err: "Something went wrong, please try again later!",
//         });
//       });
//   }, [tips.reload]);

//   const deleteBabygrowth = (id) => {
//     axios
//       .delete(`http://localhost:8000/api/delete/${id}`)
//       .then((resp) => {
//         setTips({ ...tips, reload: tips.reload + 1 });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };


//   return (
//     <>
//       <div  >
//         {tips.err && <p>{tips.err}</p>}
//         {tips.loading ? (
//           <p>Loading...</p>
//         ) : (
//          <div className="div-container"> 
//          <table className="table-content">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Month</th>
//                 <th>Image</th>
//                 <th></th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{tips.results.title}</td>
//                 <td>{tips.results.description}</td>
//                 <td>{tips.results.month}</td>
//                 <td>
//                   {tips.results.FullSrc ? (
//                     <img
//                       src={tips.results.FullSrc}
//                       alt="Baby Image"
//                       style={{ maxWidth: '80%', maxHeight: '80%' }}
//                     />
//                   ) : (
//                     <span>No image available</span>
//                   )}
//                 </td>
//                 <td>
                  
//                   <Link to={"/Update/" + tips.results.id}>
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
//                 </td>
//               </tr>
//             </tbody>
//           </table></div>
//         )}
//       </div>
//     </>
//   );
// };

// export default TipsAndActivitiesMonth1;