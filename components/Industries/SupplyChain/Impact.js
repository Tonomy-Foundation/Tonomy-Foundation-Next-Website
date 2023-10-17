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

                                    <a>Prevent Data Breaches Fully</a>

                                </h3>
                                <p>Tonomy ID's tamper-resistant blockchain technology ensures the integrity of private supply chain data. At the same time, the self sovereign storage vault enables critical sensitive information to be stored on the users’ phones instead of in the cloud, eliminating the risk of data breaches.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-vr"></i>
                                <h3>

                                    <a>Verified Supplier Identities</a>

                                </h3>
                                <p>With Tonomy ID's self-sovereign architecture, suppliers can establish and verify their identities easily. This process streamlines supplier onboarding and reduces the risk of fraudulent suppliers entering the chain.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-blockchain"></i>
                                <h3>

                                    <a>Instantly Verifiable And Auditable Private Product History</a>

                                </h3>
                                <p>Leveraging fraud-proof digital signatures, Tonomy ID enables real-time authentication of products and materials. This is crucial in preventing the distribution of counterfeit goods, ensuring product quality, and maintaining brand reputation.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-target"></i>
                                <h3>

                                    <a>Reduced Fraud and Theft</a>

                                </h3>
                                <p>By enhancing the security of data and transactions, Tonomy ID reduces the risk of fraud and theft within the supply chain, safeguarding both assets and reputation.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-choice"></i>
                                <h3>

                                    <a>Enhanced Data Integrity</a>

                                </h3>
                                <p>Tonomy ID ensures the integrity of private supply chain data. This allows stakeholders to track the handling of products and materials at every stage, reducing the risk of counterfeiting and ensuring authenticity.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-deep-learning"></i>
                                <h3>

                                    <a>Sustainability and Ethical Sourcing</a>

                                </h3>
                                <p>Tonomy ID can be used to verify and authenticate claims of sustainable and ethical sourcing, fostering trust among consumers and stakeholders and building brand reputation.</p>
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