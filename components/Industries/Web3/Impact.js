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

                                    <a>Seamless User Onboarding</a>

                                </h3>
                                <p>Create accounts and login to apps now super easy, and no exposure to crypto/web3 technical information.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-vr"></i>
                                <h3>

                                    <a>Blazing Fast Transactions</a>

                                </h3>
                                <p>Users are able to send transactions with almost instant finality, enabling an ultra smooth user experience, even when using web3.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-blockchain"></i>
                                <h3>

                                    <a>Adhere to an Evolving Regulatory Landscape</a>

                                </h3>
                                <p>Your dApp might be required to KYC all users at some point. With Tonomy ID, you will be able to accommodate any changes in regulations when it comes to enabling more compliance controls.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-target"></i>
                                <h3>

                                    <a>Sybil/Bot Resistance</a>

                                </h3>
                                <p>As bots become more common in the Web3 ecosystem, Tonomy ID verified the realness of users and avoids bots decreasing the quality of your user experience.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-choice"></i>
                                <h3>

                                    <a>Self-sovereign Identity (SSI) giving User Trust</a>

                                </h3>
                                <p>Tonomy ID‘s fully self-sovereign, non-custodial architecture enables users to own their data and keys, empowering users by putting them in control. Enable W3C Verifiable Credential issuance and verification.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-deep-learning"></i>
                                <h3>

                                    <a>Protect from Hacks and Data Theft</a>

                                </h3>
                                <p>No information can be hacked from Tonomy ID as it does not not store data in a database in the cloud. By letting users store their data on their own device, Tonomy maximizes the security of your dApps.</p>
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