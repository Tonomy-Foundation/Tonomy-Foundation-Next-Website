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
                                <h2>Web3 cannot meet user experience expectations</h2>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-chip"></i>
                                <h3>Making Web3 more user friendly </h3>
                                <p>User experience is the biggest drawback of Web3 applications today. dApps do not manage to scale due to the requirement of users to install wallets and other complicated nuances.</p>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-blockchain"></i>
                                <h3>Low security for dApps</h3>
                                <p>Web3 dApps often suffer from hacks and attacks leaving their users in big losses. At the same time most dApps and DeFi applications suffer from sybil attacks (people who create multiple accounts) or fail to meet the identity verification compliance requirements.</p>
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
                                        <h2><span className="target">73%</span></h2>
                                        <p>Yearly increase in hacks within Web3</p>
                                        {/* https://u.today/press-releases/is-your-web3-project-at-risk-of-being-hacked-this-solution-could-save-you-millions */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">60 seconds - 3 hours</span></h2>
                                        <p>Average web3 transaction time time</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">10%</span></h2>
                                        <p>Of web3 accounts are lost forever</p>
                                        {/* https://www.nytimes.com/2021/01/13/business/tens-of-billions-worth-of-bitcoin-have-been-locked-by-people-who-forgot-their-key.html */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">

                                        <h2><span className="target">85%</span></h2>
                                        <p>Users leave Web3 dApps due to usability issues</p>
                                        {/* https://zipdo.co/statistics/web3/
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