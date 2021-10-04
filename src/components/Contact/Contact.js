import React from 'react';
import './Contact.css'
// contact component 
const Contact = () => {
return (
<div>
    <div className="container">
        <div className="contact">
            <div className="text-center mb-5">
                <h6>Contact page</h6>
                <h3>Welcome to contact page</h3>
            </div>
            {/* form  */}
            <form className="row g-3">
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2"
                        placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="custom_btn">Send</button>
                </div>
            </form>
        </div>
    </div>
</div>
);
};

export default Contact;