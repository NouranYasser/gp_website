import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/updateBodychange.css";

function UpdateBodyChanges() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [title_ar, setTitleAr] = useState("");
  const [description_ar, setDescriptionAr] = useState("");
  const [month, setMonth] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (title !== "") formData.append("title", title);
    if (description !== "") formData.append("description", description);
    if (title_ar !== "") formData.append("title_ar", title_ar);
    if (description_ar !== "")
      formData.append("description_ar", description_ar);
    if (month !== "") formData.append("month", month);
    if (image !== null) formData.append("image", image);

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
      navigate("/Bodychange");
    } catch (error) {
      setMessage("There is something wrong");
    }
  };

  return (
    <div className="body-uCH">
      <div className="container-u-CH">
        <form onSubmit={handleSubmit}>
          <div className="row-CH">
            <div className=" clo-25-CH">
              <label htmlFor="title" className="label-u-CH">
                Title:
              </label>
            </div>
            <div>
        <input
          type="text"
          id="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        /></div>
        </div>
      
        <div className='row-CH'>
            <div className=' clo-25-CH'>
        <label htmlFor="image" className='label-u-CH'>Image:</label></div>
            <div>
              <textarea
                id="description-u-CH"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="row-CH">
            <div className=" clo-25-CH">
              <label htmlFor="title" className="label-u-CH">
                Title In Arabic:
              </label>
            </div>
            <div>
              <input
                type="text"
                id="title"
                value={title_ar}
                onChange={(e) => setTitleAr(e.target.value)}
              />
            </div>
          </div>
          <div className="row-CH">
            <div className=" clo-25-CH">
              <label htmlFor="description" className="label-u-CH">
                Description In Arabic:
              </label>
            </div>
            <div>
              <textarea
                id="description-u-CH"
                value={description_ar}
                onChange={(e) => setDescriptionAr(e.target.value)}
              />
            </div>
          </div>

          <div className="row-CH">
            <div className=" clo-25-CH">
              <label htmlFor="month" className="label-u-CH">
                Month:
              </label>
            </div>
            <div>
              <input
                type="text"
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </div>
          </div>

          <div className="row-CH">
            <div className=" clo-25-CH">
              <label htmlFor="image">Image:</label>
            </div>
            <div>
              <input
                className="file-upload-CH"
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          <div class="row-CH">
            <button type="submit" className="b-u-CH">
              Submit
            </button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default UpdateBodyChanges;
