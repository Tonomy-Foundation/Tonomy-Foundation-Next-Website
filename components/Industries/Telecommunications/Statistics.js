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
                                <h2>Cybersecurity in Telecommunications</h2>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-chip"></i>
                                <h3>Sim Swap attacks cause huge financial losses</h3>
                                <p>Protect your customers from identity theft and malicious actors trying to impersonate your customers for SIM and eSIM replacements. With Tonomy ID’s state of the art verification process, your customers can be saved from losses that sometimes amount to millions of dollars.</p>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-blockchain"></i>
                                <h3>Onboard new Customers is a hassle with the traditional paper-process</h3>
                                <p>Tonomy ID enables you to onboard new customers easily with the ability to verify the identity of users in a seamless manner Onboarding new Customers with less paperwork & more customer satisfaction.</p>
                            </div>

                            <div className="business-btn">
                                <Link href="https://www.thalesgroup.com/en/markets/digital-identity-and-security/mobile/inspired/identity-fraud-in-telecomunication">
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
                                        <h2><span className="target">35% - 40%</span></h2>
                                        <p>% of Telcomm scams that involve identity theft</p>
                                        {/* https://www.thalesgroup.com/en/markets/digital-identity-and-security/mobile/inspired/identity-fraud-in-telecomunication */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">51%</span></h2>
                                        <p>Annual growth of cyberattacks in the Telecommunications industry</p>
                                        {/* https://www.ispartnersllc.com/blog/cybersecurity-telecommunications-sector/ */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">$40 Billion</span></h2>
                                        <p>Cost of Identity theft in the Telecommunications industry per year</p>
                                        {/* https://www.m3aawg.org/blog/almost-40-billion-us-lost-in-2021-to-telecommunications-fraud-based-on-communications-fraud */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">

                                        <h2><span className="target">$2.42 Billion</span></h2>
                                        <p>Cost of synthetic Identity Fraud per year</p>
                                        {/* TODO */}
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