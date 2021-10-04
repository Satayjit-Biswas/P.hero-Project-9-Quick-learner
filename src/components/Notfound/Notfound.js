import React, { Component } from 'react';
import notfound from '../../images/notfound.png'
import './Notfound.css'

// notfound Component 
const Notfound = () => {
    return (
        <div>
            <div className="container">
                <div className="notfound">
                    <img src={notfound} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Notfound;