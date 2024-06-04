import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import"../../style/addBabyGrowth.css";



function AddBabyGrowth() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [month, setMonth] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [title_ar, setTitle_ar] = useState('');
  const [description_ar, setDescription_ar] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
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
      const response = await axios.post(`https://gradhub.hwnix.com/api/add_DESC/2`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/Babygrowth");
    } catch (error) {
      setMessage('There is something wrong');
    }
  };
  
  const handleLanguage = async (e) => {
  const newValue = e.target.value;

  // Regular expression to detect Arabic characters
  const arabicRegex = /[\u0600-\u06FF]/;

  if (arabicRegex.test(newValue)) {
    setErrorMessage('Please write data in English.');
  } else {
    setErrorMessage('');
  }

  setTitle(newValue);
}

  return (
    <>
      <div className="growthcon"> 
      <div className='main-divG'>
        <form className="form-G" onSubmit={handleSubmit}>
          
        <label htmlFor="title" className='label-G'>Title:</label>
      <input
        className='outbox'
        type="text"
        id="title"
        value={title}
        onChange={handleLanguage}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <label htmlFor="description"  className='label-G'>Description:</label><br></br>

          <textarea

            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br></br>
          <label htmlFor="month"  className='label-G'>Month:</label><br></br>
        <select>
          <input className='outbox'
            type="text"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            />     
  
          <option value="">Select Month</option>
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
            
    
          <label htmlFor="image"  className='label-G'>Image:</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <br></br> <br></br>

        <label htmlFor="title"  className='label-G'> Title In Arabic:</label>
          <input className='outbox'
            type="text"
            id="title"
            value={title_ar}
            onChange={(e) => setTitle_ar(e.target.value)}
          />

          <label htmlFor="description"  className='label-G'>Description In Arabic:</label><br></br>

          <textarea

            id="description"
            value={description_ar}
            onChange={(e) => setDescription_ar(e.target.value)}
          />

          <br></br>
          <br></br>
          <button type="submit" className='b-Growth'>Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      </div>
    </>
  );
}

export default AddBabyGrowth;