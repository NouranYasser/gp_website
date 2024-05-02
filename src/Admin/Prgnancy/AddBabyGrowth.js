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
          <label htmlFor="month"  className='label-G'>Month:</label><br></br>
          <input className='outbox'
            type="text"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />


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

export default AddBabyGrowth;