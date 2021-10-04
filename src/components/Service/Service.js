import React, { Component, useEffect, useState } from 'react';
import AllService from '../AllService/AllService';
import './Service.css'

// Service Component 
const Service = () => {
    const [serviceData,setServiceData] = useState([]);
    // fetch all service from  api  
    useEffect(()=>{
        fetch('fackdata.JSON')
            .then(res => res.json())
            .then(data => setServiceData(data))
    },[])
    return (
        <div>
            <div className="container">
                <div className="service">
                    <div className="text-center mb-5">
                        <h6>Service page</h6>
                        <h3>welcome to our service</h3>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
                        {/* call AllService og api  */}
                        {
                            serviceData.map(GetserviceData => <AllService serviceData={GetserviceData}></AllService>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;