import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/updateVitamins.css";

function UpdateVitamin() {
  const [Vitamin, setVitamin] = useState({
    title: "",
    description: "",
    image: null,
    err: "",
    loading: false,
    reload: false,
    success: null,
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (Vitamin.title !== '') formData.append('title', Vitamin.title);
    if (Vitamin.description !== '') formData.append('description', Vitamin.description);
    if (Vitamin.image !== null) formData.append('image', Vitamin.image);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/update_DESC/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/Vitamins")
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  useEffect(() => {
    axios
      .get("https://gradhub.hwnix.com/api/get_Byid/en/" + id)
      .then((resp) => {
        setVitamin({
          ...Vitamin,
          title: resp.data.title,
          description: resp.data.description,
          image: null,  // Ensure image is initially null to avoid issues
        });
      })
      .catch((err) => {
        setVitamin({
          ...Vitamin,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later!",
        });
      });
  }, [Vitamin.reload]);

  return (
    <div className='body-u-V'>
      <div className='container-u-V'>
        <form onSubmit={handleSubmit}>
          <div className='row-V'>
            <div className='clo-25-V'>
              <label htmlFor="title" className='label-u-V'>Title:</label>
            </div>
            <div>
              <input
                type="text"
                id="title"
                value={Vitamin.title}
                onChange={(e) => setVitamin({ ...Vitamin, title: e.target.value })}
              />
            </div>
          </div>
          <div className='row-V'>
            <div className='clo-25-V'>
              <label htmlFor="description" className='label-u-V'>Description:</label>
            </div>
            <div>
              <textarea
                id="description-V"
                value={Vitamin.description}
                onChange={(e) => setVitamin({ ...Vitamin, description: e.target.value })}
              />
            </div>
          </div>
          <div className='row-V'>
            <div className='clo-25-V'>
              <label htmlFor="image" className='label-u-V'>Image:</label>
            </div>
            <div>
              <input
                type="file"
                id="image"
                onChange={(e) => setVitamin({ ...Vitamin, image: e.target.files[0] })}
              />
            </div>
          </div>
          <div className="row">
            <button type="submit" className='b-u-V'>Submit</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default UpdateVitamin;


// import React, { useState , useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import "../../style/updateVitamins.css";

// function UpdateVitamin() {
//   const [Vitamin, setVitamin] = useState({
//     title: "",
//     description: "",
//     image:"",
//     err: "",
//     loading: false,
//     reload: false,
//     success: null,
//   });
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
//   const { id } = useParams(); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     if (Vitamin.title !== '') formData.append('title', Vitamin.title);
//     if (Vitamin.description !== '') formData.append('description', Vitamin.description);
//     if (Vitamin.image !== null) formData.append('image', Vitamin.image);

//     try {
//       const response = await axios.post(`https://gradhub.hwnix.com/api/update_DESC/${id}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setMessage(response.data.Result);
//       navigate("/Vitamins")
//     } catch (error) {
//       setMessage('There is something wrong');
//     }
//   };

//   useEffect(() => {
//     axios
//       .get("https://gradhub.hwnix.com/api/get_Byid/en/" + id)
//       .then((resp) => {
//         setVitamin({
//           ...Vitamin,
//           title: resp.data.title,
//           description: resp.data.description,
//           month : resp.data.month,
//           image: resp.data.image,
//         });
//       })
//       .catch((err) => {
//         setVitamin({
//           ...Vitamin,
//           loading: false,
//           success: null,
//           err: "Something went wrong, please try again later !",
//         });
//       });
//   }, [Vitamin.reload]);

//   return (
//     <div className='body-u-V'>
//     <div className='container-u-V'>
//       <form onSubmit={handleSubmit}>
//       <div className='row-V'>
//       <div className=' clo-25-V'>
//         <label htmlFor="title"className='label-u-V'>Title:</label></div>
//         <div>
//         <input
//           type="text"
//           id="title"
//           value={Vitamin.title}
//           onChange={(e) => setVitamin({ ...Vitamin, title: e.target.value })}
//         /></div>
//         </div>
//         <div className='row-V'>
//       <div className=' clo-25-V'>
     
//   <label htmlFor="description"className='label-u-V'>Description:</label></div>
//         <div>
//         <textarea
//           id="description-V"
//           value={Vitamin.description}
//           onChange={(e) => setVitamin({ ...Vitamin, description: e.target.value })}
//         />
//       </div>
//         </div>

//         <div className='row-V'>
//       <div className=' clo-25-V'>
//         <label htmlFor="image"className='label-u-V'>Image:</label></div>
//         <div>
//         <input
//           type="file"
//           id="image"
//           onChange={(e) => setVitamin({ ...Vitamin, image: e.target.value })}
//         /></div>
//         </div>
//         <div class="row">
//         <button type="submit"className='b-u-V'>Submit</button></div>
//       </form>
//       {message && <p>{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default UpdateVitamin;