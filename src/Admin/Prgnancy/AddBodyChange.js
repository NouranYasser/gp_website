import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../style/addBodyChange.css";

function AddBodyChange() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [month, setMonth] = useState('');
  const [image, setImage] = useState(null);
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
    formData.append('image', image);
    formData.append('title_ar', title_ar);
    formData.append('description_ar', description_ar);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/add_DESC/1`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/Bodychange");
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
      <div className="changecon">
        <div className='main-divCH'>
          <form className="form-CH" onSubmit={handleSubmit}>
            <label htmlFor="title" className='label-CH'>Title:</label>
            <input
              className='outboxCH'
              type="text"
              id="title"
              value={title}
              onChange={handleLanguage}
              required
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <label htmlFor="descriptionch" className='label-CH'>Description:</label><br />
            <textarea
              id="descriptionch"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <br></br>
            <label htmlFor="month" className='label-CH'>Month:</label><br />
            <select
              className='Select-ch'
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
            >
              <option value="" disabled>Select Month</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option> 
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>

            <label htmlFor="image" className='label-CH'>Image:</label><br/>
            <input
              className="img-ch"
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
            <br />
            <label htmlFor="title_ar" className='label-CH'>Title In Arabic:</label><br />
            <input
              className='outboxCH'
              type="text"
              id="title_ar"
              value={title_ar}
              onChange={handleTitleChangeA}
              required
            />
            {errorMessage2 && <p style={{ color: 'red' }}>{errorMessage2}</p>}
            <label htmlFor="description_ar" className='label-CH'>Description In Arabic:</label><br />
            <textarea
              id="description_ar"
              value={description_ar}
              onChange={handleDescriptionChangeA}
              required
            />
            {errorMessage3 && <p style={{ color: 'red' }}>{errorMessage3}</p>}
            <button type="submit" className='b-Change'>Submit</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
}

export default AddBodyChange;