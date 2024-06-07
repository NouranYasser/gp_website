import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/updateBodychange.css";

function UpdateChildMilestonesAr() {
  const [child, setChilds] = useState({
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
    setChilds({ ...child, loading: true });

    const formData = new FormData();
    if (child.title_ar !== "") formData.append("title_ar", child.title_ar);
    if (child.description_ar !== "") formData.append("description_ar", child.description_ar);

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
      navigate("/ChildMilestones");
    } catch (error) {
      setMessage("There is something wrong");
    }
  };

  useEffect(() => {
    axios
      .get("https://gradhub.hwnix.com/api/get_Byid/ar/" + id)
      .then((resp) => {
        setChilds({
          ...child,
          title_ar: resp.data.title_ar,
          description_ar: resp.data.description_ar,
         
        });
      })
      .catch((err) => {
        setChilds({
          ...child,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  }, [child.reload]);

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
                value={child.title_ar}
                onChange={(e) => setChilds({ ...child, title_ar: e.target.value })}
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
                value={child.description_ar}
                onChange={(e) => setChilds({ ...child, description_ar: e.target.value })}
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

export default UpdateChildMilestonesAr;