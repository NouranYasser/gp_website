import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/babygrowthMonth.css";

const BodyChangeMonth2Ar = () => {
  const [bodychanges, setBodychanges] = useState({
    loading: true,
    results: {},
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setBodychanges({ ...bodychanges, loading: true });
    axios
      .get("https://gradhub.hwnix.com/api/get_bodyChange_2/ar")

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
        {bodychanges.err && <p>{bodychanges.err}</p>}
        {bodychanges.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="div-container"> 
          <table  className="table-content">
            <thead>
              <tr>
                <th></th>
                <th></th>  
                <th>الصورة</th>             
                <th>الشهر</th>              
                <th>الوصف</th>
                <th>العنوان</th>             
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>
                  <button
                    className="btnDelete"
                    onClick={(e) => {
                      deleteBodychange(bodychanges.results.id);
                    }}
                  >
                    إزالة
                  </button>
                  
                  </td>
                  <td>
                <Link to={"/UpdateBodyChange/" + bodychanges.results.id}>
                    <button className="btnUpdate">تعديل</button>
                  </Link>
                  </td>
                
                <td>
                  {bodychanges.results.FullSrc ? (
                    <img
                      src={bodychanges.results.FullSrc}
                      alt="Baby Image"
                      style={{ maxWidth: '1000px', maxHeight: '100px' }}
                    />
                  ) : (
                    <span>No image available</span>
                  )}
                </td>
                <td>{bodychanges.results.month}</td>
                <td>{bodychanges.results.description_ar}</td>
                <td>{bodychanges.results.title_ar}</td>
                
              </tr>
            </tbody>
          </table>
          </div>
        )}

      </div>
    </>
  );
};

export default BodyChangeMonth2Ar;
