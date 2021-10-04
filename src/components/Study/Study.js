import React, { Component } from 'react';
import img1 from '../../images/img-box-1.jpg'
import img2 from '../../images/img-box-2.jpg'
import img3 from '../../images/img-box-3.jpg'
import './Study.css'

// study Component 
const Study = () => {
    return (
        <div>
            <div className="container">
                <div className="study text-center">
                    <h6>CHOOSE YOUR PATH</h6>
                    <h3>Study With Us</h3>
                </div>
                <div className="study_box">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-4 col-md-6 col-12 mt-4">
                            <div className="study_sub_box">
                                <div className="study_sub_box_img">
                                    <img src={img2} alt="" className="img-fluid"/>
                                </div>
                                <div className="study_sub_box_title">
                                    <h4>Graduate Programs</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae excepturi consectetur rem doloribus  ...</p>
                                    <a href="#" className="custom_btn">Join program</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mt-4">
                            <div className="study_sub_box">
                                <div className="study_sub_box_img">
                                    <img src={img1} alt="" className="img-fluid"/>
                                </div>
                                <div className="study_sub_box_title">
                                    <h4>Graduate Programs</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae excepturi consectetur rem doloribus  ...</p>
                                    <a href="#" className="custom_btn">Join program</a>
                                </div>
                            </div>
                        </div><div className="col-lg-4 col-md-6 col-12 mt-4">
                            <div className="study_sub_box">
                                <div className="study_sub_box_img">
                                    <img src={img3} alt="" className="img-fluid"/>
                                </div>
                                <div className="study_sub_box_title">
                                    <h4>Graduate Programs</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi beatae excepturi consectetur rem doloribus  ...</p>
                                    <a href="#" className="custom_btn">Join program</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Study;