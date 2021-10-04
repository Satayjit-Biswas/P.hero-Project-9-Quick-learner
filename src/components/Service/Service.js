import React, { useEffect, useState } from 'react';
import AllService from '../AllService/AllService';
import './Service.css'

const Service = () => {
    const [serviceData,setServiceData] = useState([]);
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
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
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