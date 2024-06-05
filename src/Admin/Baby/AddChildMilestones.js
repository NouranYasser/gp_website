
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import"../../style/AddAll.css";


function AddChildMilestones() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [month, setMonth] = useState('');
  const [title_ar, setTitleAr] = useState('');
  const [description_ar, setDescriptionAr] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const [errorMessage3, setErrorMessage3] = useState('');
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
      const response = await axios.post(`https://gradhub.hwnix.com/api/add_DESC/8`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/ChildMilestones");
    } catch (error) {
      setMessage('There is something wrong');
    }
  };
  
  const handleLanguage = async (e) => {
    const newValue = e.target.value;
  
    // Regular expression to detect Arabic characters
    const arabicRegex = /[\u0600-\u06FF]/;
  
    if (arabicRegex.test(newValue)) {
      setErrorMessage('Please write title in English.');
    } else {
      setErrorMessage('');
      setTitle(newValue);
    }
  
    
  }
  
  
  const handleDescriptionChange = async (e) => {
    const value = e.target.value;
  
    // Regular expression to detect Arabic characters
    const arabicRegex = /[\u0600-\u06FF]/;
  
    if (arabicRegex.test(value)) {
      setError('Please write Description in English.');
    } else {
      setError('');
      setDescription(value);
    }
  
    
  }
  
  const handleTitleChangeA = (e) => {
    const newValue2 = e.target.value;
  
    // Regular expression to detect English characters
    const englishRegex = /[A-Za-z]/;
  
    if (englishRegex.test(newValue2)) {
      setErrorMessage2('Please write title in Arabic.');
    } else {
      setErrorMessage2('');
      setTitleAr(newValue2);
    }
  };
  
  const handleDescriptionChangeA = (e) => {
    const newValue3 = e.target.value;
  
    // Regular expression to detect English characters
    const englishRegex = /[A-Za-z]/;
  
    if (englishRegex.test(newValue3)) {
      setErrorMessage3('Please write Description in Arabic.');
    } else {
      setErrorMessage3('');
      setDescriptionAr(newValue3);
    }
  };
  
  return (
    <>
    <div className="pfott">
      <div className="d">
   
      <div className='main-divpp'>
        <form className="form-All" onSubmit={handleSubmit}>
          <label htmlFor="title" className='label-pregnancy'>Title:</label>
          <input className='outbox'
            type="text"
            id="title"
            value={title}
            onChange={handleLanguage}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <label htmlFor="description" className='label-pregnancy'>Description:</label><br />
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
          <br />
          <label htmlFor="month" className='label-pregnancy'>Month:</label><br />
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
            onChange={handleTitleChangeA}
      />
      {errorMessage2 && <p style={{ color: 'red' }}>{errorMessage2}</p>}
          
          <label htmlFor="description" className='label-pregnancy'>Description In Arabic:</label><br />
          <textarea
            id="description"
            value={description_ar}
            onChange={handleDescriptionChangeA}
            />
          {errorMessage3 && <p style={{ color: 'red' }}>{errorMessage3}</p>}
          
          <button type="submit" className='b-All'>Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      </div>
      </div>
     
    </>
  );
}

export default AddChildMilestones;