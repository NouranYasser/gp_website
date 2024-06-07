import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import "../../style/updateBodychange.css";

function UpdateBreastFeedingAr() {
  const [breast, setBreasts] = useState({
    title_ar: "",
    description_ar: "",
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
    setBreasts({ ...breast, loading: true });

    const formData = new FormData();
    if (breast.title_ar !== "") formData.append("title_ar", breast.title_ar);
    if (breast.description_ar !== "") formData.append("description_ar", breast.description_ar);

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
      navigate("/BreastFeeding");
    } catch (error) {
      setMessage("There is something wrong");
    }
  };

  useEffect(() => {
    axios
      .get("https://gradhub.hwnix.com/api/get_Byid/ar/" + id)
      .then((resp) => {
        setBreasts({
          ...breast,
          title_ar: resp.data.title_ar,
          description_ar: resp.data.description_ar,
         
        });
      })
      .catch((err) => {
        setBreasts({
          ...breast,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  }, [breast.reload]);

  return (
    <div className='body-uCH'>
      <div className='container-u-CH'>
        <form onSubmit={handleSubmit}>
          <div className='row-CH'>
            <div className='clo-25-CH'>
              <label htmlFor="title" className='label-u-CH'>Title:</label>
            </div>
            <div>
              <input
                type="text"
                id="title"
                value={breast.title_ar}
                onChange={(e) => setBreasts({ ...breast, title_ar: e.target.value })}
              />
            </div>
          </div>
          <div className='row-CH'>
            <div className='clo-25-CH'>
              <label htmlFor="description" className='label-u-CH'>Description:</label>
            </div>
            <div>
              <textarea
                id="description-u-CH"
                value={breast.description_ar}
                onChange={(e) => setBreasts({ ...breast, description_ar: e.target.value })}
              />
            </div>
          </div>


          <div className="row-CH">
            <button type="submit" className='b-u-CH'>Submit</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default UpdateBreastFeedingAr;