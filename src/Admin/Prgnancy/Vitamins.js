import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import"../../style/Vitamins.css";

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
        <br></br>
      <Link to="/AddVitamin">
          <button className="btn-addBCh"> Add Data in Vitamins</button>
         </Link>
        {vitamines.err && <p>{vitamines.err}</p>}
        {vitamines.loading ? (
          <p>Loading...</p>
        ) : (
          
          <div className="div-container-v">
           
          <table className="table-content-v">
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
                    <Link to={"/UpdateVitamins/" + vitamine.id}>
                      <button className="btnUpdate-v">Update</button>
                    </Link>
                  </td>

                  <td>
                    <button
                      className="btnDelete-v"
                      onClick={() => deleteVitamines(vitamine.id)}
                    >
                      Delete
                    </button>
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
