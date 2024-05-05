import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/babygrowthMonth.css";
import { useParams } from "react-router-dom";
const ShowDetails = () => {
  const [details, setDetails] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });
  const { id } = useParams();
  useEffect(() => {
    setDetails({ ...details, loading: true });
    axios
      .get(`https://gradhub.hwnix.com/api/get_issue/${id}/en`)   

      .then((resp) => {
        setDetails((prevDetails) => ({
          ...prevDetails,
          results: resp.data,
          loading: false,
          err: null,
        }));
      })
      .catch((err) => {
        console.log(err); // Log the error
      });
  }, [details.reload]);



  const deleteBabygrowth = (id) => {
    axios
      .delete(`http://localhost:8000/api/delete/${id}`)
      .then((resp) => {
        setDetails({ ...details, reload: details.reload + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bmo">
        {details.err && <p>{details.err}</p>}
        {details.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="div-container">
            <table className="table-content">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {details.results.map((result) => (
                  <tr key={result.id}>
                    <td>{result.title}</td>
                    <td>{result.description}</td>                
                     <td>
                      <Link to={"/Update/" + result.id}>
                        <button className="btnUpdate">Update</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btnDelete"
                        onClick={() => {
                          deleteBabygrowth(result.id);
                        }}
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
      </div>
    </>
  );
};

export default ShowDetails;
