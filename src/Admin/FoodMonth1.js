import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/babygrowthMonth.css";

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
      .get("https://gradhub.hwnix.com/api/get_Food_1")
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
     <div>
        {foods.err && <p>{foods.err}</p>}
        {foods.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="div-container">
          <table className="table-content"> 
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Month</th>
                <th>Image</th>
                <th>Action</th>
              
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{foods.results.title}</td>
                <td>{foods.results.description}</td>
                <td>{foods.results.month}</td>
                <td>
                  {foods.results.FullSrc ? (
                    <img
                      src={foods.results.FullSrc}
                      alt="Baby Image"
                      style={{ maxWidth: '10%', maxHeight: '10%' }}
                    />
                  ) : (
                    <span>No image available</span>
                  )}
                </td>
                <td>
                  <button
                    className="btnDelete"
                    onClick={(e) => {
                      deleteFood(foods.results.id);
                    }}
                  >
                    Delete
                  </button>
                  <Link to={"/UpdateFood/" + foods.results.id}>
                    <button className="btnUpdate">Update</button>
                  </Link>
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