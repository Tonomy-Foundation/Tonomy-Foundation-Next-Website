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
                    <h2>Safeguarding Critical Healthcare Information</h2>
                    <p>Tonomy ID safeguards data with end-to-end encryption, tamper-proof digital signatures, and secure user-owned wallets, ensuring unparalleled protection against breaches and unauthorized access.</p>
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
                                        <h3>Patient Medical Records</h3>
                                        <p>Client Trust Preserved</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab2')}
                                >
                                    <span>
                                        <i className="flaticon-artificial-intelligence"></i>
                                        <h3>Healthcare Communication Data</h3>
                                        <p>Safty First</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab3')}
                                >
                                    <span>
                                        <i className="flaticon-health"></i>
                                        <h3>Healthcare Administration Data</h3>
                                        <p>Secure Data, Frictionless Processes</p>
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
                                                <h3>Patient Medical Records</h3>
                                                <p>Tonomy ID ensures secure storage and controlled sharing of patient medical histories.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Diagnoses
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Treatments
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Lab Results
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Medications
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Imaging Data
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
                                                <h3>Healthcare Communication Data</h3>
                                                <p>Explore how Tonomy ID protects patient-provider communications and appointments.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Appointments
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Consultations
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Consultations
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Treatment Plans
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Patient Alerts
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Prescriptions
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
                                                <h3>Healthcare Administration Data</h3>
                                                <p>Discover how Tonomy ID protects administrative data for efficient healthcare operations.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Billing Information
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Insurance Records
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Claims Processing
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Provider Credentials
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Patient IDs
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
                                                <h3>Customer Identification Documents</h3>
                                                <p>Customer identification documents, such as passports, driver's licenses, and national ID cards, are crucial for verifying customer identities during onboarding and financial transactions.</p>
                                                <p>Protecting these documents with Tonomy ID's secure digital signatures helps banks ensure reliable customer verification, reducing the risk of identity fraud and meeting compliance requirements.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Instant Verification
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Compliance
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Fraud Prevention
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Tamper Proof
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                User-origin Guaranteed
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Non-repudiation
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