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
                                <h2>Cybersecurity in Finance and Banking</h2>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-chip"></i>
                                <h3>Fraud's Rising Surge</h3>
                                <p>Confront the surge of digital identity fraud engulfing finance and banking. Embrace Tonomy ID to reclaim control and protect against relentless cyber adversaries.</p>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-blockchain"></i>
                                <h3>The Growing Cyber Menace</h3>
                                <p>Uncover the alarming cybersecurity gaps in finance and banking. Tonomy ID stands as a fortress, shielding against relentless digital threats and data breaches.</p>
                            </div>

                            <div className="business-btn">
                                <Link href="https://www.insiderintelligence.com/content/identity-fraud-costing-banks-big-it-s-burdening-small-banks-most">
                                    <a className="default-btn" target="_blank">
                                        Know Details
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">$18.3M</span></h2>
                                        <p>Avg. yearly cost of banking cyberattacks</p>
                                        {/* https://www.sangfor.com/blog/cybersecurity/cyber-attacks-on-banks-devastate-financial-sector */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">42%</span></h2>
                                        <p>% of all breaches that target banks</p>
                                        {/* https://fortunly.com/statistics/data-breach-statistics/#:~:text=Key%20Statistics%20on%20Data%20Breaches,164.6%20million%20successful%20data%20breaches */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">54%</span></h2>
                                        <p>Banks that dealt with document forgery last year</p>
                                        {/* https://regulaforensics.com/news/identity-fraud-cost-nearly-half-a-million-us-dollars-to-every-third-bank/ */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">

                                    <h2><span className="target">$500,000</span></h2>
                                        <p>Avg. Identity Fraud Incident Cost</p>
                                        {/* https://www.insiderintelligence.com/content/identity-fraud-costing-banks-big-it-s-burdening-small-banks-most
                                        
                                        https://regulaforensics.com/news/identity-fraud-cost-nearly-half-a-million-us-dollars-to-every-third-bank/
                                        */}
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