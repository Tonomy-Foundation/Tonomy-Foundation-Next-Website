import React, { Component } from 'react';
import Link from 'next/link';

const DataWeProtect = () => {

    const openTabSection = (evt, tabNmae) => {
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

    return (
        <section className="industries-area pb-100">
            <div className="container">
                <div className="section-title">
                    <span></span>
                    <h2>Safeguarding Your In-Game Data</h2>
                    <p>Peek into Tonomy ID's priority list, highlighting the gaming data it safeguards, enhancing your gaming exploits.</p>
                </div>

                <div className="tab industries-list-tab">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            {/* Tabs navs */}
                            <ul className="tabs">
                                <li
                                    className="current"
                                    onClick={(e) => openTabSection(e, 'tab1')}
                                >
                                    <span>
                                        <i className="flaticon-machine-learning"></i>
                                        <h3>Personal Information</h3>
                                        <p>Player Trust Preserved</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab2')}
                                >
                                    <span>
                                        <i className="flaticon-artificial-intelligence"></i>
                                        <h3>Payment Information</h3>
                                        <p>Always Secure and Easy Payments</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab3')}
                                >
                                    <span>
                                        <i className="flaticon-health"></i>
                                        <h3>Digital Assets</h3>
                                        <p>Give Users Ownership</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab4')}
                                >
                                    <span>
                                        <i className="flaticon-automation"></i>
                                        <h3>Player History</h3>
                                        <p>Give Users Ownership</p>
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-9">
                            <div className="tab_content">
                                {/* Tab item #1 */}
                                <div id="tab1" className="tabs_item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-img left-img">
                                                <img src="/images/offer1.png" alt="Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>Personal Information</h3>
                                                <p>Empower your gaming journey with Tonomy ID's tireless commitment to protect and secure your personal data.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Usernames
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Phone Numbers
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Emails
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Age Verification
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Names
                                                            </li>
                                                            {/* <li>
                                                                <i className="flaticon-checked"></i>
                                                                Instant Verification
                                                            </li> */}
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* <div className="text-center">
                                                    <Link href="/services">
                                                        <a className="default-btn">Discover More</a>
                                                    </Link>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab item #2 */}
                                <div id="tab2" className="tabs_item">
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>Payment Information</h3>
                                                <p>Explore how Tonomy ID fortifies your payment information, ensuring seamless and risk-free transactions.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Credit Card Information
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                KYC Information
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Shipping Addresses
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Promo Codes
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Gift Cards
                                                            </li>
                                                            {/* <li>
                                                                <i className="flaticon-checked"></i>
                                                                Streamlined Transactions
                                                            </li> */}
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* <div className="text-center">
                                                    <Link href="/services">
                                                        <a className="default-btn">Discover More</a>
                                                    </Link>
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-img right-img">
                                                <img src="/images/offer2.png" alt="Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab item #3 */}
                                <div id="tab3" className="tabs_item">
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-img left-img">
                                                <img src="/images/offer3.png" alt="Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>Digital Assets</h3>
                                                <p>Safeguard your valuable digital assets with Tonomy ID's fortified defenses, ensuring unwavering protection and control.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Game Items
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                NFTs
                                                            </li>
                                                            {/* <li>
                                                                <i className="flaticon-checked"></i>
                                                                Tradable Assets
                                                            </li> */}
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Tradeable Assets
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Game Characters
                                                            </li>
                                                            {/* <li>
                                                                <i className="flaticon-checked"></i>
                                                                Trustworthy reporting
                                                            </li> */}
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* <div className="text-center">
                                                    <Link href="/services">
                                                        <a className="default-btn">Discover More</a>
                                                    </Link>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab item #4 */}
                                <div id="tab4" className="tabs_item">
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>Player History</h3>
                                                <p>Preserve and protect your gaming journey's history with Tonomy ID, ensuring its confidentiality and authenticity.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Accomplishments
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Rewards
                                                            </li>
                                                            {/* <li>
                                                                <i className="flaticon-checked"></i>
                                                                Fraud Prevention
                                                            </li> */}
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Levels
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Badges
                                                            </li>
                                                            {/* <li>
                                                                <i className="flaticon-checked"></i>
                                                                Non-repudiation
                                                            </li> */}
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* <div className="text-center">
                                                    <Link href="/services">
                                                        <a className="default-btn">Discover More</a>
                                                    </Link>
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-img right-img">
                                                <img src="/images/offer4.png" alt="Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DataWeProtect;