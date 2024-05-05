import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import {DefaultPlayer as video } from 'react-html5video';
import "../../style/Exercises.css";

const Exercises = () => {
  const [exercises, setExercises] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setExercises({ ...exercises, loading: true });
    axios
      .get("https://gradhub.hwnix.com/api/get_exercises/en")
      .then((resp) => {
        setExercises({
          ...exercises,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setExercises({
          ...exercises,
          loading: false,
          err: "Something went wrong, please try again later!",
        });
      });
  }, [exercises.reload]);

  const deleteExercise = (id) => {
    axios
      .delete("https://gradhub.hwnix.com/api/delete/${id}")
      .then((resp) => {
        setExercises({ ...exercises, reload: exercises.reload + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="exf">
      <div className="b_conV">
        <Link to="/AddExercises">
          <button className="btn-addV"> Add  Exercise</button>
         </Link>
         <Link to={"/ExercisesAr"}>
                    <button className="btn-addV">Arabic</button>
                  </Link>
                  </div>
        {exercises.err && <p>{exercises.err}</p>}
        {exercises.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="div-E-container">
          <table className="table-content-E">
            <thead>
              <tr>
                
                <th>Description</th>
                <th>Video</th>
                <th></th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>
              {exercises.results.map((exercise) => (
                <tr key={exercise.id}>
                  
                  <td>{exercise.description}</td>
                  <td>
                    {exercise.video ? (
                      <iframe
                      src={exercise.video}
                      // width="640"
                      // height="360"
                      frameborder="0"
                      // allowfullscreen
                    ></iframe>
                    ) : (
                      <span>No video available</span>
                    )}
                  </td>
                 
                  <td>
                    <Link to={"/UpdateExercise/" + exercise.id}>
                      <button className="btnUpdate-E">Update</button>
                    </Link>             
                  </td>
                  <td>
                    <button
                      className="btnDelete-E"
                      onClick={() => deleteExercise(exercise.id)}
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
           <div>
      </div>
      </div>
    </>
  );
};
export default Exercises;



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// // import {DefaultPlayer as video } from 'react-html5video';
// import "../../style/Exercises.css";

// const Exercises = () => {
//   const [exercises, setExercises] = useState({
//     loading: true,
//     results: [],
//     err: null,
//     reload: 0,
//   });

//   useEffect(() => {
//     setExercises({ ...exercises, loading: true });
//     axios
//       .get("https://gradhub.hwnix.com/api/get_exercises/en")
//       .then((resp) => {
//         setExercises({
//           ...exercises,
//           results: resp.data,
//           loading: false,
//           err: null,
//         });
//       })
//       .catch((err) => {
//         setExercises({
//           ...exercises,
//           loading: false,
//           err: "Something went wrong, please try again later!",
//         });
//       });
//   }, [exercises.reload]);

//   const deleteExercise = (id) => {
//     axios
//       .delete(`https://gradhub.hwnix.com/api/delete/${id}`)
//       .then((resp) => {
//         setExercises({ ...exercises, reload: exercises.reload + 1 });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <>
//       <div className="exf">
//       <div className="b_conV">
//         <Link to="/AddExercises">
//           <button className="btn-addV"> Add  Exercise</button>
//          </Link>
//          <Link to={"/ExercisesAr"}>
//                     <button className="btn-addV">Arabic</button>
//                   </Link>
//                   </div>
//         {exercises.err && <p>{exercises.err}</p>}
//         {exercises.loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div className="div-E-container">
//           <table className="table-content-E">
//             <thead>
//               <tr>
                
//                 <th>Description</th>
//                 <th>Video</th>
//                 <th></th>
//                 <th></th>
                
//               </tr>
//             </thead>
//             <tbody>
//               {exercises.results.map((exercise) => (
//                 <tr key={exercise.id}>
                  
//                   <td>{exercise.description}</td>
//                   <td>
//                     {exercise.video ? (
//                       <iframe
//                       src={exercise.video}
//                       // width="640"
//                       // height="360"
//                       frameborder="0"
//                       // allowfullscreen
//                     ></iframe>
//                     ) : (
//                       <span>No video available</span>
//                     )}
//                   </td>
                 
//                   <td>
//                     <Link to={"/UpdateExercise/" + exercise.id}>
//                       <button className="btnUpdate-E">Update</button>
//                     </Link>             
//                   </td>
//                   <td>
//                     <button
//                       className="btnDelete-E"
//                       onClick={() => deleteExercise(exercise.id)}
//                     >
//                       Delete
//                     </button>
//                     </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
         
//           </div>
//         )}
//            <div>
//         {/* <iframe
//           src={babygrowth.fullSrc}
//           width="640"
//           height="360"
//           frameborder="0"
//           allowfullscreen
//         ></iframe> */}
//       </div>
//       </div>
//     </>
//   );
// };
// export default Exercises;
