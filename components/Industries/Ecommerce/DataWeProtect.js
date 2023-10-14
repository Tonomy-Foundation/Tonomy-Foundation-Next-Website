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
                    <h2>Data We Protect</h2>
                    <p>Discover the comprehensive approach of Tonomy ID in safeguarding your sensitive data. Explore the array of data types that take center stage in our vigilant protection efforts. From personal identification and financial details to confidential business information, we prioritize shielding what matters most to you. Your security, our commitment.</p>
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
                                        <h3>Personal Identifiable Information (PII) </h3>
                                        <p>Safe People</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab2')}
                                >
                                    <span>
                                        <i className="flaticon-artificial-intelligence"></i>
                                        <h3>Payment Data</h3>
                                        <p>Secure Payments, Smooth Transactions</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab3')}
                                >
                                    <span>
                                        <i className="flaticon-health"></i>
                                        <h3>Purchase History</h3>
                                        <p>Security First</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab4')}
                                >
                                    <span>
                                        <i className="flaticon-automation"></i>
                                        <h3>Communication Records</h3>
                                        <p>End-to-end Encryption</p>
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
                                                <h3>Personal Identifiable Information (PII) </h3>
                                                <p> Delve into the realm of Personal Identifiable Information (PII) security with Tonomy ID. Discover how our cutting-edge solutions provide an ironclad shield for your most sensitive data.</p>
                                                <p> Experience peace of mind as we combine advanced encryption, stringent access controls, and robust authentication protocols, ensuring your personal information remains truly personal.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Privacy
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Control
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Security
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Confidence
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Trust
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Compliance
                                                            </li>
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
                                                <h3>Payment Data Security</h3>
                                                <p>Protect your financial data. Our experts ensure secure credit card and payment handling for worry-free transactions. Trust us for seamless, safe payments.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Fraud Prevention
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Encryption
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Privacy
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Secure Transactions
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Confidence
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Compliance
                                                            </li>
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
                                                <h3>Purchase History</h3>
                                                <p>Discover how Tonomy ID keeps your purchase data secure and private with encryption, strict controls, and anonymization for your trust.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Personalization
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Privacy
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Control
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Secure Recommendations
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Improved Experience
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Trust
                                                            </li>
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
                                                <h3>Communication Records </h3>
                                                <p>Explore Tonomy ID's top-notch privacy measures, securing your digital interactions with advanced encryption for peace of mind in today's online world.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Confidentiality
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Compliance
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Security
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Privacy
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Trust
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Control
                                                            </li>
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