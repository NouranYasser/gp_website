import React, { useState , useRef , useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/updateBodychange.css";

function UpdateBodyChangesAr() {
  const [bodychange, setBodyChanges] = useState({
    title_ar: "",
    description_ar: "",
    image:"",
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
   setBodyChanges({ ...bodychange, loading: true });

    const formData = new FormData();
    if (bodychange.title_ar !== "")formData.append("title_ar", bodychange.title_ar);
    if (bodychange.description_ar !== "")formData.append("description_ar", bodychange.description_ar);
    if (bodychange.image !== "")formData.append("image",bodychange.image);

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
  
  useEffect(() => {
    axios
      .get("https://gradhub.hwnix.com/api/get_Byid/ar/" + id)
      .then((resp) => {
        setBodyChanges({
          ...bodychange,
          title_ar: resp.data.title_ar,
          description_ar: resp.data.description_ar,
          image: resp.data.image,
        });
      })
      .catch((err) => {
        setBodyChanges({
          ...bodychange,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  }, [bodychange.reload]);

  return (
    <div className="body-uCH">
      <div className="container-u-CH">
        <form onSubmit={handleSubmit}>
          <div className="row-CH">
            <div className=" clo-25-CH">
              <label htmlFor="title" className="label-u-CH">
                العنوان:
              </label>
            </div>
            <div>
              <input
                type="text"
                id="title"
                value={bodychange.title_ar}
                //onChange={handleSubmit}
                //onChange={(e) => setBodyChanges(e.target.value)}
                onChange={(e) => setBodyChanges({ ...bodychange, title_ar: e.target.value })}
              />
            </div>
          </div>
          <div className="row-CH">
            <div className=" clo-25-CH">
              <label htmlFor="description" className="label-u-CH">
                الوصف:
              </label>
            </div>
            <div>
              <textarea
                id="description-u-CH"
                value={bodychange.description_ar}
                //onChange={handleSubmit}
                //onChange={(e) => setBodyChanges(e.target.value)}
                onChange={(e) => setBodyChanges({ ...bodychange, description_ar: e.target.value })}
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
                //onChange={handleSubmit}
                //onChange={(e) => setBodyChanges(e.target.files[0])}
                onChange={(e) => setBodyChanges({ ...bodychange, image: e.target.value })}
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

export default UpdateBodyChangesAr;
