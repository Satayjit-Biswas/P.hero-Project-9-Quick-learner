import React, { useEffect, useState } from 'react';
import Trainer from '../Trainer/Trainer';
import './About.css'
// about component 
const About = () => {
    const [trainerdata,setTrainerdata] = useState([]);
    // fetch Trainer 
    useEffect(()=>{
        fetch('trainer.JSON')
            .then(res => res.json())
            .then(data => setTrainerdata(data))
    },[])
    return (
        <div className="container">
            <div className="about">
                <div className="text-center"> 
                    <h6>About page</h6>
                    <h3>welcome to about page </h3>
                
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 my-5">
                    {   
                        /* call Trainer of api */
                        trainerdata.map(TrainerDataPass => <Trainer GetTrainerData={TrainerDataPass}></Trainer>)
                    }
                </div>
            </div>
        </div>
    );
};

export default About;