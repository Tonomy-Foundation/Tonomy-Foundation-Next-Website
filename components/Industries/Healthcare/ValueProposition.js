import React, { Component } from 'react';

class ValueProposition extends Component {
    render() {
        return (
            <section className="choose-ue-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>Navigating Healthcare Identity Solutions: The Tonomy ID Advantage</h2>
                        <p>Embark on a seamless healthcare identity journey with Tonomy ID. Experience data integrity, security, innovation, tailored integration, and dedicated support, redefining your healthcare ecosystem.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span><i className="flaticon-technical-support"></i></span>
                                        <h3>Stop 99% of phishing attacks</h3>
                                        <p>Tonomy ID employs advanced multi-factor authentication to provide robust protection against phishing attempts, ensuring maximum security for patient and employees data.
                                        </p>
                                    </li>
                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>97% less server-breaches and impact</h3>
                                        <p>Experience significant reduction in server breach frequency and credentials stolen per breach, safeguarding sensitive healthcare data with Tonomy ID's advanced security measures against evolving cyber threats.</p>
                                    </li>

                                    <li className="ml-25">
                                        <span><i className="flaticon-support"></i></span>
                                        <h3>Smooth Integration, Tailored Solutions</h3>
                                        <p>Customizable features and plug-and-play architecture ensure a perfect fit for your identity management needs, elevating healthcare efficiency to new heights.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span><i className="flaticon-support"></i></span>
                                        <h3>Seamless Secure Data Sharing</h3>
                                        <p>Facilitate secure data sharing between patients and doctors, ensuring easy access to full medical history without redoing forms, promoting portability and trustworthiness.</p>
                                    </li>

                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>Minimizing Data Friction</h3>
                                        <p>Tonomy ID significantly reduces data friction by using digital data, enabling efficient and secure access to digital healthcare records for patients and providers alike.</p>
                                    </li>

                                    <li className="ml-25">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>Dedicated 24/7 Support for Your Journey</h3>
                                        <p>Experience unmatched customer care with round-the-clock support. Our dedicated team stands by your side, guiding you through every step of your healthcare identity management transformation.</p>
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
