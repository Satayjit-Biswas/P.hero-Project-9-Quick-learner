import React from 'react';
import Rating from 'react-rating'
import './AllService.css'

const AllService = (props) => {
    // get data
    const {img,teacherName, title,time ,price,student,rating,review} = props.serviceData
    return (
        <div className="col mb-4">
            <div className="study_sub_box">
                <div className="study_sub_box_img">
                    <img src={img} alt="" className="img-fluid" />
                </div>
                <div className="study_sub_box_title">
                    <h5>Teacher Name : {teacherName}</h5>
                    <p> Course title :{title}</p>
                    <p>Total time : <i class="far fa-clock"></i>  {time}</p>
                    <p>Price : {price}$</p>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <p> <i class="far fa-user"></i>  {student}</p>
                        <div className="star">
                            {   
                                /* star rating  */
                                <Rating
                                    initialRating={ rating }
                                    emptySymbol="far fa-star rate-color"
                                    fullSymbol="fas fa-star rate-color"
                                    readonly
                                />
                            }
                            ({review})
                        </div>
                    
                    </div>
                     {/* Enroll btn  */}
                    <a href="#" className="custom_btn">Enroll Now</a>
                </div>
            </div>
        </div>
    );

};

export default AllService;