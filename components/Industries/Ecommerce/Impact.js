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
                                    <a>Effortless Checkout with Tonomy ID</a>
                                </h3>
                                <p>Reduce Cart Abandonment, Boost Conversions With Tonomy ID, customers enjoy smooth checkout processes, reducing cart abandonment and supercharging e-commerce conversions.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-vr"></i>
                                <h3>
                                    <a>Personalized Shopping Made Secure and Private</a>
                                </h3>
                                <p>With Tonomy ID, enjoy tailored shopping experiences based on your profile and preferences, boosting satisfaction and loyalty.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-blockchain"></i>
                                <h3>
                                    <a>Reduced Fraud</a>
                                </h3>
                                <p>E-commerce platforms integrating Tonomy ID benefit from its sophisticated fraud detection algorithms, effectively reducing chargebacks and financial losses caused by fraudulent transactions.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-target"></i>
                                <h3>
                                    <a>Trust & Loyalty: Tonomy ID's Clear Consent & Reputation Boost</a>
                                </h3>
                                <p>At Tonomy ID, our focus is clear: we build trust and foster customer loyalty. We achieve this by ensuring transparent consent practices and maintaining a strong reputation. This paves the way for lasting success for e-commerce brands.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-choice"></i>
                                <h3>
                                    <a>Data Privacy Compliance</a>
                                </h3>
                                <p>E-commerce businesses utilizing Tonomy ID ensure compliance with stringent data protection regulations, bolstering customer confidence and avoiding legal repercussions.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="service-card">
                                <i className="flaticon-deep-learning"></i>
                                <h3>
                                    <a>Mobile Shopping Made Easy</a>
                                </h3>
                                <p>Elevate your online experience with Tonomy ID's mobile-friendly authentication. Simplify logins, enhance security, and enjoy convenient mobile transactions. Your trusted partner in digital shopping.</p>
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