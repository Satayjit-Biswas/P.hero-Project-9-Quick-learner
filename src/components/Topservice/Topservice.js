import React, { Component, useEffect, useState } from 'react';
import './Topservice.css'
import { NavLink } from 'react-router-dom';
import AllService from '../AllService/AllService';

// Topservice Component 
const Topservice = () => {
    const [ChooseServiceData,setChooseServiceData] = useState([]);
    // fetch top 4 service from  api  
    useEffect(()=>{
        fetch('fackdata.JSON')
            .then(res => res.json())
            .then(data => setChooseServiceData(data.slice(0,4)))
    },[])
    return (
        <div className='topservice'>
            <div className="container">
                <div className="text-center">
                    <h6>our service</h6>
                    <h3>Choose our service</h3>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 my-5">
                        {
                            ChooseServiceData.map(GetserviceData => <AllService serviceData={GetserviceData}></AllService>)
                        }
                    </div>
                    <NavLink to='/service' className="custom_btn">More Service</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Topservice;