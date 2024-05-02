import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Validation from "./SignUpValidation.js";
import Footer from "../../shared/Footer.js";
import axios from "axios";
import { setAuthUser } from "../../helper/Storage.js";
import Header from "../../components/Headerlogout.js";
import "../../style/SinUp.css"

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    // role:"",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("https://gradhub.hwnix.com/api/registerAdmin", values)
        .then((res) => {
          navigate("/Login");
          setAuthUser(res.data); // save the sinup in user data in local storage
        })
        .catch((err) => console.log(err));
    }
    // Add logic to handle form submission
  };

  return (
    <>
      <br />
      <section className="sign">
        <div className="SignUp">

          <form action="" onSubmit={handleSubmit}>

          <label htmlFor="name">Name:</label>
            <div className="output-box">
              
              <input
                type="name"
                placeholder="Enter name"
                name="name"
                onChange={handleInput}

              />
              {errors.name && (
                <span className="text-danger">{errors.name}</span>
              )}
            </div>
            <label htmlFor="email">Email:</label>
            <div className="output-box">
              
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={handleInput}
                className="cccs"
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            <label htmlFor="password">Password:</label>
            <div className="output-box">
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={handleInput}
                className="SignPassword"
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>
            <label htmlFor="phone">Phone:</label>
            <div className="output-box">
              
              <input
                type="text"
                placeholder="Enter phone"
                name="phone"
                onChange={handleInput}
                className="ccc"
              />
              {errors.phone && (
                <span className="text-danger">{errors.phone}</span>
              )}
            </div>
           <br></br> <hr></hr>
            <button type="submit" className="siii">
              Sign up
            </button>
            <br></br><br></br>
            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

          </form>
          <br></br><br></br> <br></br>

        </div>
        
      </section>
      
    </>
  );
};

export default SignUp;