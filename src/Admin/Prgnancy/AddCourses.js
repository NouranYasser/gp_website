import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../style/addcourses.css";

function AddCourses() {
  // const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [title_ar, setTitleAr] = useState('');
  const [description_ar, setDescriptionAr] = useState('');
  const [video_url, setvideo_url] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // formData.append('title', title);
    formData.append('description', description);
    // formData.append('title_ar', title_ar);
    formData.append('description_ar', description_ar);
    formData.append('video_url', video_url);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/add_course`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/Courses");
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  return (
    <>
    <div className="coursrCon">
      <div className='main-divCo'>
        <form className="form-Co" onSubmit={handleSubmit}>

          <label htmlFor="description" className='label-CO'>Description:</label><br />
          <textarea
            id="descriptionCO"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />

          <label htmlFor="description" className='label-CO'>Description In Arabic:</label><br />
          <textarea
            id="descriptionCO"
            value={description_ar}
            onChange={(e) => setDescriptionAr(e.target.value)}
          />
          <br />
         
          <label htmlFor="VideoUrl" className='label-CO'>Video Url:</label><br />
          <textarea
            id="VideoUrl"
            value={video_url}
            onChange={(e) => setvideo_url(e.target.value)}
          />
          <br />

          <br /><br />
          <button type="submit" className='b-ChangeCO'>Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      </div>
    </>
  );
}

export default AddCourses;