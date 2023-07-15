import React, { Component } from 'react';
import Link from 'next/link';

class MakeYourBusiness extends Component {
    render() {
        return (
            <section className="business-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="business-content">
                                <h2>Did you know?</h2>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-chip"></i>
                                <h3>The State Of Cybersecurity</h3>
                                <p>The state of cybersecurity today is alarming, with a growing number of sophisticated threats, data breaches, and ransomware attacks that pose significant risks to individuals, organizations, and nations.</p>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-blockchain"></i>
                                <h3>The Struggle for Companies</h3>
                                <p>The struggle for companies to maintain robust cybersecurity measures is a never-ending battle, as they encounter increasingly sophisticated attacks, struggle with limited resources and expertise, navigate complex regulatory requirements, and strive to keep pace with rapidly evolving technologies and threat landscapes.</p>
                            </div>

                            <div className="business-btn">
                                <Link href="https://www.varonis.com/blog/cybersecurity-statistics">
                                    <a target="_blank" className="default-btn">
                                        Read More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">26%</span></h2>
                                        {/* https://www.crownrms.com/us/insights/probability-of-data-breaches-increases/ */}
                                        <p>Companies will have a server breach next year</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        {/* https://www.varonis.com/blog/cybersecurity-statistics */}
                                        <h2><span className="target">22 Billion</span></h2>
                                        <p>Records were exposed in 2021</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">286 days</span></h2>
                                        {/* https://www.varonis.com/blog/cybersecurity-statistics */}
                                        <p>Average time from identification to containment of a breach</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        {/* https://www.varonis.com/blog/cybersecurity-statistics */}

                                        <h2><span className="target">$4.24 Million</span></h2>
                                        <p>Average cost of a data breach</p>
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

export default MakeYourBusiness;