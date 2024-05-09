import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../style/addissue.css";

function AddIssue() {
  const [name, setName] = useState("");
  const [name_ar, setNameAr] = useState("");
  const [title, setTitle] = useState("");
  const [title_ar, setTitleAr] = useState("");
  const [description, setDescription] = useState("");
  const [description_ar, setDescriptionAr] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://gradhub.hwnix.com/api/create_Fullissue", {
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
    <div className="Destination-a">
        <div className='main-divp'>
      <form className="form-p" onSubmit={handleSubmit}>

        <h2 className="h2">Add Issue</h2>


        <label htmlFor="from" className="label-pregnancy">
          Name
        </label>
        <input
          className="outbox"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />



        <label htmlFor="from" className="label-pregnancy">Name In Arabic</label>
        <input
          className="outbox"
          value={name_ar}
          onChange={(e) => setNameAr(e.target.value)}
        />



          <label htmlFor="from" className="label-pregnancy">
            Title
          </label>
          <input
            className="outbox"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        

       
          <label htmlFor="from" className="label-pregnancy">
            Title In Arabic
          </label>
          <input
            className="outbox"
            value={title_ar}
            onChange={(e) => setTitleAr(e.target.value)}
          />
       
       
          <label htmlFor="from" className="label-pregnancy">
            Description
          </label>
          <input
            className="outbox"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
       

      
          <label htmlFor="from" className="label-pregnancy">
            Description In Arabic
          </label>
          <input
            className="outbox"
            value={description_ar}
            onChange={(e) => setDescriptionAr(e.target.value)}
          />
       




        <button type="submit" className="b-pregnancy">
          <h3>Add</h3>
        </button>
      </form>
      </div>
    </div>
  );
}

export default AddIssue;