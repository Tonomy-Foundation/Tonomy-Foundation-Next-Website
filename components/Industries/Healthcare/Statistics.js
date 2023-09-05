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
                                <h2>Emerging Cybersecurity Challenges in Healthcare</h2>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-chip"></i>
                                <h3>Escalating Cyber Threats</h3>
                                <p>Rising healthcare cyber threats jeopardize patient data and disrupt services. Tonomy ID’s robust cybersecurity is here to ensure privacy and maintain seamless operations.</p>
                            </div>

                            <div className="single-business">
                                <i className="flaticon-blockchain"></i>
                                <h3>Patient Data at Risk</h3>
                                <p>Tonomy ID's Secure Digital Identities Drive Healthcare's Revolution, Enhancing Security, Efficiency, and Industry Compliance, while Safeguarding Patient Data.</p>
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
                                        <h2><span className="target">160,000</span></h2>
                                        <p>Avg. patient records breached every day</p>
                                        {/* https://www.mastercard.com/news/perspectives/2023/why-medical-billing-fraud-hurts-our-wallets-and-harms-our-health/ */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">93%</span></h2>
                                        <p>healthcare organisations that experienced an identity breach within the past two years</p>
                                        {/* https://www.openaccessgovernment.org/healthcares-recovery-why-identity-security-critical-nhs-data/154560/ */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">
                                        <h2><span className="target">81%</span></h2>
                                        <p>patients wanting increased access to their health information</p>
                                        {/* https://www.patientsrising.org/health-data-portability-who-owns-your-health-data/ */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 counter-nth">
                                    <div className="single-counter">

                                        <h2><span className="target">1 in 7</span></h2>
                                        <p>Healthcare employees will fall for phishing emails</p>
                                        {/* https://blog.knowbe4.com/one-in-seven-healthcare-employees-will-fall-for-phishing-emails
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