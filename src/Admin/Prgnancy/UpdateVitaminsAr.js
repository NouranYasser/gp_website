import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/updateVitamins.css";

function UpdateVitaminAr() {
  const [Vitamin, setVitamin] = useState({
    title_ar: "",
    description_ar: "",
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
    if (Vitamin.title_ar !== '') formData.append('title_ar', Vitamin.title_ar);
    if (Vitamin.description_ar !== '') formData.append('description_ar', Vitamin.description_ar);
    if (Vitamin.image !== null) formData.append('image', Vitamin.image);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/update_DESC/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/VitaminsAr")
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  useEffect(() => {
    axios
      .get("https://gradhub.hwnix.com/api/get_Byid/ar/" + id)
      .then((resp) => {
        setVitamin({
          ...Vitamin,
          title_ar: resp.data.title_ar,
          description_ar: resp.data.description_ar,
          month : resp.data.month,
          image: resp.data.image,
        });
      })
      .catch((err) => {
        setVitamin({
          ...Vitamin,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  }, [Vitamin.reload]);

  return (
    <div className='body-u-V'>
    <div className='container-u-V'>
      <form onSubmit={handleSubmit}>
      <div className='row-V'>
      <div className=' clo-25-V'>
        <label htmlFor="title"className='label-u-V'>:العنوان</label></div>
        <div>
        <input
          type="text"
          id="title"
          value={Vitamin.title_ar}
          onChange={(e) => setVitamin({ ...Vitamin, title_ar: e.target.value })}
        /></div>
        </div>
        <div className='row-V'>
      <div className=' clo-25-V'>
     
  <label htmlFor="description"className='label-u-V'>:الوصف</label></div>
        <div>
        <textarea
          id="description-V"
          value={Vitamin.description_ar}
          onChange={(e) => setVitamin({ ...Vitamin, description_ar: e.target.value })}
        />
      </div>
        </div>

        <div className='row-V'>
      <div className=' clo-25-V'>
        <label htmlFor="image"className='label-u-V'>Image:</label></div>
        <div>
        <input
          type="file"
          id="image"
          onChange={(e) => setVitamin({ ...Vitamin, image: e.target.value })}
        /></div>
        </div>
        <div class="row">
        <button type="submit"className='b-u-V'>Submit</button></div>
      </form>
      {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default UpdateVitaminAr;