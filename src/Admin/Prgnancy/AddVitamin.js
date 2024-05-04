import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import"../../style/addBabyGrowth.css";



function AddVitamin() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [title_ar, setTitleAr] = useState('');
  const [description_ar, setDescriptionAr] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
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

  return (
    <>

      <div className='main-divG'>
        <form className="form-G" onSubmit={handleSubmit}>
          
          <label htmlFor="title"  className='label-G'>Title:</label>
          <input className='outbox'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description"  className='label-G'>Description:</label><br></br>

          <textarea

            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br></br>
          <label htmlFor="title"  className='label-G'>Title:</label>
          <input className='outbox'
            type="text"
            id="title"
            value={title_ar}
            onChange={(e) => setTitleAr(e.target.value)}
          />

          <label htmlFor="description"  className='label-G'>Description:</label><br></br>

          <textarea

            id="description"
            value={description_ar}
            onChange={(e) => setDescriptionAr(e.target.value)}
          />
          <br></br>
          <label htmlFor="image"  className='label-G'>Image:</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <br></br><br></br>
          <button type="submit" className='b-Growth'>Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      
    </>
  );
}

export default AddVitamin;