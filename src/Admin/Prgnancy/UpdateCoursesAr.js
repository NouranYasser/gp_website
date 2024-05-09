import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import"../../style/updatecourses.css";
function UpdateCoursesAr() {
  const [courses, setCourses] = useState({
    description_ar: "",
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
    if (courses.description_ar !== '') formData.append('description_ar', courses.description_ar);
    if (courses.video !== '') formData.append('video', courses.video);
    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/CoursesAr")
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  useEffect(() => {
    axios
      .get("https://gradhub.hwnix.com/api/get_vedio/ar/" + id)
      .then((resp) => {
        setCourses({
          ...courses,
          description_ar: resp.data.description_ar,
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
        <label htmlFor="description"className='label-u-C'>:الوصف</label></div>
        <div>
        <textarea
          id="description-C"
          value={courses.description_ar}
          onChange={(e) => setCourses({ ...courses, description_ar: e.target.value })}

        /></div>
        </div>
      
        <div className='row-C'>
      <div className=' clo-25-C'>
        <label htmlFor="Video" className='label-u-C'>:لينك الڤيديو</label></div>
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

export default UpdateCoursesAr;