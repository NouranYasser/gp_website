import React, { useState } from 'react';
import "../../style/ShowDetails.css";
//import Select from 'react-select';


function ShowDetails() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  

  return (
    <>
         
      <div className='main-form'>
        <form className="form-pppp">

          <label htmlFor="title"  className='label-Show'>Title:</label>
          <input className='outbox'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />


          <label htmlFor="description"  className='label-Show'>Description:</label><br></br>

          <textarea

            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
       
        </form>
    
      </div>
  
      
    </>
  );

}
export default ShowDetails;
