import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddArtificalFeeding() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [month, setMonth] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('month', month);
    

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/add_DESC/10/en`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/ArtificalFeeding");
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  return (
    <div className='main-divp'>
      <form className="form-p" onSubmit={handleSubmit}>
        <label htmlFor="title" className='label-pregnancy'>Title:</label>
        <input
          className='outbox'
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description" className='label-pregnancy'>Description:</label><br />
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label htmlFor="month" className='label-pregnancy'>Month:</label><br />
        <select
          id="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="">Select Month</option>
          <option value="1">1</option>
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="18">18</option>
       
         
        </select>
        <br /><br />
        <button type="submit" className='b-pregnancy'>Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddArtificalFeeding;