import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/babygrowthMonth.css";

const BabyGrowthMonth9 = () => {
  const [babygrowths, setBabygrowths] = useState({
    loading: true,
    results: {},
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setBabygrowths({ ...babygrowths, loading: true });
    axios
      .get("https://gradhub.hwnix.com/api/get_babyGrowth_9")
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
                <td>{babygrowths.results.title}</td>
                <td>{babygrowths.results.description}</td>
                <td>{babygrowths.results.month}</td>
                <td>
                  {babygrowths.results.FullSrc ? (
                    <img
                      src={babygrowths.results.FullSrc}
                      alt="Baby Image"
                      style={{ maxWidth: '10%', maxHeight: '10%' }}
                    />
                  ) : (
                    <span>No image available</span>
                  )}
                </td>
                <td>
                 
                  <Link to={"/UpdateBabygrowth/" + babygrowths.results.id}>
                    <button className="btnUpdate">Update</button>
                  </Link>
                  </td>
                  <td>
                  <button
                    className="btnDelete"
                    onClick={(e) => {
                      deleteBabygrowth(babygrowths.results.id);
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

export default BabyGrowthMonth9;