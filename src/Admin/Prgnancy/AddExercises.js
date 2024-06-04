import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../style/addexercises.css";

function AddExercises() {
  const [description, setDescription] = useState('');
  const [description_ar, setDescriptionAr] = useState('');
  const [video_url, setvideo_url] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('description', description);
    formData.append('description_ar', description_ar);
    formData.append('video_url', video_url);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/add_exercise`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/Exercises");
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  const handleDescriptionChange = async (e) => {
    const value = e.target.value;
  
    // Regular expression to detect Arabic characters
    const arabicRegex = /[\u0600-\u06FF]/;
  
    if (arabicRegex.test(value)) {
      setErrorMessage('Please write Description in English.');
    } else {
      setErrorMessage('');
      setDescription(value);
    }
  }
  
  const handleDescriptionChangeA = (e) => {
    const newValue3 = e.target.value;
  
    // Regular expression to detect English characters
    const englishRegex = /[A-Za-z]/;
  
    if (englishRegex.test(newValue3)) {
      setErrorMessage2('Please write Description in Arabic.');
    } else {
      setErrorMessage2('');
      setDescriptionAr(newValue3);
    }
  };
  return (
    <>
    <div className="exercisesCon">
      <div className='main-divCEX'>
        <form className="form-EX" onSubmit={handleSubmit}>
          

          <label htmlFor="description" className='label-CEX'>Description:</label><br />
          <textarea
            id="descriptionEX"
            value={description}
            onChange={handleDescriptionChange}
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <br />

          <label htmlFor="description" className='label-CEX'>Description In Arabic:</label><br />
          <textarea
            id="descriptionEX"
            value={description_ar}
            onChange={handleDescriptionChangeA}
            />
            {errorMessage2 && <p style={{ color: 'red' }}>{errorMessage2}</p>}
          <br />
         
          <label htmlFor="VideoUrl" className='label-CEX'>Video Url:</label><br />
          <textarea
            id="VideoUrl"
            value={video_url}
            onChange={(e) => setvideo_url(e.target.value)}
          />
          <br />

          <br /><br />
          <button type="submit" className='b-ChangeEX'>Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      </div>
    </>
  );
}

export default AddExercises;