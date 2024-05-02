import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/babygrowthMonth.css";
const BabyGrowthMonth7Ar = () => {
  const [babygrowths, setBabygrowths] = useState({
    loading: true,
    results: {},
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setBabygrowths({ ...babygrowths, loading: true });
    axios
      .get(`https://gradhub.hwnix.com/api/get_babyGrowth_7/ar`)
      .then((resp) => {
        setBabygrowths({
          ...babygrowths,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setBabygrowths({
          ...babygrowths,
          loading: false,
          err: "Something went wrong, please try again later!",
        });
      });
  }, [babygrowths.reload]);

  const deleteBabygrowth = (id) => {
    axios
      .delete(`https://gradhub.hwnix.com/api/delete_desc/${id}`)
      .then((resp) => {
        setBabygrowths({ ...babygrowths, reload: babygrowths.reload + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
      <div className="bmo">
        {babygrowths.err && <p>{babygrowths.err}</p>}
        {babygrowths.loading ? (
          <p>Loading...</p>
        ) : (
         <div className="div-container"> 
         <table className="table-content">
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
                      deleteBabygrowth(babygrowths.results.id);
                    }}
                  >
                    إزالة
                  </button>
                </td>
                <td>
                  
                  <Link to={"/UpdateBabygrowth/" + babygrowths.results.id}>
                    <button className="btnUpdate">تعديل</button>
                  </Link>
                  </td>
                  
               
                <td>
                  {babygrowths.results.FullSrc ? (
                    <img
                      src={babygrowths.results.FullSrc}
                      alt="Baby Image"
                      style={{ maxWidth: '80%', maxHeight: '80%' }}
                    />
                  ) : (
                    <span>No image available</span>
                  )}
                </td>
                <td>{babygrowths.results.month}</td>
                <td>{babygrowths.results.description_ar}</td>
                <td>{babygrowths.results.title_ar}</td>
              </tr>
            </tbody>
          </table>
          <Link to={"/BabyGrowthMonth7"}>
                    <button className="btnArabic">English</button>
                  </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default BabyGrowthMonth7Ar;