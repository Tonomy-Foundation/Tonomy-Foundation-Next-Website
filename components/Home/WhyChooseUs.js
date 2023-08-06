import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-ue-area ptb-100" id="why-choose-us">
                <div className="container">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>Our Platform Takes You Solution Into The Future</h2>
                        <p>Tonomy ID stands alone in the market, revolutionizing digital identity with our innovative sovereign architecture, advanced security features, and user-centric design, setting a new standard that leaves competitors in the dust.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span><i className="flaticon-technical-support"></i></span>
                                        <h3>Future Proofing Cybersecurity</h3>
                                        <p>Unlike previous cybersecurity systems that focus on <i>improving</i> sever security (server hardening), Tonomy ID moves user data/authentication to the user's phone, <strong>removing</strong> server-breach attack surface.</p>
                                    </li>
                                    <li>
                                        <span><i className="flaticon-technical-support"></i></span>
                                        <h3>€1.2 M saved per company</h3>
                                        <p>Money saved in fines, reputation damage and containment cost for mid-enterprise companies.</p>
                                    </li>
                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>97% less server-breaches and impact</h3>
                                        <p>Save your time and compliance work by reducing server-breaches. Take reputation to the next level by guaranteed credential theft protection.</p>
                                    </li>
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

                                    <li className="ml-25">
                                        <span><i className="flaticon-support"></i></span>
                                        <h3>36 days reduced containment time</h3>
                                        <p>Faster containment time allows your team to focus on the most important work.</p>
                                    </li>

                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>€700,000 reduced phishing and password attack impact</h3>
                                        <p>Using our secure password-less single-sign on with multi-factor authentication.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhyChooseUs;
