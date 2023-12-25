import React from "react";
// import { Link } from "react-router-dom";
const Navbar = (props) => {
 

  return (
    <div class="navbar1">
        <nav class="navbar navbar-expand-lg navbar-dark n1" style={{ color:"white"}}>
  <a class="navbar-brand mx-2 navbar1" style={{fontSize:"larger"}} href="#">OCR Web</a>
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active navbarelementhover" >
        <a class="nav-link" style={{fontSize:"larger"}} href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active navbarelementhover">
        <a class="nav-link" style={{fontSize:"larger"}} href="#">About</a>
      </li>
      <li class="nav-item active navbarelementhover">
        <a class="nav-link" style={{fontSize:"larger"}} href="#">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
    
  );
};

export default Navbar;
