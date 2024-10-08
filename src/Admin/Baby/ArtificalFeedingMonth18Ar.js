import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/babygrowthMonth.css";

const ArtificalFeedingMonth18Ar = () => {
  const [tips, setTips] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setTips({ ...tips, loading: true });
    axios
      .get(`https://gradhub.hwnix.com/api/get_BottleFeeding/18/ar`)
      .then((resp) => {
        setTips({
          ...tips,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setTips({
          ...tips,
          loading: false,
          err: "Something went wrong, please try again later!",
        });
      });
  }, [tips.reload]);

  const deleteBabygrowth = (id) => {
    axios
      .delete(`https://gradhub.hwnix.com/api/delete_desc/${id}`)
      .then((resp) => {
        setTips({ ...tips, reload: tips.reload + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bmo">
    <div className="b-con">          
    <Link to={"/ArtificalFeedingMonth18"}>
                    <button className="btnArabic-c">English</button>
        </Link>
        
    </div>
        {tips.err && <p>{tips.err}</p>}
        {tips.loading ? (
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
                {tips.results.map((result) => (
                  <tr key={result.id}>

                   <td>
                      <button
                        className="btnDelete"
                        onClick={() => {
                          deleteBabygrowth(result.id);
                        }}
                      >
                        ازالة
                      </button>
                    </td>
                    
                    <td>
                      <Link to={"/UpdateArtificalFeedingAr/" + result.id}>
                        <button className="btnUpdate">تعديل</button>
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

export default ArtificalFeedingMonth18Ar;
