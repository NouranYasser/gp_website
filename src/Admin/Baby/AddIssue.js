import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import"../../style/addissue.css";

function AddIssue() {
  const [name, setName] = useState("");
  const [name_ar, setNameAr] = useState("");
  const [title, setTitle] = useState("");
  const [title_ar, setTitleAr]= useState("");
  const [description, setDescription] = useState("");
  const [description_ar, setDescriptionAr] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://gradhub.hwnix.com/api/create_issue", {
        name,
        name_ar,
        title,
        title_ar,
        description,
        description_ar
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

          <div className="mb-2">
            <label htmlFor="from" className="ee">
              Name In Arabic
            </label>
            <input
              className="form-controlDes"
              value={name_ar}
              onChange={(e) => setNameAr(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="from" className="ee">
              Title
            </label>
            <input
              className="form-controlDes"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="from" className="ee">
              Title In Arabic
            </label>
            <input
              className="form-controlDes"
              value={title_ar}
              onChange={(e) => setTitleAr(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="from" className="ee">
              Description
            </label>
            <input
              className="form-controlDes"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="from" className="ee">
              Description In Arabic
            </label>
            <input
              className="form-controlDes"
              value={description_ar}
              onChange={(e) => setDescriptionAr(e.target.value)}
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