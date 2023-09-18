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

                                    <a>Increase Player Trust and Boost Reputation</a>

                                </h3>
                                <p>Web3 games give players ownership of their in-game assets, which can help to build trust and confidence. This leads to increased player satisfaction and positive word-of-mouth, which can help to improve the reputation of your game.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-vr"></i>
                                <h3>

                                    <a>Seamless in-game NFTs & Collectibles</a>

                                </h3>
                                <p>Tonomy ID revolutionizes NFTs and collectibles, offering gamers and developers a secure blockchain haven. Customize characters, trade assets, and game on with confidence and a great user experience. Join the evolution today – immerse, trade, and conquer!</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-blockchain"></i>
                                <h3>

                                    <a>Safeguards Gamers Against Cheating and Fraud</a>

                                </h3>
                                <p>Detecting bots, thwarting sybil attacks, and preventing unauthorized cheats, it ensures a balanced and exciting game world for every player. Embrace fairness, embrace victory!
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-target"></i>
                                <h3>

                                    <a>Reduce Account Hacking by 99%</a>

                                </h3>
                                <p>Tonomy ID plays a crucial role in protecting virtual identities and personal data, establishing a safer gaming environment. By verifying and authenticating users' identities, Tonomy ID mitigates the risk of unauthorized access to player accounts and sensitive information. This safeguards players' virtual identities and reduces the likelihood of identity theft or account compromise.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-choice"></i>
                                <h3>

                                    <a>Securing Gaming Payments</a>

                                </h3>
                                <p>Tonomy ID's safeguards payments with tamper-proof records and fraud-proof signatures. Meet GDPR standards and defend against financial threats without compromising on user experience. Power up your gaming ecosystem!</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-deep-learning"></i>
                                <h3>

                                    <a>Seamless Web3 Wallet Recovery and Beyond</a>

                                </h3>
                                <p>Tonomy ID empowers gamers and developers with secure Web3 wallet recovery and easy-to-use simplified authentication, and data privacy. Unleash the future of gaming with fraud prevention, enhanced privacy, and unparalleled transparency in one revolutionary solution. Level up your gaming experience today!</p>
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