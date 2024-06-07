import React, { useState ,useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/updateBodychange.css";

function UpdateTipsAndActivitiesAr() {
    const [tip, setTips] = useState({
      title_ar: "",
      description_ar: "",
      month :"",
      err: "",
      loading: false,
      reload: false,
      success: null,
    });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
     setTips({ ...tip, loading: true });
  
      const formData = new FormData();
      if (tip.title_ar !== "")formData.append("title_ar", tip.title_ar);
      if (tip.description_ar !== "")formData.append("description_ar", tip.description_ar);
      if (tip.month !== "")formData.append("month",tip.month);
  
      try {
        const response = await axios.post(
          `https://gradhub.hwnix.com/api/update_DESC/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setMessage(response.data.Result);
        navigate("/TipsAndActivities");
      } catch (error) {
        setMessage("There is something wrong");
      }
    };
    
    useEffect(() => {
      axios
        .get("https://gradhub.hwnix.com/api/get_Byid/ar/" + id)
        .then((resp) => {
          setTips({
            ...tip,
            title_ar: resp.data.title_ar,
            description_ar: resp.data.description_ar,
            month : resp.data.month,
          });
        })
        .catch((err) => {
          setTips({
            ...tip,
            loading: false,
            success: null,
            err: "Something went wrong, please try again later !",
          });
        });
    }, [tip.reload]);
   
  return (
    <div className='body-uCH'>
    <div className='container-u-CH'>
      <form onSubmit={handleSubmit}>
      <div className='row-CH'>
      <div className=' clo-25-CH'>
        <label htmlFor="title" className='label-u-CH'>Title:</label></div>
        <div><input
          type="text"
          id="title"
          value = {tip.title_ar}
          onChange={(e) => setTips({ ...tip, title_ar: e.target.value })}        /></div>
         </div>
       
        <div className='row-CH'>
        <div className=' clo-25-CH'>
        <label htmlFor="description" className='label-u-CH'>Description:</label></div>
        <div>
        <textarea
          id="description-u-CH"
          value={tip.description_ar}
        onChange={(e) => setTips({ ...tip, description_ar: e.target.value })}        /></div>
        </div>

        <div className='row-CH'>
            <div className=' clo-25-CH'>
        <label htmlFor="month" className='label-u-CH'>Month:</label></div>
            <div>
            <select
              id="month"
              value={tip.month}
              onChange={(e) => setTips({ ...tip, month: e.target.value })} 
            >
  
              <option value="1">1-3</option>
              <option value="3">3-6</option>
              <option value="6">6-9</option>
              <option value="9">9-12</option>
              <option value="12">12-15</option>
              <option value="15">15-18</option>
              <option value="18">18-21</option>
              <option value="21">21-24</option>
            </select>
            </div>
        </div>

         <div class="row-CH">
        <button type="submit" className='b-u-CH'>Submit</button></div>
      </form>
      {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default UpdateTipsAndActivitiesAr;