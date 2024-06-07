import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import "../../style/updateFood.css";

function UpdateFood() {
  const [Food, setFood] = useState({
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
    if (Food.title !== '') formData.append('title', Food.title);
    if (Food.description !== '') formData.append('description', Food.description);
    if (Food.image !== null) formData.append('image', Food.image);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/update_DESC/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/Feeding");
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  useEffect(() => {
    axios
      .get(`https://gradhub.hwnix.com/api/get_Byid/en/${id}`)
      .then((resp) => {
        setFood({
          ...Food,
          title: resp.data.title,
          description: resp.data.description,
          image: null,
        });
      })
      .catch((err) => {
        setFood({
          ...Food,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later!",
        });
      });
  }, [Food.reload]);

  return (
    <div className='body-uFO'>
      <div className='container-u-FO'>
        <form onSubmit={handleSubmit}>
          <div className='row-FO'>
            <div className='clo-25-FO'>
              <label htmlFor="title" className='label-u-FO'>Title:</label>
            </div>
            <div>
              <input
                type="text"
                id="title"
                value={Food.title}
                onChange={(e) => setFood({ ...Food, title: e.target.value })}
              />
            </div>
          </div>
          <div className='row-FO'>
            <div className='clo-25-FO'>
              <label htmlFor="description" className='label-u-FO'>Description:</label>
            </div>
            <div>
              <textarea
                id="description-u"
                value={Food.description}
                onChange={(e) => setFood({ ...Food, description: e.target.value })}
              />
            </div>
          </div>
          <div className='row-FO'>
            <div className='clo-25-FO'>
              <label htmlFor="image" className='label-u-FO'>Image:</label>
            </div>
            <div>
              <input
                className='file-upload-FO'
                type="file"
                id="image"
                onChange={(e) => setFood({ ...Food, image: e.target.files[0] })}
              />
            </div>
          </div>
          <div className='row'>
            <button type="submit" className='b-u-FO'>Submit</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default UpdateFood;

