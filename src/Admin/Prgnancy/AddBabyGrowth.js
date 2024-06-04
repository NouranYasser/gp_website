// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../../style/addBabyGrowth.css";

// function AddBabyGrowth() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [month, setMonth] = useState('');
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');
//   const [title_ar, setTitle_ar] = useState('');
//   const [description_ar, setDescription_ar] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Ensure all fields are valid before submitting
//     if (validateEnglish(title) && validateEnglish(description) && validateArabic(title_ar) && validateArabic(description_ar)) {
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('description', description);
//       formData.append('month', month);
//       formData.append('image', image);
//       formData.append('title_ar', title_ar);
//       formData.append('description_ar', description_ar);

//       try {
//         const response = await axios.post(`https://gradhub.hwnix.com/api/add_DESC/2`, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         setMessage(response.data.Result);
//         navigate("/Babygrowth");
//       } catch (error) {
//         setMessage('There is something wrong');
//       }
//     } else {
//       setMessage('Please ensure all fields are correctly filled.');
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete(`https://gradhub.hwnix.com/api/delete_DESC/2`, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       setMessage(response.data.Result);
//       navigate("/Babygrowth");
//     } catch (error) {
//       setMessage('There is something wrong with the deletion process');
//     }
//   };

//   const validateEnglish = (text) => {
//     const arabicRegex = /[\u0600-\u06FF]/;
//     return !arabicRegex.test(text);
//   };

//   const validateArabic = (text) => {
//     const arabicRegex = /[\u0600-\u06FF]/;
//     return arabicRegex.test(text);
//   };

//   const handleTitleChange = (e) => {
//     const value = e.target.value;
//     if (validateEnglish(value)) {
//       setTitle(value);
//       setErrorMessage('');
//     } else {
//       setErrorMessage('Please write the title in English.');
//     }
//   };

//   const handleDescriptionChange = (e) => {
//     const value = e.target.value;
//     if (validateEnglish(value)) {
//       setDescription(value);
//       setErrorMessage('');
//     } else {
//       setErrorMessage('Please write the description in English.');
//     }
//   };

//   const handleTitleArChange = (e) => {
//     const value = e.target.value;
//     if (validateArabic(value)) {
//       setTitle_ar(value);
//       setErrorMessage('');
//     } else {
//       setErrorMessage('Please write the title in Arabic.');
//     }
//   };

//   const handleDescriptionArChange = (e) => {
//     const value = e.target.value;
//     if (validateArabic(value)) {
//       setDescription_ar(value);
//       setErrorMessage('');
//     } else {
//       setErrorMessage('Please write the description in Arabic.');
//     }
//   };

//   return (
//     <>
//       <div className="growthcon"> 
//         <div className='main-divG'>
//           <form className="form-G" onSubmit={handleSubmit}>
//             <label htmlFor="title" className='label-G'>Title:</label>
//             <input
//               className='outbox'
//               type="text"
//               id="title"
//               value={title}
//               onChange={handleTitleChange}
//             />
//             {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

//             <label htmlFor="description" className='label-G'>Description:</label>
//             <textarea
//               id="description"
//               value={description}
//               onChange={handleDescriptionChange}
//             />

//             <label htmlFor="month" className='label-G'>Month:</label>
//             <input
//               className='outbox'
//               type="text"
//               id="month"
//               value={month}
//               onChange={(e) => setMonth(e.target.value)}
//             />

//             <label htmlFor="image" className='label-G'>Image:</label>
//             <input
//               type="file"
//               id="image"
//               onChange={(e) => setImage(e.target.files[0])}
//             />

//             <label htmlFor="title_ar" className='label-G'>Title In Arabic:</label>
//             <input
//               className='outbox'
//               type="text"
//               id="title_ar"
//               value={title_ar}
//               onChange={handleTitleArChange}
//             />

//             <label htmlFor="description_ar" className='label-G'>Description In Arabic:</label>
//             <textarea
//               id="description_ar"
//               value={description_ar}
//               onChange={handleDescriptionArChange}
//             />

//             <button type="submit" className='b-Growth'>Submit</button>
//           </form>
//           {message && <p>{message}</p>}
          
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddBabyGrowth;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../../style/addBabyGrowth.css";

// function AddBabyGrowth() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [month, setMonth] = useState('');
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');
//   const [title_ar, setTitle_ar] = useState('');
//   const [description_ar, setDescription_ar] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Ensure all fields are valid before submitting
//     if (validateEnglish(title) && validateEnglish(description) && validateArabic(title_ar) && validateArabic(description_ar)) {
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('description', description);
//       formData.append('month', month);
//       formData.append('image', image);
//       formData.append('title_ar', title_ar);
//       formData.append('description_ar', description_ar);

//       try {
//         const response = await axios.post(`https://gradhub.hwnix.com/api/add_DESC/2`, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         setMessage(response.data.Result);
//         navigate("/Babygrowth");
//       } catch (error) {
//         setMessage('There is something wrong');
//       }
//     } else {
//       setMessage('Please ensure all fields are correctly filled.');
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete(`https://gradhub.hwnix.com/api/delete_DESC/2`, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       setMessage(response.data.Result);
//       navigate("/Babygrowth");
//     } catch (error) {
//       setMessage('There is something wrong with the deletion process');
//     }
//   };

//   const validateEnglish = (text) => {
//     const arabicRegex = /[\u0600-\u06FF]/;
//     return !arabicRegex.test(text);
//   };

//   const validateArabic = (text) => {
//     const arabicRegex = /[\u0600-\u06FF]/;
//     return arabicRegex.test(text);
//   };

//   const handleTitleChange = (e) => {
//     const value = e.target.value;
//     if (!validateEnglish(value)) {
//       setErrorMessage('Please write the title in English.');
//     } else {
//       setErrorMessage('');
//       setTitle(value);
//     }
//   };

//   const handleDescriptionChange = (e) => {
//     const value = e.target.value;
//     if (!validateEnglish(value)) {
//       setErrorMessage('Please write the description in English.');
//     } else {
//       setErrorMessage('');
//       setDescription(value);
//     }
//   };

//   const handleTitleArChange = (e) => {
//     const value = e.target.value;
//     if (!validateArabic(value)) {
//       setErrorMessage('Please write the title in Arabic.');
//     } else {
//       setErrorMessage('');
//       setTitle_ar(value);
//     }
//   };

//   const handleDescriptionArChange = (e) => {
//     const value = e.target.value;
//     if (!validateArabic(value)) {
//       setErrorMessage('Please write the description in Arabic.');
//     } else {
//       setErrorMessage('');
//       setDescription_ar();
//     }
//   };

//   return (
//     <>
//       <div className="growthcon"> 
//         <div className='main-divG'>
//           <form className="form-G" onSubmit={handleSubmit}>
//             <label htmlFor="title" className='label-G'>Title:</label>
//             <input
//               className='outbox'
//               type="text"
//               id="title"
//               value={title}
//               onChange={handleTitleChange}
//             />
//             {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

//             <label htmlFor="description" className='label-G'>Description:</label>
//             <textarea
//               id="description"
//               value={description}
//               onChange={handleDescriptionChange}
//             />

//             <label htmlFor="month" className='label-G'>Month:</label>
//             <input
//               className='outbox'
//               type="text"
//               id="month"
//               value={month}
//               onChange={(e) => setMonth(e.target.value)}
//             />

//             <label htmlFor="image" className='label-G'>Image:</label>
//             <input
//               type="file"
//               id="image"
//               onChange={(e) => setImage(e.target.files[0])}
//             />

//             <label htmlFor="title_ar" className='label-G'>Title In Arabic:</label>
//             <input
//               className='outbox'
//               type="text"
//               id="title_ar"
//               value={title_ar}
//               onChange={handleTitleArChange}
//             />

//             <label htmlFor="description_ar" className='label-G'>Description In Arabic:</label>
//             <textarea
//               id="description_ar"
//               value={description_ar}
//               onChange={handleDescriptionArChange}
//             />

//             <button type="submit" className='b-Growth'>Submit</button>
//           </form>
//           {message && <p>{message}</p>}
//           <button onClick={handleDelete} className='b-Growth-delete'>Delete</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddBabyGrowth;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../../style/addBabyGrowth.css";

// function AddBabyGrowth() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [month, setMonth] = useState('');
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');
//   const [title_ar, setTitle_ar] = useState('');
//   const [description_ar, setDescription_ar] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Ensure all fields are valid before submitting
//     if (validateEnglish(title) && validateEnglish(description) && validateArabic(title_ar) && validateArabic(description_ar)) {
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('description', description);
//       formData.append('month', month);
//       formData.append('image', image);
//       formData.append('title_ar', title_ar);
//       formData.append('description_ar', description_ar);

//       try {
//         const response = await axios.post(`https://gradhub.hwnix.com/api/add_DESC/2`, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
//         setMessage(response.data.Result);
//         navigate("/Babygrowth");
//       } catch (error) {
//         setMessage('There is something wrong');
//       }
//     } else {
//       setMessage('Please ensure all fields are correctly filled.');
//     }
//   };

//   const validateEnglish = (text) => {
//     const arabicRegex = /[\u0600-\u06FF]/;
//     return !arabicRegex.test(text);
//   };

//   const validateArabic = (text) => {
//     const arabicRegex = /[\u0600-\u06FF]/;
//     return arabicRegex.test(text);
//   };

//   const handleTitleChange = (e) => {
//     const value = e.target.value;
//     if (!validateEnglish(value)) {
//       setErrorMessage('Please write the title in English.');
//     } else {
//       setErrorMessage('');
//       setTitle(value);
//     }
//   };

//   const handleDescriptionChange = (e) => {
//     const value = e.target.value;
//     if (!validateEnglish(value)) {
//       setErrorMessage('Please write the description in English.');
//     } else {
//       setErrorMessage('');
//       setDescription(value);
//     }
//   };

//   const handleTitleArChange = (e) => {
//     const value = e.target.value;
//     if (!validateArabic(value)) {
//       setErrorMessage('Please write the title in Arabic.');
//     } else {
//       setErrorMessage('');
//       setTitle_ar(value);
//     }
//   };

//   const handleDescriptionArChange = (e) => {
//     const value = e.target.value;
//     if (!validateArabic(value)) {
//       setErrorMessage('Please write the description in Arabic.');
//     } else {
//       setErrorMessage('');
//       setDescription_ar(value);
//     }
//   };

//   return (
//     <>
//       <div className="growthcon"> 
//         <div className='main-divG'>
//           <form className="form-G" onSubmit={handleSubmit}>
//           {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//             <label htmlFor="title" className='label-G'>Title:</label>
//             <input
//               className='outbox'
//               type="text"
//               id="title"
//               value={title}
//               onChange={handleTitleChange}
//             />

//             <label htmlFor="description" className='label-G'>Description:</label>
//             <textarea
//               id="description"
//               value={description}
//               onChange={handleDescriptionChange}
//             />

//             <label htmlFor="month" className='label-G'>Month:</label>
//             <input
//               className='outbox'
//               type="text"
//               id="month"
//               value={month}
//               onChange={(e) => setMonth(e.target.value)}
//             />

//             <label htmlFor="image" className='label-G'>Image:</label>
//             <input
//               type="file"
//               id="image"
//               onChange={(e) => setImage(e.target.files[0])}
//             />

//             <label htmlFor="title_ar" className='label-G'>Title In Arabic:</label>
//             <input
//               className='outbox'
//               type="text"
//               id="title_ar"
//               value={title_ar}
//               onChange={handleTitleArChange}
//             />

//             <label htmlFor="description_ar" className='label-G'>Description In Arabic:</label>
//             <textarea
//               id="description_ar"
//               value={description_ar}
//               onChange={handleDescriptionArChange}
//             />

//             <button type="submit" className='b-Growth'>Submit</button>
//           </form>
//           {message && <p>{message}</p>}
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddBabyGrowth;



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
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const [errorMessage3, setErrorMessage3] = useState('');
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
  
  const handleLanguage = async (e) => {
  const newValue = e.target.value;

  // Regular expression to detect Arabic characters
  const arabicRegex = /[\u0600-\u06FF]/;

  if (arabicRegex.test(newValue)) {
    setErrorMessage('Please write title in English.');
  } else {
    setErrorMessage('');
    setTitle(newValue);
  }

  
}


const handleDescriptionChange = async (e) => {
  const value = e.target.value;

  // Regular expression to detect Arabic characters
  const arabicRegex = /[\u0600-\u06FF]/;

  if (arabicRegex.test(value)) {
    setError('Please write Description in English.');
  } else {
    setError('');
    setDescription(value);
  }

  
}

const handleTitleChangeA = (e) => {
  const newValue2 = e.target.value;

  // Regular expression to detect English characters
  const englishRegex = /[A-Za-z]/;

  if (englishRegex.test(newValue2)) {
    setErrorMessage2('Please write title in Arabic.');
  } else {
    setErrorMessage2('');
    setTitle_ar(newValue2);
  }
};

const handleDescriptionChangeA = (e) => {
  const newValue3 = e.target.value;

  // Regular expression to detect English characters
  const englishRegex = /[A-Za-z]/;

  if (englishRegex.test(newValue3)) {
    setErrorMessage3('Please write Description in Arabic.');
  } else {
    setErrorMessage3('');
    setDescription_ar(newValue3);
  }
};

  return (
    <>
      <div className="growthcon"> 
      <div className='main-divG'>
        <form className="form-G" onSubmit={handleSubmit}>
          
        <label htmlFor="title" className='label-G'>Title:</label>
      <input
        className='outbox'
        type="text"
        id="title"
        value={title}
        onChange={handleLanguage}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}



      <label htmlFor="description" className='label-G'>Description:</label><br />
      <textarea
        id="description"
        value={description}
        onChange={handleDescriptionChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}

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

          <label htmlFor="title" className='label-G'>Title In Arabic:</label>
      <input
        className='outbox'
        type="text"
        id="title"
        value={title_ar}
        onChange={handleTitleChangeA}
      />
      {errorMessage2 && <p style={{ color: 'red' }}>{errorMessage2}</p>}

          <label htmlFor="description"  className='label-G'>Description In Arabic:</label><br></br>

          <textarea

            id="description"
            value={description_ar}
            onChange={handleDescriptionChangeA}
          />
        {errorMessage3 && <p style={{ color: 'red' }}>{errorMessage3}</p>}
          <br></br>
          <br></br>
          <button type="submit" className='b-Growth'>Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      </div>
    </>
  );
}

export default AddBabyGrowth;