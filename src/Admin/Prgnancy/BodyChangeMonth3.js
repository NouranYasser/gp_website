import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/babygrowthMonth.css";

const BodychangeMonth3 = () => {
  const [bodychanges, setBodychanges] = useState({
    loading: true,
    results: {},
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setBodychanges({ ...bodychanges, loading: true });
    axios
      .get("https://gradhub.hwnix.com/api/get_bodyChange_3/en")
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
                  <td>{bodychanges.results.title}</td>
                  <td>{bodychanges.results.description}</td>
                  <td>{bodychanges.results.month}</td>
                  <td>
                    {bodychanges.results.FullSrc ? (
                      <img
                        src={bodychanges.results.FullSrc}
                        alt="Baby Image"
                        style={{ maxWidth: "300px", maxHeight: "300px" }}
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
            <Link to={"/BodaychangeMonth3Ar"}>
              <button className="btnArabic">Arabic</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default BodychangeMonth3;
