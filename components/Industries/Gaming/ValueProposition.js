import React, { Component } from 'react';

class ValueProposition extends Component {
    render() {
        return (
            <section className="choose-ue-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>Why Tonomy ID is Your Ultimate Gaming Ally</h2>
                        <p>Dive into the compelling reasons to make Tonomy ID your trusted companion on your gaming quest.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span><i className="flaticon-technical-support"></i></span>
                                        <h3>Cutting edge Technology</h3>
                                        <p>Our Tonomy ID system is built on cutting-edge technology, setting new standards for gaming security. We utilize advanced encryption algorithms and authentication protocols to deliver the highest level of protection against cyber threats. Our continuous investment in research and development ensures that Tonomy ID stays ahead of emerging threats and evolving security challenges.</p>
                                    </li>
                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>Customizable Solutions</h3>
                                        <p>We offer flexible solutions that cater to various gaming platforms and requirements, ensuring seamless integration. Our team of experts works closely with game developers to customize Tonomy ID to suit their specific needs. Whether it's a massive multiplayer online game or a mobile gaming app, our customizable solutions adapt to different environments while maintaining the highest level of security.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li className="ml-25">
                                        <span><i className="flaticon-support"></i></span>
                                        <h3>Continuous Innovation</h3>
                                        <p>We are dedicated to continuous innovation, ensuring that Tonomy ID stays ahead of emerging threats and evolving security challenges. We invest in ongoing research and development to enhance our security system and adapt to changing trends. By constantly evolving, we remain at the forefront of gaming security, providing our clients with the most advanced solutions available.</p>
                                    </li>

                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>Dedicated Support</h3>
                                        <p>We are committed to providing dedicated support and assistance to integrate Tonomy ID seamlessly into gaming systems. Our specialist team is available to guide developers through the implementation process, addressing any concerns or challenges they may face. We understand the importance of a smooth transition and are dedicated to ensuring our clients' success.</p>
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
