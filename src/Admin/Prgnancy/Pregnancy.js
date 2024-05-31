import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import "../../style/Pregnancy.css";
import { removeAuthUser } from "../../helper/Storage";
import myImage2 from "../../images/hero.png";
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
         

         <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
         <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
         <br></br><br></br><br></br><br></br>
         
      
      <div className='main-divp'>
        
      <img src={myImage2} alt="My Image" class="image"  width="400px" height="400px"/>
       
      </div>
    </>
  );

}
export default AddData; 
