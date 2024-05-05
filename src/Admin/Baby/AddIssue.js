import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import"../../style/addissue.css";

function AddIssue() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://gradhub.hwnix.com/api/add_issues", {
        name,
      })
      .then((res) => {
        console.log(res);
        navigate("/commonIssues");
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="Destination-a">
     
        <form className="fas" onSubmit={handleSubmit}>
          <br />
          <br />
          <h2  className="h2">Add Issue</h2>

          <div className="mb-2">
            <label htmlFor="from" className="ee">
              Name
            </label>
            <input
              className="form-controlDes"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

         
          <button type="submit" className="succ">
            <h3>Add</h3>
          </button>
        </form>
     
    </section>
  );
}

export default AddIssue;