import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateBodyChanges() {
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
      navigate("/Bodychange")
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      
     
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      
      
        <label htmlFor="month">Month:</label>
        <input
          type="text"
          id="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
      
      
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
     
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateBodyChanges;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function UpdateBodyChanges() {
//   const [category_id, setCategoryId] = useState('');
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [month, setMonth] = useState('');
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
//   const { id } = useParams(); 
//   // Correctly extract id from useParams

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('category_id', category_id);
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
//       navigate("/Bodychange")
//     } catch (error) {
//       setMessage('There is something wrong');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>

//       <label htmlFor="category_id">category_id:</label>
//           <input
//             type="int"
//             id="category_id"
//             value={category_id}
//             onChange={(e) => setCategoryId(e.target.value)}
//           />
        
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
        
       
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
        
        
//           <label htmlFor="month">Month:</label>
//           <input
//             type="text"
//             id="month"
//             value={month}
//             onChange={(e) => setMonth(e.target.value)}
//           />
        
        
//           <label htmlFor="image">Image:</label>
//           <input
//             type="file"
//             id="image"
//             onChange={(e) => setImage(e.target.files[0])}
//           />
       
//         <button type="submit">Submit</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default UpdateBodyChanges;
