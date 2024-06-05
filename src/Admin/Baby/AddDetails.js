import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/updateBodychange.css";

function AddDetails() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [title_ar, setTitleAr] = useState('');
  const [description_ar, setDescriptionAr] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const [errorMessage3, setErrorMessage3] = useState('');
  const navigate = useNavigate();
  const { id } = useParams(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (title !== '') formData.append('title', title);
    if (description !== '') formData.append('description', description);
    if (title_ar !== '') formData.append('title_ar', title_ar);
    if (description_ar !== '') formData.append('description_ar', description_ar);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/add_issue/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/CommonIssues")
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
    <div className='body-uCH'>
    <div className='container-u-CH'>
      <form onSubmit={handleSubmit}>
      <div className='row-CH'>
      <div className=' clo-25-CH'>

        <label htmlFor="title" className='label-u-CH'>Title:</label></div>
        <div><input
          type="text"
          id="title"
          value={title}
          onChange={handleLanguage}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}</div>
         </div>
        <div className='row-CH'>
        <div className=' clo-25-CH'>
        <label htmlFor="description" className='label-u-CH'>Description:</label></div>
        <div>
        <textarea
          id="description-u-CH"
          value={description}
          onChange={handleDescriptionChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}</div>
        </div>

        <div className='row-CH'>
      <div className=' clo-25-CH'>

        <label htmlFor="title" className='label-u-CH'>Title In Arabic:</label></div>
        <div><input
          type="text"
          id="title"
          value={title_ar}
          onChange={handleTitleChangeA}
          />
          {errorMessage2 && <p style={{ color: 'red' }}>{errorMessage2}</p>}</div>
         </div>
        <div className='row-CH'>
        <div className=' clo-25-CH'>
        <label htmlFor="description" className='label-u-CH'>Description In Arabic:</label></div>
        <div>
        <textarea
          id="description-u-CH"
          value={description_ar}
          onChange={handleDescriptionChangeA}
            />
          {errorMessage3 && <p style={{ color: 'red' }}>{errorMessage3}</p>}</div>
        </div>
             
         <div class="row-CH">
        <button type="submit" className='b-u-CH'>Submit</button></div>
      </form>
      {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default AddDetails;