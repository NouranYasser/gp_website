// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { setAuthUser } from "../../helper/Storage";
// import { Link } from "react-router-dom";
// import "../../style/login.css";
// import axios from "axios";
// import myImage from "../../images/lo.png";




// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://gradhub.hwnix.com/api/loginAdmin",
//         { email, password }
//       );
//       console.log(response.data);
//       navigate("/HomePage");
//       setAuthUser(response.data);
//     } catch (error) {
//       console.log(error.response.data);
//       setErrors(error.response.data.errors);
//     }
//   };

//   return (
//     <>
    
//       <div className="content">
//       <div className="bodyForm">
         
         
//       <img src={myImage} alt="My Image" width="180px" height="160px" className="d-inline-block align-top mr-2" />
         
         
//           {/* {errors.length > 0 && (
//             <div>
//               <h2>Errors:</h2>
//               <ul>
//                 {errors.map((error, index) => (
//                   <li key={index}>{error.msg}</li>
//                 ))}
//               </ul>
//             </div>
//           )} */}

//           {/* <div>
//           <img src={myImage} alt="My Image" class="image"  width="10000px" height="300px"/>
//           </div> */}
//           <form className="log-form" onSubmit={handleSubmit}>
//           {/* <label htmlFor="email" className="label-log">Email:</label> */}
//             <input
//               className="output-box"
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//             />
//             {/* <label htmlFor="password" className="label-log">Password:</label> */}
//             <input
//               className="output-box"
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//             />

//             <button type="submit" className="signadmin">
//               Login
//             </button>
//           </form>
// <br></br>
//           <div className="register-link">
//             <p className="pp">Don't have an account?</p>
//             <Link to="/SignUp">
//               <button className="signadmin"> Sign Up</button>
//             </Link>
//           </div>
          
//         </div>
//       </div>
//       <br></br><br></br>
//     </>
//   );
// };

// export default Login;
