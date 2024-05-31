import React from 'react';
import myImage from "../images/lo.png";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import "../style/Header.css";

const Header = () => {
  return (
    <>
{/*    
     
        <img src={myImage} alt="My Image" width="170px" height="150px" className="d-inline-block align-top mr-2" />
       <br></br>
        <nav className="navbar">
      
      <ul>
       
          <Link to="/SignUp">SignUp</Link>      
          <Link to="/Login">login</Link>
       
       
      </ul>
      
    </nav>
  <header/>     */}
{/* 
<Navbar expand="lg" bg="light" variant="light" sticky="top">
      <Navbar.Brand>
        <img src={myImage} alt="My Image" width="300px" height="200px" className="d-inline-block align-top mr-2" />
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
         
         
        </Nav>
        <Nav>
          <Nav.Item>
            <Button as={Link} to="/login" variant="outline-primary" className="mr-2">Login</Button>
          </Nav.Item>
          <Nav.Item>
            <Button as={Link} to="/signup" variant="primary">Sign Up</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar> */}

    </>
  );
};

export default Header;
