import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/updateExercises.css";

function UpdateExercise() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (title !== '') formData.append('title', title);
    if (description !== '') formData.append('description', description);
    if (video !== null) formData.append('video', video);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/Exercises")
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  return (
    
      <div className='body-u-EX'>
    <div className='container-u-EX'>
      <form onSubmit={handleSubmit}>
      <div className='row-EX'>
      <div className=' clo-25-EX'>
<label htmlFor="title" className='label-u-EX'>Title:</label></div>
        <div>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></div>
        </div>
      
        <div className='row-EX'>
      <div className=' clo-25-EX'>
        <label htmlFor="description"className='label-u-EX'>Description:</label></div>
        <div>
        <textarea
          id="description-E"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /></div>
        </div>

        <div className=' clo-25-EX'>
        <label htmlFor="description"className='label-u-EX'>Video URL:</label></div>
        <div>
        <textarea
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        /></div>
      
        <div class="row-EX">
        <button type="submit"className='b-u-EX'>Submit</button></div>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
    
  );
}

export default UpdateExercise;