import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div classname="justify-content-center">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-contact-info">
                                    <i className="bx bx-envelope"></i>
                                    <h3>Email Us:</h3>
                                    <p><a href="mailto:contact@tonomy.foundation"></a>contact@tonomy.foundation</p>
                                    <br></br>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-contact-info">
                                    <i className="bx bx-phone-call"></i>
                                    <h3>Call Us:</h3>
                                    <p>Tel. + <a href="tel:31630184743">(31) 630184743</a></p>
                                    <br></br>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-contact-info">
                                    <i className="bx bx-location-plus"></i>
                                    <h3>Baarn</h3>
                                    <p>35 F Thorbeckelaan,The Netherlands,3741TR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;