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
                                    <Link href="/service-details">
                                        <a>Theft-Proof Your Patient Records</a>
                                    </Link>
                                </h3>
                                <p>Tonomy ID's self-sovereign architecture empowers healthcare organizations against identity breaches, strengthening privacy and trust for healthcare organizations, even in a challenging landscape.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-vr"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Ensuring Patient Privacy and Trust</a>
                                    </Link>
                                </h3>
                                <p>Tonomy ID's decentralized data storage and tamper-resistant Self-Sovereign Identity Based technology secures patient data, preserving privacy and reputation against breaches.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-blockchain"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Elevating Compliance Confidence</a>
                                    </Link>
                                </h3>
                                <p>TonomyID's self-sovereign architecture guarantees GDPR compliance and robust data protection, prioritizing user control and privacy for all users.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-target"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Secure Data Sharing and Guaranteed Consent</a>
                                    </Link>
                                </h3>
                                <p>Tonomy ID revolutionizes healthcare with guaranteed consent, secure and provable data sharing, enabled by sovereign sign-on and KYC verification, ensuring enhanced security, efficiency, and patient-centered care.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-choice"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Seamless Documents Processing</a>
                                    </Link>
                                </h3>
                                <p>Streamline healthcare document processing using Tonomy ID's digital signature functionality, minimizing paperwork, ensuring data integrity, and maintaining the credibility of electronically signed records.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-deep-learning"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Effortless Medical Data Portability</a>
                                    </Link>
                                </h3>
                                <p>Tonomy ID facilitates comprehensive data portability, enabling patients to securely transfer their medical records to various healthcare providers with their explicit consent. This digital mechanism ensures efficient and confidential information sharing.</p>
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