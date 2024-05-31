// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// function AddChildGrowth() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [month, setMonth] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('month', month);
 
//     try {
//       const response = await axios.post(`https://gradhub.hwnix.com/api/add_DESC/8`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setMessage(response.data.Result);
//       navigate("/ChildGrowth");
//     } catch (error) {
//       setMessage('There is something wrong');
//     }
//   };

//   return (
//     <>

//       <div className='main-divp'>
//         <form className="form-p" onSubmit={handleSubmit}>
          
//           <label htmlFor="title"  className='label-pregnancy'>Title:</label>
//           <input className='outbox'
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />


//           <label htmlFor="description"  className='label-pregnancy'>Description:</label><br></br>

//           <textarea

//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//           <br></br>
//           <label htmlFor="month"  className='label-pregnancy'>Month:</label><br></br>
//           <input className='outbox'
//             type="text"
//             id="month"
//             value={month}
//             onChange={(e) => setMonth(e.target.value)}
//           />
          
//           <br></br><br></br>
//           <button type="submit" className='b-pregnancy'>Submit</button>
//         </form>
//         {message && <p>{message}</p>}
//       </div>     
//     </>
//   );
// }

// export default AddChildGrowth;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import"../../style/AddAll.css";


function AddChildMilestones() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [month, setMonth] = useState('');
  const [title_ar, setTitleAr] = useState('');
  const [description_ar, setDescriptionAr] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('month', month);
    formData.append('title_ar', title_ar);
    formData.append('description_ar', description_ar);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/add_DESC/8`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/ChildMilestones");
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  return (
    <>
    <div className="pfot">
      <div className='main-divpp'>
        <form className="form-p" onSubmit={handleSubmit}>
          <label htmlFor="title" className='label-pregnancy'>Title:</label>
          <input className='outbox'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description" className='label-pregnancy'>Description:</label><br />
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <label htmlFor="month" className='label-pregnancy'>Month:</label><br />
          <select
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="">Select Month</option>
            <option value="1">1</option>
            <option value="2">3</option>
            <option value="3">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
            <option value="15">15</option>
            <option value="18">18</option>
            <option value="21">21</option>
          
          </select>

         <br></br>
          <label htmlFor="title" className='label-pregnancy'> Title In Arabic:</label>
          <input
            className='outbox'
            type="text"
            id="title"
            value={title_ar}
            onChange={(e) => setTitleAr(e.target.value)}
          />
          
          <label htmlFor="description" className='label-pregnancy'>Description In Arabic:</label><br />
          <textarea
            id="description"
            value={description_ar}
            onChange={(e) => setDescriptionAr(e.target.value)}
          />
          
          <button type="submit" className='b-pregnancy'>Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      </div>
    </>
  );
}

export default AddChildMilestones;