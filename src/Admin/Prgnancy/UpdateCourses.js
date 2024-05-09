import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import"../../style/updatecourses.css";
function UpdateCourses() {
  const [courses, setCourses] = useState({
    description: "",
    video:"",
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
    if (courses.description !== '') formData.append('description', courses.description);
    if (courses.video !== '') formData.append('video', courses.video);
    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/Courses")
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  useEffect(() => {
    axios
      .get("https://gradhub.hwnix.com/api/get_vedio/en/" + id)
      .then((resp) => {
        setCourses({
          ...courses,
          description: resp.data.description,
          video : resp.data.video,
        });
      })
      .catch((err) => {
        setCourses({
          ...courses,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  }, [courses.reload]);

  return (
    <div className='body-u-C'>
    <div className='container-u-C'>
      <form onSubmit={handleSubmit}>
     
        <div className='row-C'>
      <div className=' clo-25-C'>
        <label htmlFor="description"className='label-u-C'>Description:</label></div>
        <div>
        <textarea
          id="description-C"
          value={courses.description}
          onChange={(e) => setCourses({ ...courses, description: e.target.value })}

        /></div>
        </div>
      
        <div className='row-C'>
      <div className=' clo-25-C'>
        <label htmlFor="Video" className='label-u-C'>Video URL:</label></div>
        <div>
        <input
          type="text"
          id="Video"
          value={courses.video}
          onChange={(e) => setCourses({ ...courses, video: e.target.value })}
        /></div>
        </div>
        <div class="row">
       
        <button type="submit" className='b-u-C'>Submit</button></div>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
    
  );
}

export default UpdateCourses;