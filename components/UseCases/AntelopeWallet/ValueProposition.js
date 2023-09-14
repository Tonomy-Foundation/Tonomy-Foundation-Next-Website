import React, { Component } from 'react';

class ValueProposition extends Component {
    render() {
        return (
            <section className="choose-ue-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Why Choose Us</span>
                        <h2>Combining State of the Art Self-Sovereign Identity with Frictionless User Experience</h2>
                        <p>Our technology is built using self-sovereign identity the blockchain and seamlessly integrates with your dApps to increase the quality of your users’ experience.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span><i className="flaticon-technical-support"></i></span>
                                        <h3>Only Non-Custodial Solution which Matches User Experience Expectations</h3>
                                        <p>Tonomy ID is the only solution on the market that enables ease of use and simplicity together with the highest level of sovereignty and security. At the same time the user stays in full control of their information.</p>
                                    </li>
                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>0.5 seconds transaction finality</h3>
                                        <p>Web3 dApps that want to scale need to enables extremely fast interactions and transactions. Tonomy ID enables lightning fas transactions on the blockchain to accommodate this requirement.</p>
                                    </li>

                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>Private and decentralised</h3>
                                        <p>No user data is ever shared with 3rd parties without the consent of the user. Meanwhile, no data is stored in the cloud.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li className="ml-25">
                                        <span><i className="flaticon-support"></i></span>
                                        <h3>In-app instant web3 transactions and VC issuances</h3>
                                        <p>Allow web3 transaction and W3C Verifiable Credential signatures all within the comfort of your application. Bring a no-wallet experience to your apps without the haste of managing user accounts, keys or signatures.</p>
                                    </li>

                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>Customisation for Web3 dApps</h3>
                                        <p>Tonomy ID can be customised for any use case and tailor a series of different user stories. We work hand in hand with your team to deliver a seamless experience to your users.</p>
                                    </li>

                                    <li className="ml">
                                        <span><i className="flaticon-shield"></i></span>
                                        <h3>Easily scale Web3 to millions of users</h3>
                                        <p>Tonomy ID lets you easily scale your web3 dApps to millions of users without having to worry about constraints or security.</p>
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
