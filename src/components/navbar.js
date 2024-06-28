import React from 'react';


function Navbar() {
    return (
    <nav className="navbar navbar-toggleable-md mb-4 top-bar navbar-static-top sps sps--abv">
        <div className="container">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Burn<span>out</span></a>
      <div className="collapse navbar-collapse" id="navbarCollapse1">
        <ul className="navbar-nav ml-auto">
         <li className="nav-item active"> <a className="nav-link" href="#myCarousel">Home <span className="sr-only">(current)</span></a> </li>
        <li className="nav-item"> <a className="nav-link" href="#benefits">Benefits</a> </li>
        <li className="nav-item"> <a className="nav-link" href="#about">About</a> </li>
        <li className="nav-item"> <a className="nav-link" href="#blog">Blog</a> </li>
        <li className="nav-item"> <a className="nav-link" href="#gallery">Image Gallery</a> </li>
        <li className="nav-item"> <a className="nav-link" href="#contact">Contact</a> </li>
        </ul>
      </div>
            </div>
    </nav>
    );
}

export default Navbar;
