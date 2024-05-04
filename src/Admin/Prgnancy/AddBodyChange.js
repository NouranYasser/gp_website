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

  return (
    <>
      <div className='main-divCH'>
        <form className="form-p" onSubmit={handleSubmit}>
          <label htmlFor="title" className='label-CH'>Title:</label>
          <input
            className='outboxCH'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="descriptionch" className='label-CH'>Description:</label><br />
          <textarea
            id="descriptionch"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
      <br></br>
          <label htmlFor="month" className='label-CH'>Month:</label><br />
          <select
            className='Select-ch'
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
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
          
          <label htmlFor="image" className='label-CH'>Image:</label><br/>
          <input
          className="img-ch"
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <br />
          <label htmlFor="title" className='label-CH'>Title In Arabic:</label><br />
          <input
            className='outboxCH'
            type="text"
            id="title"
            value={title_ar}
            onChange={(e) => setTitleAr(e.target.value)}
          />
          
          <label htmlFor="descriptionch" className='label-CH'>Description In Arabic:</label><br />
          <textarea
            id="descriptionch"
            value={description_ar}
            onChange={(e) => setDescriptionAr(e.target.value)}
          />
          
          <button type="submit" className='b-Change'>Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}

export default AddBodyChange;