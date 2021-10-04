import React, { useEffect, useState } from 'react';
import './Topservice.css'
import { NavLink } from 'react-router-dom';
import AllService from '../AllService/AllService';


const Topservice = () => {
    const [ChooseServiceData,setChooseServiceData] = useState([]);
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
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 my-5">
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