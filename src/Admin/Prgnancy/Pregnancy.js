import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import "../../style/Pregnancy.css";
import { removeAuthUser } from "../../helper/Storage";

function AddData() {
  // const [category_id, setCategoryId] = useState('');
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [month, setMonth] = useState('');
  // const [image, setImage] = useState(null);
  // const [message, setMessage] = useState('');
  // const navigate = useNavigate();
  const handleLogout = () => {
    removeAuthUser();
    // Navigate to the login page or homepage
    // For example:
    window.location.href = '/';
  }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append('category_id', category_id);
  //   formData.append('title', title);
  //   formData.append('description', description);
  //   formData.append('month', month);
  //   formData.append('image', image);

  //   try {
  //     const response = await axios.post(`https://gradhub.hwnix.com/api/add_description`, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     setMessage(response.data.Result);
  //     navigate("/Pregnancy");
  //   } catch (error) {
  //     setMessage('There is something wrong');
  //   }
  // };

  return (
    <>
      <Sidebar />
      <div  onClick={handleLogout}>
           Logout
      </div>
         
      {/* <div className='main-divp'>
        <form className="form-p" onSubmit={handleSubmit}>
          <label htmlFor="category_id" className='label-pregnancy'>Category ID:</label>
          <input className='outbox'
            type="text"
            id="category_id"
            value={category_id}
            onChange={(e) => setCategoryId(e.target.value)}
          />


          <label htmlFor="title"  className='label-pregnancy'>Title:</label>
          <input className='outbox'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />


          <label htmlFor="description"  className='label-pregnancy'>Description:</label><br></br>

          <textarea

            id="description-P"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br></br>
          <label htmlFor="month"  className='label-pregnancy'>Month:</label><br></br>
          <input className='outbox'
            type="text"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />


          <label htmlFor="image"  className='label-pregnancy'>Image:</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <br></br><br></br>
          <button type="submit" className='b-pregnancy'>Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      </div>
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      
    </>
  );

}
export default AddData; 
