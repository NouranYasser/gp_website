import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/updateExercises.css";

function UpdateExerciseAr() {
  const [exercises, setExercises] = useState({
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
    if (exercises.description_ar !== '') formData.append('description_ar', exercises.description_ar);
    if (exercises.video !== '') formData.append('video', exercises.video);

    try {
      const response = await axios.post(`https://gradhub.hwnix.com/api/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.Result);
      navigate("/ExercisesAr")
    } catch (error) {
      setMessage('There is something wrong');
    }
  };

  
  useEffect(() => {
    axios
      .get("https://gradhub.hwnix.com/api/get_vedio/ar/" + id)
      .then((resp) => {
        setExercises({
          ...exercises,
          description_ar: resp.data.description_ar,
          video : resp.data.video,
        });
      })
      .catch((err) => {
        setExercises({
          ...exercises,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  }, [exercises.reload]);

  return (
    
      <div className='body-u-EX'>
    <div className='container-u-EX'>
      <form onSubmit={handleSubmit}>
      
        <div className='row-EX'>
      <div className=' clo-25-EX'>
        <label htmlFor="description"className='label-u-EX'>Description:</label></div>
        <div>
        <textarea
          id="description-E"
          value={exercises.description_ar}
          onChange={(e) => setExercises({ ...exercises, description_ar: e.target.value })}

        /></div>
        </div>

        

        <div className=' clo-25-EX'>
        <label htmlFor="description"className='label-u-EX'>Video URL:</label></div>
        <div>
        <textarea
          value={exercises.video}
          onChange={(e) => setExercises({ ...exercises, video: e.target.value })}

        /></div>
      
        <div class="row-EX">
        <button type="submit"className='b-u-EX'>Submit</button></div>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
    
  );
}

export default UpdateExerciseAr;