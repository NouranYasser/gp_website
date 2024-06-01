import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthUser } from "../src/helper/Storage"
import  "./App.css"
import axios from "axios";
 import myImage from "../src/images/baby born-02.png"
 import "bootstrap/dist/css/bootstrap.min.css"
const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://gradhub.hwnix.com/api/loginAdmin",
        { email, password }
      );
      console.log(response.data);
      navigate("/HomePage");
      setAuthUser(response.data);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data.errors);
    }
  };

  return (
    <>
      <div className="contentApp">
      
        <div className="bodyForm">
         
         <div className="row mt-3">
          
          <div className="col-md-10 m-5 ps-5 mt-5 pt-5">
          <form className="log-form  " onSubmit={handleSubmit}>
          {/* <label htmlFor="email" className="label-log">Email:</label> */}
          <img src={myImage} alt="My Image" class="image"  width="200px" height="200px"/>
            <input
              className="output-box"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {/* <label htmlFor="password" className="label-log">Password:</label> */}
            <input
              className="output-box"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />

            <button type="submit" className="signadmin">
              Login
            </button>
          </form>
          </div>
          <div className="col-md-2"></div>
          
          </div>
          
           </div>
<br></br>
          {/* <div className="register-link">
            <p className="pp">Don't have an account?</p>
            <Link to="/SignUp">
              <button className="signadmin"> Sign Up</button>
            </Link>
          </div> */}
          
        </div>
      
    </>
  );
};

export default App;

