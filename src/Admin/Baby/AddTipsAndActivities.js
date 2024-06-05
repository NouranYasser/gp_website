import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import"../../style/addTips.css";


function AddTipsAndActivities() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [month, setMonth] = useState('');
  const [title_ar, setTitleAr] = useState('');
  const [description_ar, setDescriptionAr] = useState('');

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('month', month);
    formData.append('title_ar', title_ar);
    formData.append('description_ar', description_ar);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/add_DESC/7`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/TipsAndActivities");
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  return (
    <>
    <div className="pfott">
      <div className="d">
      <div className='main-divpp'>
        <form className="form-ppp" onSubmit={handleSubmit}>
          <label htmlFor="title" className='label-pregnancy'>Title:</label>
          <input className='outbox'
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
          <div className="mb-2">
            <label htmlFor="month" className='label-pregnancy'>
              Month
            </label><br></br>
            <select
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="">Select Month</option>
              <option value="1">1-3</option>
              <option value="3">3-6</option>
              <option value="6">6-9</option>
              <option value="9">9-12</option>
              <option value="12">12-15</option>
              <option value="15">15-18</option>
              <option value="18">18-21</option>
              <option value="21">21-24</option>

            </select>
            <br></br> 
          <label htmlFor="title" className='label-pregnancy'> Title In Arabic:</label>
          <input
            className='outbox'
            type="text"
            id="title"
            value={title_ar}
            onChange={(e) => setTitleAr(e.target.value)}
          />
          <br></br>
          <label htmlFor="description" className='label-pregnancy'>Description In Arabic:</label><br />
          <textarea
            id="description"
            value={description_ar}
            onChange={(e) => setDescriptionAr(e.target.value)}
          />
          
          </div>
          <br />
          <button type="submit" className='b-tips'>Submit</button>
        </form>
        {message && <p>{message}</p>}
        </div>
      </div>
      </div>
    </>
  );
}

export default AddTipsAndActivities;