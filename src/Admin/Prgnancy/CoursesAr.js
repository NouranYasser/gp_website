import React from "react";
import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style/Courses.css";


const CoursesAr = () => { 
  const [courses, setCourses] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setCourses({ ...courses, loading: true });
    axios
      .get("https://gradhub.hwnix.com/api/get_courses/ar")
      .then((resp) => {
        setCourses({
          ...courses,
          results: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setCourses({
          ...courses,
          loading: false,
          err: "Something went wrong, please try again later!",
        });
      });
  }, [courses.reload]);

  const deleteCourse = (id) => {
    axios
      .delete(`https://gradhub.hwnix.com/api/delete/${id}`)
      .then((resp) => {
        setCourses({ ...courses, reload: courses.reload + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
     <div className="bho">    
      
        {courses.err && <p>{courses.err}</p>}
        {courses.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="div-C-container">
          <table className="table-content-C">
            <thead>
              <tr>
                <th></th>
                <th></th>  
                <th>الڤيديو</th>
                <th>الوصف</th>
                             
              </tr>
            </thead>
            <tbody>
              {courses.results.map((course) => (
                <tr key={course.id}>
                   <td>
                    <button
                      className="btnDelete-C"
                      onClick={() => deleteCourse(course.id)}
                    >
                      إزالة
                    </button>
                    </td> 
                    <td>
                    <Link to={'/UpdateCourses/'+ course.id}>
                      <button className="btnUpdate-C">تعديل</button>
                    </Link>             

                  </td>
                  <td>
                    {course.video ? (
                      <iframe
                      src={course.video}
                      // width="640"
                      // height="360"
                      frameborder="0"
                      // allowfullscreen
                    ></iframe>
                    ) : (
                      <span>No video available</span>
                    )}
                  </td>          
                    
                  <td>{course.description_ar}</td>
                   {/* <td>{course.title_ar}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
          <Link to={"/Courses"}>
                    <button className="btnArabic">English</button>
                  </Link>
          </div>
          
        )}
        
           <div>

      </div>
      </div>
      
    </>
  );
};
export default CoursesAr;
