import React, { useState ,useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/updateBodychange.css";

function UpdateIssue() {
  const [issue, setIssues] = useState({
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
   setIssues({ ...issue, loading: true });

    const formData = new FormData();
    if (issue.title !== "")formData.append("title", issue.title);
    if (issue.description !== "")formData.append("description", issue.description);

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
      navigate("/CommonIssues");
    } catch (error) {
      setMessage("There is something wrong");
    }
  };
  
  useEffect(() => {
    axios
      .get( `https://gradhub.hwnix.com/api/get_issueById/en/${id}`)
      .then((resp) => {
        setIssues({
          ...issue,
          title: resp.data.title,
          description: resp.data.description,
       
        });
      })
      .catch((err) => {
        setIssues({
          ...issue,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  }, [issue.reload]);
 
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
          value={issue.title}
          onChange={(e) => setIssues({ ...issue, title: e.target.value })}
        /></div>
         </div>
        <div className='row-CH'>
        <div className=' clo-25-CH'>
        <label htmlFor="description" className='label-u-CH'>Description:</label></div>
        <div>
        <textarea
          id="description-u-CH"
          value={issue.description}
          onChange={(e) => setIssues({ ...issue, description: e.target.value })}
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

export default UpdateIssue;