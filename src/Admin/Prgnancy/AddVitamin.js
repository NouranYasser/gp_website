import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import"../../style/addvitamins.css";


function AddVitamin() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [title_ar, setTitleAr] = useState('');
  const [description_ar, setDescriptionAr] = useState('');
  const [image, setImage] = useState(null);
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
    formData.append('title_ar', title_ar);
    formData.append('description_ar', description_ar);
    formData.append('image', image);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/add_DESC/4`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/Vitamins");
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  const handleLanguage = (e) => {
    const newValue = e.target.value;

    // Regular expression to detect Arabic characters
    const arabicRegex = /[\u0600-\u06FF]/;

    if (arabicRegex.test(newValue)) {
      setErrorMessage('Please write title in English.');
    } else {
      setErrorMessage('');
      setTitle(newValue);
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;

    // Regular expression to detect Arabic characters
    const arabicRegex = /[\u0600-\u06FF]/;

    if (arabicRegex.test(value)) {
      setError('Please write Description in English.');
    } else {
      setError('');
      setDescription(value);
    }
  };

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
      <div className="vitCon">
        <div className='main-divGV'>
          <form className="form-GV" onSubmit={handleSubmit}>
            <label htmlFor="title" className='label-GV'>Title:</label>
            <input className='outbox-V'
              type="text"
              id="title"
              value={title}
              onChange={handleLanguage}
              required
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <label htmlFor="description" className='label-GV'>Description:</label><br></br>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <br></br>

            <label htmlFor="title_ar" className='label-GV'>Title In Arabic:</label>
            <input className='outbox-V'
              type="text"
              id="title_ar"
              value={title_ar}
              onChange={handleTitleChangeA}
              required
            />
            {errorMessage2 && <p style={{ color: 'red' }}>{errorMessage2}</p>}

            <label htmlFor="description_ar" className='label-GV'>Description In Arabic:</label><br></br>
            <textarea
              id="description_ar"
              value={description_ar}
              onChange={handleDescriptionChangeA}
              required
            />
            {errorMessage3 && <p style={{ color: 'red' }}>{errorMessage3}</p>}
            <br></br>

            <label htmlFor="image" className='label-GV'>Image:</label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
            <br></br><br></br>
            <button type="submit" className='b-GrowthV'>Submit</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
}

export default AddVitamin;