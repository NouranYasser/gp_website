import React from 'react';
import Sidebar from "./Sidebar";
import "../../style/Pregnancy.css";



function BabyHome() {

  return (
    <>
      <Sidebar />
      <div className='pfot'>
      <div className='main-divp'>
        {/* <form className="form-p" onSubmit={handleSubmit}>
          <label htmlFor="category_id" className='label-pregnancy'>Category ID:</label>
          <input className='outbox'
            type="text"
            id="category_id"
            value={category_id}
            onChange={(e) => setCategoryId(e.target.value)}
          />


          <label htmlFor="title"  className='label-pregnancy'>Title:</label>
          <input className='outbox'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />


          <label htmlFor="description"  className='label-pregnancy'>Description:</label><br></br>

          <textarea

            id="description-P"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br></br>
          <label htmlFor="month"  className='label-pregnancy'>Month:</label><br></br>
          <input className='outbox'
            type="text"
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />


          <label htmlFor="image"  className='label-pregnancy'>Image:</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <br></br><br></br>
          <button type="submit" className='b-pregnancy'>Submit</button>
        </form>
        {message && <p>{message}</p>} */}
      </div>
      </div>
      <div></div>

    </>
  );

}
export default BabyHome;


