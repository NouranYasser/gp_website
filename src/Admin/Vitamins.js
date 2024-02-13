import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Vitamins = () => {
  const [vitamines, setVitamines] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setVitamines({ ...vitamines, loading: true });
    axios
      .get("https://gradhub.hwnix.com/api/get_vitamins")
      .then((resp) => {
        setVitamines({
          ...vitamines,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setVitamines({
          ...vitamines,
          loading: false,
          err: "Something went wrong, please try again later!",
        });
      });
  }, [vitamines.reload]);

  const deleteVitamines = (id) => {
    axios
      .delete(`http://localhost:8000/api/delete/${id}`)
      .then((resp) => {
        setVitamines({ ...vitamines, reload: vitamines.reload + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        {vitamines.err && <p>{vitamines.err}</p>}
        {vitamines.loading ? (
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
              {vitamines.results.map((vitamine) => (
                <tr key={vitamine.id}>
                  <td>{vitamine.title}</td>
                  <td>{vitamine.description}</td>
                  <td>{vitamine.month}</td>
                  <td>
                    {vitamine.results ? (
                      <td>
                        {vitamine.results.FullSrc ? (
                          <img
                            src={vitamine.results.FullSrc}
                            alt="Baby Image"
                            style={{ maxWidth: "10%", maxHeight: "10%" }}
                          />
                        ) : (
                          <span>No image available</span>
                        )}
                      </td>
                    ) : (
                      <td>No results available</td>
                    )}
                  </td>
                  <td>
                    <button
                      className="btnDelete"
                      onClick={() => deleteVitamines(vitamine.id)}
                    >
                      Delete
                    </button>

                    <Link to={"/UpdateVitamines/${vitamine.id}"}>
                      <button className="btnUpdate">Update</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}
        <div>
          {/* <iframe
          src={babygrowth.fullSrc}
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        ></iframe> */}
        </div>
      </div>
    </>
  );
};
export default Vitamins;
