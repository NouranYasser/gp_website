import React, { useState ,useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/updateBodychange.css";

function UpdateArtificalFeedingAr() {
  const [artifical, setArtificals] = useState({
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
   setArtificals({ ...artifical, loading: true });

    const formData = new FormData();
    if (artifical.title_ar !== "")formData.append("title_ar", artifical.title_ar);
    if (artifical.description_ar !== "")formData.append("description_ar", artifical.description_ar);
    if (artifical.month !== "")formData.append("month",artifical.month);

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
      navigate("/ArtificalFeeding");
    } catch (error) {
      setMessage("There is something wrong");
    }
  };
  
  useEffect(() => {
    axios
      .get("https://gradhub.hwnix.com/api/get_Byid/ar/" + id)
      .then((resp) => {
        setArtificals({
          ...artifical,
          title_ar: resp.data.title_ar,
          description_ar: resp.data.description_ar,
          month : resp.data.month,
        });
      })
      .catch((err) => {
        setArtificals({
          ...artifical,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  }, [artifical.reload]);
 
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
          value={artifical.title_ar}
          onChange={(e) => setArtificals({ ...artifical, title_ar: e.target.value })}
        /></div>
         </div>
      
        <div className='row-CH'>
        <div className=' clo-25-CH'>
        <label htmlFor="description" className='label-u-CH'>Description:</label></div>
        <div>
        <textarea
          id="description-u-CH"
          value={artifical.description_ar}
          onChange={(e) => setArtificals({ ...artifical, description_ar: e.target.value })}
        /></div>
        </div>

       
        <div className='row-CH'>
            <div className=' clo-25-CH'>
        <label htmlFor="month" className='label-u-CH'>Month:</label></div>
            <div>
        <input
          type="text"
          id="month"
          value={artifical.month}
          onChange={(e) => setArtificals({ ...artifical, month: e.target.value })}
        /></div>
        </div>
      
         <div class="row-CH">
        <button type="submit" className='b-u-CH'>Submit</button></div>
      </form>
      {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default UpdateArtificalFeedingAr;