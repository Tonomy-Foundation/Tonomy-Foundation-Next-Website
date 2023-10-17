import React, { Component } from 'react';

class ValueProposition extends Component {
    render() {
        return (
            <section className="choose-ue-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>Your reliable partner for every supply chain operation </h2>
                        <p>Tonomy ID is committed to deliver best in class identity solutions specifically designed for the supply chain.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span><i className="flaticon-technical-support"></i></span>
                                        <h3>Designed for workforce Identity Management </h3>
                                        <p>Tonomy ID is designed to authenticate your employees and enable access to your supply chain processes.</p>
                                    </li>
                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>One vendor for all your digital identity needs</h3>
                                        <p>From being able to sign in with the same credentials across multiple applications to completing eiDAS QES eSignatures, Tonomy ID is a versatile solution that can accommodate all needs when it comes to identity.</p>
                                    </li>

                                    <li className="ml-25">
                                        <span><i className="flaticon-support"></i></span>
                                        <h3>Full Compliance </h3>
                                        <p>Tonomy ID ensures your organisation to comply with GDPR guidelines and other regulations.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li className="ml-25">
                                        <span><i className="flaticon-support"></i></span>
                                        <h3>Tailored to your use case</h3>
                                        <p>We tailor our identity management solutions to your business needs and ensure your supply chain processes to be optimised based on your actual needs.</p>
                                    </li>

                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>Unparalleled Security</h3>
                                        <p>Tonomy ID’s Self sovereign architecture eliminates cybersecurity attack vectors as nothing is stored on servers and thus data breaches become practically impossible .</p>
                                    </li>

                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>Reliable & dedicated 24/ support</h3>
                                        <p>The Tonomy Foundation is committed to delivering the highest level of customer satisfaction by enabling customer support at any time. We ensure to be a reliable partner for your digital transformation from day 1.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default ValueProposition;
