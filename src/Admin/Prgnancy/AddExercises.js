import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../style/addBodyChange.css";

function AddExercises() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [title_ar, setTitleAr] = useState('');
  const [description_ar, setDescriptionAr] = useState('');
  const [video_url, setvideo_url] = useState('');
  const [message, setMessage] = useState('');
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

  return (
    <>
      <div className='main-divCH'>
        <form className="form-p" onSubmit={handleSubmit}>
          

          <label htmlFor="description" className='label-CH'>Description:</label><br />
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />

          <label htmlFor="description" className='label-CH'>Description In Arabic:</label><br />
          <textarea
            id="description"
            value={description_ar}
            onChange={(e) => setDescriptionAr(e.target.value)}
          />
          <br />
         
          <label htmlFor="VideoUrl" className='label-CH'>Video Url:</label><br />
          <textarea
            id="VideoUrl"
            value={video_url}
            onChange={(e) => setvideo_url(e.target.value)}
          />
          <br />

          <br /><br />
          <button type="submit" className='b-Change'>Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}

export default AddExercises;