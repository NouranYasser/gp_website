import React from "react";
import "../style/Header.css";
import {Link} from "react-router-dom";
import { removeAuthUser } from "../helper/Storage";


const Header = () => {
  const handleLogout = () => {
    removeAuthUser();
    window.location.href = "/";
  };
  return (<header>


    <button className="Newlogout" onClick={handleLogout}>Logout</button>

    <nav className="navbar">


    </nav>
  </header>
  );
};
export default Header;