import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/update.css";

function UpdateBabygrowth() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [month, setMonth] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (title !== '') formData.append('title', title);
    if (description !== '') formData.append('description', description);
    if (month !== '') formData.append('month', month);
    if (image !== null) formData.append('image', image);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/update_one/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/Babygrowth")
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  return (

    <div className='body-u'>
      <div className='container-u'>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className=' clo-25'>
              <label htmlFor="title" className='label-u'>Title:</label></div>
            <div><input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            /></div>
          </div>

          <div className='row'>
            <div className=' clo-25'>
              <label htmlFor="description" className='label-u'>Description:</label></div>
            <div>
              <textarea
                id="description-u"

                value={description}
                onChange={(e) => setDescription(e.target.value)}
              /></div>
          </div>

          <div className='row'>
            <div className=' clo-25'>

              <label htmlFor="month" className='label-u'>Month:</label></div>
            <div>
              <input
                type="text"
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              /></div>
          </div>

          <div className='row'>
            <div className=' clo-25'>

              <label htmlFor="image" className='label-u'>Image:</label></div>
            <div>
              <input
                className='file-upload'
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              /></div>
          </div>
          <div class="row">
            <button type="submit" className='b-u'>Submit</button></div>
        </form>
        {message && <p>{message}</p>}
        </div>
    </div>
  );
}

export default UpdateBabygrowth;
