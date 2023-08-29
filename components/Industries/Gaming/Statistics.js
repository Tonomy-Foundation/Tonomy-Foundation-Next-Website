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
                                <h2>Revolutionizing Gaming Security</h2>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-chip"></i>
                                <h3>Don’t give bots a chance</h3>
                                <p>Our advanced sybil attack protection makes sure that users do not create multiple accounts and at the same time makes it impossible for bots to ruin your gaming experience.</p>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-blockchain"></i>
                                <h3>Introduce Digital Assets into your Games</h3>
                                <p>With the TonomyID infrastructure, you can introduce NFTs into your game without having to make a large technical effort.</p>
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
                                        <h2><span className="target">95%</span></h2>
                                        <p>Web3 games can provide up to 95% more privacy than traditional games.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">???</span></h2>
                                        <p>Web3 gaming can improve seamless gameplay in multiple ways.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">40%</span></h2>
                                        <p>Web3 Gaming accounts that are bots</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">

                                        <h2><span className="target">10-15%</span></h2>
                                        <p>Users of all games are bots</p>
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