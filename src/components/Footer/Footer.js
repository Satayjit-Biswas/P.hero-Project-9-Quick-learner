import React, { Component } from 'react';
import './Footer.css'
import footerLogo from '../../images/logo.png'
// footer Component 
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_logo">
                    <img src={footerLogo} alt="" className="img-fluid" />
                </div>
                {/* social icon  */}
                <div className="footer_icon">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <p>Copyright 2021 Quick - Learner.</p>
            </div>
        </footer>
    );
};

export default Footer;