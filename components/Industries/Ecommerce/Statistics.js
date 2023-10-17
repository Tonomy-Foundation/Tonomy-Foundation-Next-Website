import React, { Component } from 'react';
import Link from 'next/link';

class Statistics extends Component {
    render() {
        return (
            <section className="business-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="business-content">
                                <h2>Cybersecurity in eCommerce</h2>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-chip"></i>
                                <h3>Data Breaches Threaten eCommerce Trust</h3>
                                <p>Identity theft and data breaches erode consumer trust. Tonomy ID offers robust security to safeguard eCommerce transactions and protect user privacy.</p>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-blockchain"></i>
                                <h3>Streamlining User Authentication in eCommerce</h3>
                                <p>Complex authentication processes hinder conversions. Tonomy ID simplifies and secures user access, enhancing the shopping experience and boosting eCommerce success.</p>
                            </div>

                            <div className="business-btn">
                                <Link href="https://terranovasecurity.com/cyber-security-statistics/">

                                    {/* https://www.statista.com/topics/9240/e-commerce-fraud/#topicOverview */}
                                    <a className="default-btn" target="_blank">
                                        Read Source
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">38%</span></h2>
                                        <p>% of worldwide reported scams occurring on eCommerce apps</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">$40 Billion</span></h2>
                                        <p>Losses in 2022 due to online payment fraud in the US</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">Double</span></h2>
                                        <p>Expected growth of fraud detection and prevention market 2023 - 2027</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">

                                        <h2><span className="target">70%</span></h2>
                                        <p>Victims of online shopping scams that suffer financial losses</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Statistics;