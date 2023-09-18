import React, { Component } from 'react';
import Link from 'next/link';

class Impact extends Component {
    render() {
        return (
            <section className="offer-area gray-bg ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-chip"></i>
                                <h3>

                                    <a>Seamless Customer Onboarding</a>

                                </h3>
                                <p>Expedite KYC processes and enhance user experience with Tonomy ID's seamless and secure customer onboarding.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-vr"></i>
                                <h3>

                                    <a>KYC Compliance Made Easy</a>

                                </h3>
                                <p>Meet stringent regulatory requirements effortlessly using Tonomy ID's automated and reliable KYC identity verification.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-blockchain"></i>
                                <h3>

                                    <a>Fraud-Proof Data Management</a>

                                </h3>
                                <p>Safeguard financial records and transaction data with Tonomy ID's tamper-proof digital signatures, ensuring data integrity and authenticity.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-target"></i>
                                <h3>

                                    <a>Secure Digital Transactions</a>

                                </h3>
                                <p>Protect high-value transactions with Tonomy ID's advanced security features, reducing the risk of unauthorized access and fraud.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-choice"></i>
                                <h3>

                                    <a>Compliant Data Sharing</a>

                                </h3>
                                <p>Facilitate secure data sharing between financial institutions and authorized parties, ensuring privacy and compliance with data protection regulations.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-deep-learning"></i>
                                <h3>

                                    <a>Multi-Party Signatures</a>

                                </h3>
                                <p>Enable secure collaboration between multiple stakeholders for complex financial agreements, using Tonomy ID's multi-party signature capabilities.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="offer-shape">
                    <img src="/images/shape/services-shape/1.png" alt="Image" />
                    <img src="/images/shape/services-shape/2.png" alt="Image" />
                    <img src="/images/shape/services-shape/3.png" alt="Image" />
                    <img src="/images/shape/services-shape/4.png" alt="Image" />
                    <img src="/images/shape/services-shape/5.png" alt="Image" />
                    <img src="/images/shape/services-shape/6.png" alt="Image" />
                </div>
            </section>
        );
    }
}

export default Impact;