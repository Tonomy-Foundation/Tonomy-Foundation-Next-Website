import React, { Component } from 'react';

class ValueProposition extends Component {
    render() {
        return (
            <section className="choose-ue-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>State of the art Identity Management tailored to Telecommunication provider needs</h2>
                        <p>Our solution is designed with the specific needs of telecom providers in mind.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span><i className="flaticon-technical-support"></i></span>
                                        <h3>Robust Cybersecurity for Telecom Operators</h3>
                                        <p>Tonomy ID offers robust cybersecurity for the telecom industry with self-sovereign architecture and tamper-resistant data management, ensuring unparalleled security for user identities and safeguarding against identity theft and unauthorized access to sensitive data.</p>
                                    </li>
                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>97% less server-breaches and impact</h3>
                                        <p>Save your time and compliance work by reducing server-breaches. Take reputation to the next level by guaranteed credential theft protection.</p>
                                    </li>

                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>Future-Ready Web3 Technology</h3>
                                        <p>Tonomy ID's self-sovereign architecture provides telecom operators with a future-proof identity management solution that remains adaptable to the evolving industry and ensures robustness against emerging cyber threats.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li className="ml-25">
                                        <span><i className="flaticon-support"></i></span>
                                        <h3>Enhanced Privacy Protection & compliance</h3>
                                        <p>In telecom, data privacy is vital. Tonomy ID's privacy-first approach, GDPR compliance, and decentralized data storage protect customer data, building trust and enhancing the telecom brand's reputation.</p>
                                    </li>

                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>Streamlined Subscriber Authentication</h3>
                                        <p>Tonomy ID's sovereign single sign-on simplifies subscriber authentication for telecom services, providing a seamless login experience that reduces user friction and boosts engagement.</p>
                                    </li>

                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>Tailored to the Telecommunications Industry</h3>
                                        <p>Tonomy ID offers customizable features tailored to telecom companies, including fraud-proof digital signatures for secure transactions and seamless integration with existing telecom systems. Versatile solutions cater to the unique requirements of the telecommunications industry.</p>
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
