import React, { useEffect, useState } from 'react';
import "./Home.css"
import sliderImg from '../../images/slider-img-002.png'
import bgIcon from '../../images/slider-ob-03.png'
import Study from '../Study/Study';
import Contact from '../Contact/Contact';
import Topservice from '../Topservice/Topservice';
import { NavLink } from 'react-router-dom';

// home component 
const Home = () => {
    return (
        <div>
            <div className="slider position-relative">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-8">
                            <h5>Welcome to Quick-Learner </h5>
                            <h2>Take complete controver your education. </h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit quia iusto maxime tenetur. Molestias sed placeat saepe nemo quidem! Fugit laborum voluptate ....</p>
                            <NavLink to='/service' className="btn btn-lg btn-danger mt-4 px-5">Try now</NavLink>
                        </div>
                        <div className="col-lg-4">
                            <div className="slider_right">
                                <img src={sliderImg} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={bgIcon} alt="" className="img-fluid bgIcon"/>
            </div>
            {/* Study component  */}
            <Study></Study>
            {/* topservice component  */}
            <Topservice></Topservice>
            {/* contact component  */}
            <Contact></Contact>
        </div>
    );
};

export default Home;