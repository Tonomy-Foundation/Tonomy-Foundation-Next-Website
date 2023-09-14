import React, { Component } from 'react';
import Link from 'next/link';

class Comparison extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="pricing-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Comparison</span>
                        <h2>Antelope Wallets</h2>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum suspendisse.</p> */}
                    </div>

                    <div className="tab quote-list-tab">
                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Upland</h3>
                                                <p>In-app wallet</p>
                                            </div>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Account Creation: 60 seconds
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Transaction Flow: 60 seconds (in-app)
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Single Sign On
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Cross Platform (Mobile, Web, Desktop)
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    In-app 1-click transactions
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Wallet signatues
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Free Accounts For Users
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Fully Managed Resources/Keys
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Recovery
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Multi-chain
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Fully Managed Resources/Keys
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Open Source
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Self-sovereign Identity
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Private Data Storage and Sharing
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Anchor</h3>
                                                <p>Multi-chain cross-platform Anchor wallet</p>
                                            </div>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Account Creation: 60 seconds
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Transaction Flow: 60 seconds (in-app)
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Single Sign On
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Cross Platform (Mobile, Web, Desktop)
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    In-app 1-click transactions
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Wallet signatues
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Free Accounts For Users
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Fully Managed Resources/Keys
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Recovery
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Multi-chain
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Fully Managed Resources/Keys
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Open Source
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Self-sovereign Identity
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Private Data Storage and Sharing
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Tonomy ID</h3>
                                                <p>White labeled usability Antelope wallet</p>
                                            </div>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Account Creation: 60 seconds
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Transaction Flow: 60 seconds (in-app)
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Single Sign On
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Cross Platform (Mobile, Web, Desktop)
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    In-app 1-click transactions
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Wallet signatues
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Free Accounts For Users
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Fully Managed Resources/Keys
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Recovery
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Multi-chain
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Fully Managed Resources/Keys
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Open Source
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Self-sovereign Identity
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Private Data Storage and Sharing
                                                </li>
                                            </ul>
                                        </div>
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

export default Comparison;