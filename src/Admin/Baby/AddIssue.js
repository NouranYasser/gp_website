// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function AddIssue() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [issueId, setIssueId] = useState("");
//   const navigate = useNavigate();

//   function handleSubmit(event) {
//     event.preventDefault();
//     axios
//       .post("https://gradhub.hwnix.com/api/add_issue", {
//         title,
//         description,
//         issueId,
//       })
//       .then((res) => {
//         console.log(res);
//         navigate("/commonIssues");
//       })
//       .catch((err) => console.log(err));
//   }

//   return (
//     <section className="Destination">
//       <div className="divv">
//         <form onSubmit={handleSubmit}>
//           <br></br>
//           <br></br>
//           <h2 className="">Add Issue</h2>

//           <div className="mb-2">
//             <label htmlFor="from" className="ee">
//               Title{" "}
//             </label>
//             <input
//               placeholder="Enter from"
//               className="form-controlDes"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="from" className="ee">
//               Description{" "}
//             </label>
//             <input
//               placeholder="Enter from"
//               className="form-controlDes"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>

//           <div className="mb-2">
//             <label htmlFor="from" className="ee">
//               Issue Number{" "}
//             </label>
//             <input list="browsers" />
//             <datalist id="browsers">
//               <option value="1" />
//               <option value="2" />
//               <option value="3" />
//               <option value="4" />
//               <option value="5" />
//             </datalist>
//             {/* <input
//         placeholder="Enter from"
//         className="form-controlDes"
//         value={issueId}
//         onChange={(e) => setIssueId(e.target.value)}
//       /> */}
//           </div>

//           <br></br>
//           <button type="submit" className="succ">
//             <h3>Add</h3>
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default AddIssue;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddIssue() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [issueId, setIssueId] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://gradhub.hwnix.com/api/add_issue", {
        title,
        description,
        issueId,
      })
      .then((res) => {
        console.log(res);
        navigate("/commonIssues");
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="Destination">
      <div className="divv">
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <h2>Add Issue</h2>

          <div className="mb-2">
            <label htmlFor="from" className="ee">
              Title
            </label>
            <input
              placeholder="Enter from"
              className="form-controlDes"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="from" className="ee">
              Description
            </label>
            <input
              placeholder="Enter from"
              className="form-controlDes"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="issueNumber" className="ee">
              Issue Number
            </label>
            <select
              id="issueNumber"
              className="form-controlDes"
              value={issueId}
              onChange={(e) => setIssueId(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <br />
          <button type="submit" className="succ">
            <h3>Add</h3>
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddIssue;