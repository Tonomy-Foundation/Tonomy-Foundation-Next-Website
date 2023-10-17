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
                    <p>Your Supply Chain Management can be much more secure with Tonomy ID.</p>
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
                                        <h3>Employee Data</h3>
                                        <p>Safer People</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab2')}
                                >
                                    <span>
                                        <i className="flaticon-artificial-intelligence"></i>
                                        <h3>Customer Data</h3>
                                        <p>Safer Business</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab3')}
                                >
                                    <span>
                                        <i className="flaticon-health"></i>
                                        <h3>Supplier Data</h3>
                                        <p>Trustworthy and Secure</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab4')}
                                >
                                    <span>
                                        <i className="flaticon-automation"></i>
                                        <h3>Product Data</h3>
                                        <p>Portable and Secure</p>
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
                                                <h3>Employee Data</h3>
                                                <p>Protecting the most sensitive data of your employees.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Documents & contracts
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Personal Information
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Employee Activity
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Signatures
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Contact Information
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
                                                <h3>Customer Data</h3>
                                                <p>Customer Data.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Payment Information
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Orders
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Shipping Address
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                KYC Information
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
                                                <h3>Supplier Data</h3>
                                                <p> Ensuring your partners can trust your data integrity.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Contact Data
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Address
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Agreements
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Financial Data
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Dynamic Data
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Reports
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
                                                <h3>Product Data</h3>
                                                <p>Tracking the journey your products make throughout the Supply Chain.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Instant Verification
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Production Data
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Handling Information
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Bill of Materials
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Certificates
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Lifecycle Data
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