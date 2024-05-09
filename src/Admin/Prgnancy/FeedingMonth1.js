import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/FoodMonth.css";

const FoodMonth1 = () => {
  const [foods, setFoods] = useState({
    loading: true,
    results: {},
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setFoods({ ...foods, loading: true });
    axios
      .get("https://gradhub.hwnix.com/api/get_Food_1/en")
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
     <div className="b-con">
     <Link to={"/FeedingMonth1Ar"}>
                    <button className="btnArabic-c">Arabic</button>
                  </Link>
      </div>
        {foods.err && <p>{foods.err}</p>}
        {foods.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="div-container-fm">
          <table className="table-content-fm"> 
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{foods.results.title}</td>
                <td>{foods.results.description}</td>
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
                <td>

                <Link to={"/UpdateFood/" + foods.results.id}>
                    <button className="btnUpdate-fm">Update</button>
                </Link>              
                  </td>
                    <td>
                    <button
                    className="btnDelete-fm"
                    onClick={(e) => {
                      deleteFood(foods.results.id);
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

export default FoodMonth1;