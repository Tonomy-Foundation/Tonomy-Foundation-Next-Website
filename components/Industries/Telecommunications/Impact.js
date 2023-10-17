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

                                    <a>Enhanced Customer Onboarding</a>

                                </h3>
                                <p>Tonomy ID streamlines customer onboarding for telecom companies through self-sovereign architecture and secure digital signatures.</p>
                                <p> Seamless identity verification not only reduces the onboarding time significantly, but it also saves your customers and staff the hassle of going through manual paperwork.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-vr"></i>
                                <h3>

                                    <a>Secure Subscriber Authentication</a>

                                </h3>
                                <p>Tonomy ID offers a robust subscriber authentication solution with sovereign single sign-on, providing convenient and secure access across platforms for telecom customers. This reduces the risk of unauthorized access and boosts user retention.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-blockchain"></i>
                                <h3>

                                    <a>Fraud Prevention and KYC Compliance</a>

                                </h3>
                                <p>Tonomy ID's tamper-resistant self sovereign Identity and fraud-proof digital signatures ensure data integrity, reducing the risk of fraud for telecom companies. Leveraging this technology for KYC processes enhances reliable identity verification and regulatory compliance.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-target"></i>
                                <h3>

                                    <a>Phishing attack prevention with MFA</a>

                                </h3>
                                <p>Tonomy ID enables consent-based data sharing, allowing customers to selectively share relevant data with telecom providers. At the same time phishing attacks that target your customers for their most sensitive data become practically impossible by implementing Tonomy ID</p>
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

                                    <a>Protecting client payment information</a>

                                </h3>
                                <p>Tonomy ID protects your clients from having their payment information stolen by not storing any of these types of personal data in the cloud. Instead, it stores it on the users own device, shielding it from potential data breaches.</p>
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