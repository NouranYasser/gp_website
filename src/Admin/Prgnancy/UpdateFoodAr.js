import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/updateFood.css";

function UpdateFoodAr() {
  const [Food, setFood] = useState({
    title_ar: "",
    description_ar: "",
    month :"",
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
    if (Food.title_ar !== '') formData.append('title_ar', Food.title_ar);
    if (Food.description_ar !== '') formData.append('description_ar', Food.description_ar);
    if (Food.month !== '') formData.append('month', Food.month);
    if (Food.image !== null) formData.append('image', Food.image);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/update_DESC/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/Feeding")
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  useEffect(() => {
    axios
      .get("https://gradhub.hwnix.com/api/get_Byid/ar/" + id)
      .then((resp) => {
        setFood({
          ...Food,
          title_ar: resp.data.title_ar,
          description_ar: resp.data.description_ar,
          month : resp.data.month,
          image: resp.data.image,
        });
      })
      .catch((err) => {
        setFood({
          ...Food,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  }, [Food.reload]);

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
            value={Food.title_ar}
            onChange={(e) => setFood({ ...Food, title_ar: e.target.value })}
          /></div>
          </div>
         <div className='row-FO'>
         <div className=' clo-25-FO'>
          <label htmlFor="description" className='label-u-FO'>Description:</label>
          <textarea
            id="description-u"
            value={Food.description_ar}
            onChange={(e) => setFood({ ...Food, description_ar: e.target.value })}
          /></div>
          </div>
        
          <div className='row-FO'>
              <div className=' clo-25-FO'>
          <label htmlFor="month" className='label-u-FO'>Month:</label></div>
            <div>
          <input
            type="text"
            id="month"
            value={Food.month}
            onChange={(e) => setFood({ ...Food, month: e.target.value })}
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
            onChange={(e) => setFood({ ...Food, image: e.target.value })}
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

export default UpdateFoodAr;