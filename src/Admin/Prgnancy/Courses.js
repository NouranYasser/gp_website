import React from "react";
import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import {DefaultPlayer as video } from 'react-html5video';
import "../../style/Courses.css";
import Footer from "../../shared/Footer";

const Courses = () => {
  const [courses, setCourses] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setCourses({ ...courses, loading: true });
    axios
      .get("https://gradhub.hwnix.com/api/get_courses")
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
      <div>
        {courses.err && <p>{courses.err}</p>}
        {courses.loading ? (
          <p>Loading...</p>
        ) : (
          <div className="div-C-container">
          <table className="table-content-C">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Video</th>
                <th></th>
                <th></th>                
              </tr>
            </thead>
            <tbody>
              {courses.results.map((course) => (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.description}</td>
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
                 
                    <td>
                    <Link to={'/UpdateCourses/${course.id}'}>
                      <button className="btnUpdate-C">Update</button>
                    </Link>             

                  </td>
                  <td>
                    <button
                      className="btnDelete-C"
                      onClick={() => deleteCourse(course.id)}
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
      <Footer/>
    </>
  );
};
export default Courses;
