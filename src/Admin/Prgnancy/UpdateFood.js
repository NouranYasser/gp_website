// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import "../../style/update.css";

// function UpdateFood() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [month, setMonth] = useState('');
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`https://gradhub.hwnix.com/api/food/${id}`);
//         const { title, description, month } = response.data;
//         setTitle(title);
//         setDescription(description);
//         setMonth(month);
//       } catch (error) {
//         console.error('Error fetching food data:', error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('month', month);
//     formData.append('image', image);

//     try {
//       const response = await axios.post(`https://gradhub.hwnix.com/api/update_one/${id}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setMessage(response.data.Result);
//       navigate("/Food");
//     } catch (error) {
//       setMessage('There is something wrong');
//     }
//   };

//   return (
//     <div className='body-u'>
//       <div className='container-u'>
//         <form onSubmit={handleSubmit}>
//           <div className='row'>
//             <div className='clo-25'>
//               <label htmlFor="title" className='label-u'>Title:</label>
//             </div>
//             <div>
//               <input
//                 type="text"
//                 id="title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className='row'>
//             <div className='clo-25'>
//               <label htmlFor="description" className='label-u'>Description:</label>
//             </div>
//             <div>
//               <textarea
//                 id="description-u"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className='row'>
//             <div className='clo-25'>
//               <label htmlFor="month" className='label-u'>Month:</label>
//             </div>
//             <div>
//               <input
//                 type="text"
//                 id="month"
//                 value={month}
//                 onChange={(e) => setMonth(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className='row'>
//             <div className='clo-25'>
//               <label htmlFor="image" className='label-u'>Image:</label>
//             </div>
//             <div>
//               <input
//                 className='file-upload'
//                 type="file"
//                 id="image"
//                 onChange={(e) => setImage(e.target.files[0])}
//               />
//             </div>
//           </div>
//           <div class="row">
//             <button type="submit" className='b-u'>Submit</button>
//           </div>
//         </form>
//         {message && <p>{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default UpdateFood;

import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/updateFood.css";

function UpdateFood() {
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
    formData.append('title', title);
    formData.append('description', description);
    formData.append('month', month);
    formData.append('image', image);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/update_one/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/Food")
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  return (
    <div className='body-uFO'>
    <div className='container-u-FO'>
      <form onSubmit={handleSubmit}>
      <div className='row-FO'>
      <div className=' clo-25-FO'>

          <label htmlFor="title"className='label-u-FO'>Title:</label></div>
        <div>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          /></div>
          </div>
         <div className='row-FO'>
         <div className=' clo-25-FO'>
          <label htmlFor="description" className='label-u-FO'>Description:</label>
          <textarea
            id="description-u"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          /></div>
          </div>
        
          <div className='row-FO'>
              <div className=' clo-25-FO'>
          <label htmlFor="month" className='label-u-FO'>Month:</label></div>
            <div>
          <input
            type="text"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          /></div>
          </div>
        
          <div className='row-FO'>
              <div className=' clo-25-FO'>
          <label htmlFor="image" className='label-u-FO'>Image:</label></div>
            <div>
          <input
           className='file-upload-FO'
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          /></div>
          </div>
          <div class="row">
        <button type="submit"className='b-u-FO'>Submit</button></div>
      </form>
      {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default UpdateFood;
