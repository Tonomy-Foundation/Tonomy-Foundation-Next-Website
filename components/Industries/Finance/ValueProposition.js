import React, { Component } from 'react';

class ValueProposition extends Component {
    render() {
        return (
            <section className="choose-ue-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>Tonomy ID's Zero-Knowlege Architecture Takes Your Security Defense to the Next Level</h2>
                        <p>Secure your financial world with Tonomy ID's revolutionary approach. Feel the power of data stored on users' phones, shielding against breaches and theft. Empower your clients, employees and users with password-less SSO, MFA, and sovereign keys. Make a choice that resonates – choose Tonomy ID for unmatched peace of mind</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span><i className="flaticon-technical-support"></i></span>
                                        <h3>€1.5 M saved per company</h3>
                                        <p>Money saved in fines, reputation damage and containment cost for mid-enterprise companies. You deserve the peace of mind.</p>
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

export default ValueProposition;
