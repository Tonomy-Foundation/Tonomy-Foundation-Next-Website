import React, { Component } from 'react';

class WhyChooseUs2 extends Component {
    render() {
        return (
            <section className="choose-ue-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>Our Platform Takes You Solution Into The Future</h2>
                        <p>Tonomy ID stands alone in the market, revolutionizing digital identity with our unparalleled innovation, advanced security features, and user-centric design, setting a new standard that leaves competitors in the dust.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span><i className="flaticon-technical-support"></i></span>
                                        <h3>Future Proofing Cybersecurity</h3>
                                        <p>Unlike previous cybersecurity systems that focus on server hardening, Tonomy ID moves user data/authentication to the user's phone, <strong>removing server-breach attack surface</strong>.</p>
                                    </li>
                                    {/* <li className="ml">
                                        <span>02 <i className="flaticon-shield"></i></span>
                                        <h3>Technical Support</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>
                                    <li className="ml-25">
                                        <span>03 <i className="flaticon-support"></i></span>
                                        <h3>Live Support</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>Making web3 Available to the Mainstream </h3>
                                        <p>Unlike previous web3 and self-sovereign identity systems, Tonomy ID is <strong>user friendly to all existing web users</strong> by hiding sovereign cryptography without compromising on security.</p>
                                    </li>

                                    {/* <li className="ml">
                                        <span>05 <i className="flaticon-shield"></i></span>
                                        <h3>Advanced Tchnology</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>

                                    <li className="ml-25">
                                        <span>06 <i className="flaticon-support"></i></span>
                                        <h3>Competitive Pricing</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhyChooseUs2;
