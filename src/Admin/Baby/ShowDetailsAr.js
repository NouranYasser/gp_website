import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/ShowDetailsAr.css";

import { useParams } from "react-router-dom";
const ShowDetailsAr = () => {
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
      .get(`https://gradhub.hwnix.com/api/get_issue/${id}/ar`)
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
                  <th></th>
                  <th></th>
                  <th>الوصف</th>
                  <th>العنوان</th>
                  
                </tr>
              </thead>
              <tbody>
                {details.results.map((result) => (
                  <tr key={result.id}>

                    <td>
                      <button
                        className="btnArabicDelete"
                        onClick={() => {
                          deleteBabygrowth(result.id);
                        }}
                      >
                        إزالة
                      </button>
                      </td>
                    
                      <td>
                      <Link to={"/UpdateIssueAr/" + result.id}>
                        <button className="btnArabicUpdate">تعديل</button>
                      </Link>
          
                    </td>
                    <td>{result.description_ar}</td>     
                    <td>{result.title_ar}</td>           
                     
                   
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

export default ShowDetailsAr;


