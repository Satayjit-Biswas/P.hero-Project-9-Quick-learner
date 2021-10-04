import React from 'react';
import "./Header.css"
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
// header component 
const Header = () => {
return (
<div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <div className="logo">
                <NavLink className="navbar-brand" to="/"><img src={logo} alt="" className="img-fluid"/></NavLink>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            {/* menu  */}
                <ul className="navbar-nav ms-auto text-center">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/service">Service</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
);
};

export default Header;