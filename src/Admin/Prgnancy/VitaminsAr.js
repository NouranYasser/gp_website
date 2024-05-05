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
      .get("https://gradhub.hwnix.com/api/get_vitamins/ar")
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
      .delete(`https://gradhub.hwnix.com/api/delete_desc/${id}`)
      .then((resp) => {
        setVitamines({ ...vitamines, reload: vitamines.reload + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className='v_foot'>
       
      <div className="b_conV">
          <Link to="/Vitamins">
          <button className="btnArabic-c"> English</button>
         </Link></div>

        {vitamines.err && <p>{vitamines.err}</p>}
        {vitamines.loading ? (
          <p>Loading...</p>
        ) : (
          
          <div className="div-container-v">
           
          <table className="table-content-v">
            <thead>
              <tr>
              <th></th>
                <th></th>
                <th>الصورة</th>
                <th>الوصف</th>
                <th>العنوان</th>
              </tr>
            </thead>
            <tbody>
              {vitamines.results.map((vitamine) => (
                <tr key={vitamine.id}>
                                    <td>
                    <button
                      className="btnDelete-v"
                      onClick={() => deleteVitamines(vitamine.id)}
                    >
                      إزالة
                    </button>
                    
                  
                    </td>
                    <td>
                    <Link to={"/UpdateVitamins/" + vitamine.id}>
                      <button className="btnUpdate-v">تعديل</button>
                    </Link>
                  </td>
                  <td>
                      {vitamine.FullSrc ? (
                        <img
                          src={vitamine.FullSrc}
                          alt="Vitamin Image"
                          style={{ maxWidth: "80px", maxHeight: "80px" }}
                        />
                      ) : (
                        <span>No image available</span>
                      )}
                    </td>

                    <td>{vitamine.description_ar}</td>
                    <td>{vitamine.title_ar}</td>
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
