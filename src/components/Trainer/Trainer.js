import React from 'react';
import './Trainer.css'

const Trainer = (props) => {
    console.log(props)
    const {img, name ,profession,Age ,student} = props.GetTrainerData
    return (
        <div className="col mb-4">
            <div className="study_sub_box">
                <div className="study_sub_box_img">
                    <img src={img} alt="" className="img-fluid" />
                </div>
                <div className="study_sub_box_title">
                    <h5>Name : {name}</h5>
                    <p>Age :{Age}</p>
                    <p>Profession : {profession} Trainer</p>
                    <p>Total Student : {student}</p>
                    <a href="#" className="custom_btn">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Trainer;