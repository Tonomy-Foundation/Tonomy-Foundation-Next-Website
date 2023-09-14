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
                                    <a>Seamless App Adoption</a>
                                </h3>
                                <p>Elevate user engagement with Tonomy ID's seamless account creation and login. Free account creation for users, and formless and seamless login brings more greater adoption and user retention.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-vr"></i>
                                <h3>
                                    <a>Truly Frictionless Transactions</a>
                                </h3>
                                <p>Experience frictionless blockchain transactions with Tonomy ID, enhancing user satisfaction and accelerating app growth.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-blockchain"></i>
                                <h3>
                                    <a>SSI and Vault Integration</a>
                                </h3>
                                <p>Integrate Self-Sovereign Identity and decentralized data storage sharing solutions effortlessly, enhancing and private user profiles and data sharing across your Antelope ecosystem.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-target"></i>
                                <h3>
                                    <a>Bot Protection for Apps and Ecosystem</a>
                                </h3>
                                <p>As bots become more common in the Web3 ecosystem, Tonomy ID verified the realness of users and avoids bots decreasing the quality of your user experience.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-choice"></i>
                                <h3>
                                    <a>Craft a Branded User Experience</a>
                                </h3>
                                <p>Customize your chain's journey with white-label branding, reinforcing your community's identity and trustworthiness.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-deep-learning"></i>
                                <h3>
                                    <a>Fully Managed Accounts, Keys & Recovery, Simplified</a>
                                </h3>
                                <p>Remove the need for users to manage private key or resource (CPU, NET, RAM). Enable recovery in the case of forgotten passphrases. All while ensuring private keys remains non-custodial and secure.</p>
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