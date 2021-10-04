import React, { useEffect, useState } from 'react';
import "./Home.css"
import sliderImg from '../../images/slider-img-002.png'
import bgIcon from '../../images/slider-ob-03.png'
import Study from '../Study/Study';
import Contact from '../Contact/Contact';
import AllService from '../AllService/AllService';
import Topservice from '../Topservice/Topservice';



const Home = () => {
    return (
        <header>
            <div className="slider position-relative">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-8">
                            <h5>Welcome to Quick-Learner </h5>
                            <h2>Take complete controver your education. </h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit quia iusto maxime tenetur. Molestias sed placeat saepe nemo quidem! Fugit laborum voluptate ....</p>
                            <button className="btn btn-lg btn-danger mt-4">Try now</button>
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
            <Study></Study>
            <Topservice></Topservice>
            <Contact></Contact>
        </header>
    );
};

export default Home;