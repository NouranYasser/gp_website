import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/updateBabygrowth.css";

function UpdateBabygrowth() {
  const [babygrowth, setBabyGrowth] = useState({
    title: "",
    description: "",
    image:"",
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
    if (babygrowth.title !== '') formData.append('title', babygrowth.title);
    if (babygrowth.description !== '') formData.append('description', babygrowth.description);
    if (babygrowth.image !== null) formData.append('image', babygrowth.image);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/update_DESC/${id}`, formData, {
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

  useEffect(() => {
    axios
      .get("https://gradhub.hwnix.com/api/get_Byid/en/" + id)
      .then((resp) => {
        setBabyGrowth({
          ...babygrowth,
          title: resp.data.title,
          description: resp.data.description,
          image: null,
        });
      })
      .catch((err) => {
        setBabyGrowth({
          ...babygrowth,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  }, [babygrowth.reload]);

  return (

    <div className='body-uG'>
      <div className='container-u-G'>
        <form onSubmit={handleSubmit}>
          <div className='row-G'>
            <div className=' clo-25-G'>
            <label htmlFor="title" className='label-U-G'>Title:</label></div>
            <div><input
              type="text"
              id="title"
              value={babygrowth.title}
              onChange={(e) => setBabyGrowth({ ...babygrowth, title: e.target.value })}
            /></div>
          </div>

          <div className='row-G'>
            <div className=' clo-25-G'>
              <label htmlFor="description" className='label-U-G'>Description:</label></div>
             <div>
              <textarea
                id="description-G"
                value={babygrowth.description}
                onChange={(e) => setBabyGrowth({ ...babygrowth, description: e.target.value })}
              /></div>
          </div>

    
          <div className='row-G'>
            <div className=' clo-25-G'>

              <label htmlFor="image" className='label-U-G'>Image:</label></div>
            <div>
              <input
                className='file-upload-G'
                type="file"
                id="image"
                onChange={(e) => setBabyGrowth({ ...babygrowth, image: e.target.value })}

              /></div>
          </div>
          <div class="row-G">
            <button type="submit" className='b-uG'>Submit</button></div>
        </form>
        {message && <p>{message}</p>}
        </div>
    </div>
    
  );
}

export default UpdateBabygrowth;
