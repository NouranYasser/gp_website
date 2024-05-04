import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "../../style/babygrowthMonth.css";

const ChildMilestonesMonth1Ar = () => {
  const [childs, setChilds] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setChilds({ ...childs, loading: true });
    axios
      .get(`https://gradhub.hwnix.com/api/get_ChildGrowth/1/ar`)
      .then((resp) => {
        setChilds({
          ...childs,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setChilds({
          ...childs,
          loading: false,
          err: "Something went wrong, please try again later!",
        });
      });
  }, [childs.reload]);

  const deleteChild = (id) => {
    axios
      .delete(`https://gradhub.hwnix.com/api/delete_desc/${id}`)
      .then((resp) => {
        setChilds({ ...childs, reload: childs.reload + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className='bmo'>
        <div className="b-con" >
        <Link to={"/ChildMilestonesMonth1"}>
                    <button className="btnArabic-c">English</button>
        </Link>
        </div>
        {childs.err && <p>{childs.err}</p>}
        {childs.loading ? (
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
                {childs.results.map((result) => (
                  <tr key={result.id}>

                   <td>
                      <button
                        className="btnDelete"
                        onClick={() => {
                          deleteChild(result.id);
                        }}
                      >
                        ازالة
                      </button>
                    </td>
                    
                    <td>
                      <Link to={"/Update/" + result.id}>
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

export default ChildMilestonesMonth1Ar;