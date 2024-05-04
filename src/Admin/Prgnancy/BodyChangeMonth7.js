import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/babygrowthMonth.css";
const BodychangeMonth7 = () => {
  const [bodychanges, setBodychanges] = useState({
    loading: true,
    results: {},
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setBodychanges({ ...bodychanges, loading: true });
    axios
      .get("https://gradhub.hwnix.com/api/get_bodyChange_7/en")
      .then((resp) => {
        setBodychanges({
          ...bodychanges,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setBodychanges({
          ...bodychanges,
          loading: false,
          err: "Something went wrong, please try again later!",
        });
      });
  }, [bodychanges.reload]);

  const deleteBodychange = (id) => {
    axios
      .delete(`https://gradhub.hwnix.com/api/delete_desc/${id}`)
      .then((resp) => {
        setBodychanges({ ...bodychanges, reload: bodychanges.reload + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
     <div className="bmo">
     <div className="b-con">
      <Link to={"/BodaychangeMonth7Ar"}>
              <button className="btnArabic-c">Arabic</button>
            </Link></div>
        {bodychanges.err && <p>{bodychanges.err}</p>}
        {bodychanges.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="div-container">
          <table  className="table-content">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Month</th>
                <th>Image</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{bodychanges.results.title}</td>
                <td>{bodychanges.results.description}</td>
                <td>{bodychanges.results.month}</td>
                <td>
                  {bodychanges.results.FullSrc ? (
                    <img
                      src={bodychanges.results.FullSrc}
                      alt="Baby Image"
                      style={{ maxWidth: '10%', maxHeight: '10%' }}
                    />
                  ) : (
                    <span>No image available</span>
                  )}
                </td>
                <td>
                 
                  <Link to={"/UpdateBodyChange/" + bodychanges.results.id}>
                    <button className="btnUpdate">Update</button>
                  </Link>
                  </td>
               
                  <td>
                  <button
                    className="btnDelete"
                    onClick={(e) => {
                      deleteBodychange(bodychanges.results.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
         
          </div>
        )}
       
      </div>
    </>
  );
};

export default BodychangeMonth7;