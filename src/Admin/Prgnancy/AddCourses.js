import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../style/addBodyChange.css";

function AddCourses() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [Video, setVideo] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('Video', Video);

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
          <label htmlFor="title" className='CH'>Title:</label>
          <input
            className='outbox'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description" className='label-CH'>Description:</label><br />
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
         
          <label htmlFor="Video" className='label-CH'>Video:</label><br />
          <textarea
            id="Video"
            value={Video}
            onChange={(e) => setVideo(e.target.value)}
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

export default AddCourses;