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
                                <h2>Supply Chain Cybersecurity Statistics</h2>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-chip"></i>
                                <h3>Supply Chain Security Threats</h3>
                                <p>Supply chains are under more digital threat than ever before. As the digital transformation bites itself into every layer of our supply chains, it also creates many dangerous attack vectors for systems that are critical.</p>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-blockchain"></i>
                                <h3>Data Breach!</h3>
                                <p>Data breaches and hacks can not only be very cumbersome, but they also cost a lot of money and have the potential to disrupt your entire supply chain causing delays in production</p>
                            </div>

                            {/* <div className="business-btn">
                                <Link href="https://www.insiderintelligence.com/content/identity-fraud-costing-banks-big-it-s-burdening-small-banks-most">
                                    <a className="default-btn" target="_blank">
                                        Read Source
                                    </a>
                                </Link>
                            </div> */}
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">66%</span></h2>
                                        <p>Attacks that exploit supplier's security</p>
                                        {/* https://eftsure.com/statistics/supply-chain-statistics/ */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target"></span>9 / 10</h2>
                                        <p>Merchants find supply chain fraud challenging</p>
                                        {/* https://www.cybersource.com/en-gb/solutions/fraud-and-risk-management/fraud-report.html?fb34baab-c682-ec11-8d21-000d3a5b3326&gclid=COClp9iRloEDFfJBHQkdmygGVw&gclsrc=ds */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">$4.7 Trillion</span></h2>
                                        <p>Annual global occupational fraud</p>
                                        {/* TODO */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">

                                        <h2><span className="target">1743</span></h2>
                                        <p>US companies impacted by supply chain cyber attacks last year</p>
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