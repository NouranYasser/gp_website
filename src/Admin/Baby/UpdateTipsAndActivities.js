import React, { useState ,useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/updateBodychange.css";

function UpdateTipsAndActivities() {
    const [tip, setTips] = useState({
      title: "",
      description: "",
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
      if (tip.title !== "")formData.append("title", tip.title);
      if (tip.description !== "")formData.append("description", tip.description);
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
        .get("https://gradhub.hwnix.com/api/get_Byid/en/" + id)
        .then((resp) => {
          setTips({
            ...tip,
            title: resp.data.title,
            description: resp.data.description,
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
          value = {tip.title}
          onChange={(e) => setTips({ ...tip, title: e.target.value })}        /></div>
         </div>
       
        <div className='row-CH'>
        <div className=' clo-25-CH'>
        <label htmlFor="description" className='label-u-CH'>Description:</label></div>
        <div>
        <textarea
          id="description-u-CH"
          value={tip.description}
        onChange={(e) => setTips({ ...tip, description: e.target.value })}        /></div>
        </div>

        <div className='row-CH'>
            <div className=' clo-25-CH'>
        <label htmlFor="month" className='label-u-CH'>Month:</label></div>
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

        

         <div class="row-CH">
        <button type="submit" className='b-u-CH'>Submit</button></div>
      </form>
      {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default UpdateTipsAndActivities;