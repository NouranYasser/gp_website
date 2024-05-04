import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/babygrowthMonth.css";

const TipsAndActivitiesMonth18 = () => {
  const [tips, setTips] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setTips({ ...tips, loading: true });
    axios
      .get(`https://gradhub.hwnix.com/api/get_tip/18/en`)
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
      .delete(`http://localhost:8000/api/delete/${id}`)
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
        {tips.err && <p>{tips.err}</p>}
        {tips.loading ? (
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
                {tips.results.map((tip) => (
                  <tr key={tip.id}>
                    <td>{tip.title}</td>
                    <td>{tip.description}</td>
                    <td>
                      <Link to={"/UpdateTipsAndActivities/" + tip.id}>
                        <button className="btnUpdate">Update</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btnDelete"
                        onClick={() => {
                          deleteBabygrowth(tip.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Link to={"/TipsAndActivitiesMonth18Ar"}>
                    <button className="btnArabic">Arabic</button>
        </Link>

          </div>
        )}
      </div>
    </>
  );
};

export default TipsAndActivitiesMonth18;
