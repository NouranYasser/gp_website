import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../style/addBabyGrowth.css";

function AddBabyGrowth() {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [month, setMonth] = useState('');
const [image, setImage] = useState(null);
const [message, setMessage] = useState('');
const [title_ar, setTitle_ar] = useState('');
const [description_ar, setDescription_ar] = useState('');
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

const handleLanguage = (e) => {
const newValue = e.target.value;
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
const englishRegex = /[A-Za-z]/;

if (englishRegex.test(newValue2)) {
  setErrorMessage2('Please write title in Arabic.');
} else {
  setErrorMessage2('');
  setTitle_ar(newValue2);
}
};

const handleDescriptionChangeA = (e) => {
const newValue3 = e.target.value;
const englishRegex = /[A-Za-z]/;

if (englishRegex.test(newValue3)) {
  setErrorMessage3('Please write Description in Arabic.');
} else {
  setErrorMessage3('');
  setDescription_ar(newValue3);
}
};

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
          required
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <label htmlFor="description" className='label-G'>Description:</label><br />
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <br></br>

        <label htmlFor="month" className='label-G'>Month:</label><br />
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

        <label htmlFor="image" className='label-G'>Image:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
          required
        /><br /><br />

        <label htmlFor="title_ar" className='label-G'>Title In Arabic:</label>
        <input
          className='outbox'
          type="text"
          id="title_ar"
          value={title_ar}
          onChange={handleTitleChangeA}
          required
        />
        {errorMessage2 && <p style={{ color: 'red' }}>{errorMessage2}</p>}

        <label htmlFor="description_ar" className='label-G'>Description In Arabic:</label><br />
        <textarea
          id="description_ar"
          value={description_ar}
          onChange={handleDescriptionChangeA}
          required
        />
        {errorMessage3 && <p style={{ color: 'red' }}>{errorMessage3}</p>}
        <br /><br />
        <button type="submit" className='b-Growth'>Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  </div>
</>
);
}

export default AddBabyGrowth;