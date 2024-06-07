import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import "../../style/updateBodychange.css";

function UpdateBreastFeeding() {
  const [breast, setBreasts] = useState({
    title: "",
    description: "",
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
    if (breast.title !== "") formData.append("title", breast.title);
    if (breast.description !== "") formData.append("description", breast.description);

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
      .get("https://gradhub.hwnix.com/api/get_Byid/en/" + id)
      .then((resp) => {
        setBreasts({
          ...breast,
          title: resp.data.title,
          description: resp.data.description,
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
                value={breast.title}
                onChange={(e) => setBreasts({ ...breast, title: e.target.value })}
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
                value={breast.description}
                onChange={(e) => setBreasts({ ...breast, description: e.target.value })}
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

export default UpdateBreastFeeding;