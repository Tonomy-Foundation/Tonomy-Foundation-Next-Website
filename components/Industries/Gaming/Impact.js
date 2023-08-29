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
                                        <a>Increase Player Trust</a>
                                    </Link>
                                </h3>
                                <p>Web3 games use blockchain technology to secure their data, which can help to prevent hacking and fraud. Additionally, Web3 games give players ownership of their in-game assets, which can help to build trust and confidence.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-vr"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Redefining Game Transactions</a>
                                    </Link>
                                </h3>
                                <p>Tonomy ID revolutionizes secure in-game transactions, ensuring safe and transparent exchanges for players and developers alike. Through its advanced encryption algorithms, Tonomy ID protects payment details, preventing financial breaches and fraud. This provides players with peace of mind when making transactions within the game and instills confidence in the overall gaming experience.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-blockchain"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Mitigate Cheating and Fraud</a>
                                    </Link>
                                </h3>
                                <p>Tonomy ID effectively prevents cheating and fraudulent activities within the gaming ecosystem, promoting fairness. Its advanced algorithms can detect and flag suspicious behavior, such as aimbots or unauthorized modifications. By actively combating cheating, Tonomy ID maintains a level playing field, ensuring an enjoyable and equitable gaming experience for all players.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-target"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Reduce Account Hacking by 99%</a>
                                    </Link>
                                </h3>
                                <p>Tonomy ID plays a crucial role in protecting virtual identities and personal data, establishing a safer gaming environment. By verifying and authenticating users' identities, Tonomy ID mitigates the risk of unauthorized access to player accounts and sensitive information. This safeguards players' virtual identities and reduces the likelihood of identity theft or account compromise.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-choice"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Fostering Fairplay</a>
                                    </Link>
                                </h3>
                                <p>Tonomy ID ensures fair play and a balanced gaming experience for all players, creating a level playing field. By implementing anti-cheat measures, Tonomy ID monitors gameplay to identify and prevent unfair advantages. This fosters an environment where skill and strategy are the key factors in determining success, enhancing the overall gaming experience.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-deep-learning"></i>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Make Your Game Web3-Ready</a>
                                    </Link>
                                </h3>
                                <p>Enable all the benefits of Blockchain technology within your game or gaming ecosystem by integrating TonomyID. From NFTs to advanced security features, the Blockchain can take your game into another league and help future-proof.</p>
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