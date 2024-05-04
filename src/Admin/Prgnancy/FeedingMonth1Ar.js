import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/FoodMonth.css";

const FoodMonth1Ar = () => {
  const [foods, setFoods] = useState({
    loading: true,
    results: {},
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setFoods({ ...foods, loading: true });
    axios
      .get("https://gradhub.hwnix.com/api/get_Food_1/ar")
      .then((resp) => {
        setFoods({
          ...foods,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setFoods({
          ...foods,
          loading: false,
          err: "Something went wrong, please try again later!",
        });
      });
  }, [foods.reload]);

  const deleteFood = (id) => {
    axios
      .delete(`http://localhost:8000/api/delete/${id}`)
      .then((resp) => {
        setFoods({ ...foods, reload: foods.reload + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
     <div className="fo-m_foot">
        {foods.err && <p>{foods.err}</p>}
        {foods.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="div-container-fm">
          <table className="table-content-fm"> 
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
                    className="btnDelete-fm"
                    onClick={(e) => {
                      deleteFood(foods.results.id);
                    }}
                  >
                    إزالة
                    
                  </button>
                  
                </td>   
                <td>

                <Link to={"/UpdateFood/" + foods.results.id}>
                    <button className="btnUpdate-fm">تعديل</button>
                </Link>              
                  </td> 
               
                <td>
                  {foods.results.FullSrc ? (
                    <img
                      src={foods.results.FullSrc}
                      alt="Baby Image"
                      style={{ maxWidth: '200px', maxHeight: '200px' }}
                    />
                  ) : (
                    <span>No image available</span>
                  )}
                </td>               
                <td>{foods.results.description_ar}</td>
                <td>{foods.results.title_ar}</td>
              </tr>
            </tbody>
          </table>
          <Link to={"/FeedingMonth1"}>
                    <button className="">English</button>
                  </Link>
          </div>
        )}

      </div>
    
        </>
  );
};

export default FoodMonth1Ar;