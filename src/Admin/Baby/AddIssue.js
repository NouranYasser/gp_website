 import React, { useState } from "react";
 import axios from "axios";
 import { useNavigate } from "react-router-dom";
 import"../../style/addissue.css";


function AddIssue() {
  
  const [name, setName] = useState(''); 
  const [name_ar, setNameAr] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('name_ar', name_ar);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/add_issues`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/CommonIssues");
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  return (
    <div className='main-divp'>
      <form className="form-p" onSubmit={handleSubmit}>
        <label htmlFor="title" className='label-pregnancy'>Name:</label>
        <input
          className='outbox'
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />      
        <label htmlFor="title" className='CH'> Name In Arabic:</label>
          <input
            className='outbox'
            type="text"
            id="name"
            value={name_ar}
            onChange={(e) => setNameAr(e.target.value)}
          />
     
          <br />
          <br /><br />
      
        <button type="submit" className='b-pregnancy'>Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddIssue;
 