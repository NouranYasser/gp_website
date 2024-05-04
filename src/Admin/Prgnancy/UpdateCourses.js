import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import"../../style/updatecourses.css";
function UpdateCourses() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [title_ar, setTitleAr] = useState('');
  const [description_ar, setDescriptionAr] = useState('');
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (title !== '') formData.append('title', title);
    if (description !== '') formData.append('description', description);
    if (title_ar !== '') formData.append('title_ar', title_ar);
    if (description_ar !== '') formData.append('description_ar', description_ar);
    if (video !== '') formData.append('video', video);
    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/Courses")
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  return (
    <div className='body-u-C'>
    <div className='container-u-C'>
      <form onSubmit={handleSubmit}>
      <div className='row-C'>
      <div className=' clo-25-C'>
        <label htmlFor="title"className='label-u-C'>Title:</label></div>
        <div>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /></div>
        </div>
        <div className='row-C'>
      <div className=' clo-25-C'>
        <label htmlFor="description"className='label-u-C'>Description:</label></div>
        <div>
        <textarea
          id="description-C"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /></div>
        </div>

        <div className='row-C'>
      <div className=' clo-25-C'>
        <label htmlFor="title"className='label-u-C'>Title In Arabic:</label></div>
        <div>
        <input
          type="text"
          id="title"
          value={title_ar}
          onChange={(e) => setTitleAr(e.target.value)}
        /></div>
        </div>
        <div className='row-C'>
      <div className=' clo-25-C'>
        <label htmlFor="description"className='label-u-C'>Description In Arabic:</label></div>
        <div>
        <textarea
          id="description-C"
          value={description_ar}
          onChange={(e) => setDescriptionAr(e.target.value)}
        /></div>
        </div>
      
        <div className='row-C'>
      <div className=' clo-25-C'>
        <label htmlFor="Video" className='label-u-C'>Video URL:</label></div>
        <div>
        <input
          type="text"
          id="Video"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        /></div>
        </div>
        <div class="row">
       
        <button type="submit" className='b-u-C'>Submit</button></div>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
    
  );
}

export default UpdateCourses;