import React, { Component } from 'react';
import Link from 'next/link';

const UseCases = () => {

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
            <div className="container pt-20">
                <div className="section-title">
                    <span></span>
                    <h2>Who can use tonomy ID?</h2>
                    <p></p>
                </div>

                <div className="tab industries-list-tab">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            {/* Tabs navs */}
                            <ul className="tabs">
                                <li
                                    onClick={(e) => openTabSection(e, 'tab1')}
                                >
                                    <span>
                                        <i className="flaticon-artificial-intelligence"></i>
                                        <h3 className="pl-20">Web 2.0</h3>
                                    </span>
                                </li>

                                <li
                                    className="current"
                                    onClick={(e) => openTabSection(e, 'tab2')}
                                >
                                    <span>
                                        <i className="flaticon-machine-learning"></i>
                                        <h3 className="pl-20">Supplychain</h3>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab3')}
                                >
                                    <span>
                                        <i className="flaticon-technical-support"></i>
                                        <h3 className="pl-20">Web 3.0</h3>
                                    </span>
                                </li>
                                <li
                                    onClick={(e) => openTabSection(e, 'tab4')}
                                >
                                    <span>
                                        <i className="flaticon-automation"></i>
                                        <h3 className="pl-20">Medical</h3>
                                    </span>
                                </li>
                                {/* copy this for new section button*/}
                                {/* <li
                                    className="current"
                                    onClick={(e) => openTabSection(e, 'tab1')}
                                >
                                    <span>
                                        <i className="flaticon-machine-learning"></i>
                                        <h3 className="pl-20">section name here</h3>
                                    </span>
                                </li> */}


                            </ul>
                        </div>
                        
                        <div className="col-lg-9">
                            <div className="tab_content">
                                {/* copy this if you want to make a new section */}
                                
                                {/* <div id="tab1" className="tabs_item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-img left-img">
                                                <img src="/images/developer.svg" alt="Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>Tonomy ID</h3>
                                                <p> </p>                          
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Blockchain
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Innovation
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Open source
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                SSI
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Web3
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                W3C web standards
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            
                                                <div className="text-center">
                                                    <Link href="https://www.discord.gg/QqVJz5XF8d">
                                                        <a className="default-btn">Join Us</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                
                                {/* Tab item #1 */}
                                <div id="tab1" className="tabs_item">
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>Web 2.0</h3>
                                                <p>The reason why Tonomy ID can help web 2.0 is beacuase Tonomy ID is a decentralized form of user authentication that allows users to log in to websites and apps without a central third party. It could also be used to create a more personalized web experience, enable new forms of online collaboration, and give users more control over their data and online interactions.</p>
                                                <div className="row">
                                                <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Open source
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Instant Login
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Sign Documents Digitally
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                One login system for everything
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Reducing administration
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                All data on blockchain
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                {/* <div className="text-center">
                                                    <Link href="https://www.discord.gg/QqVJz5XF8d">
                                                        <a className="default-btn">Join Us</a>
                                                    </Link>
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-img right-img">
                                                <img src="/images/investor.svg" alt="Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab item #2 */}
                                <div id="tab2" className="tabs_item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-img left-img">
                                                <img src="/images/developer.svg" alt="Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>Supplychain</h3>
                                                <p>Tonomy ID can be useful in supply chain by providing secure digital identity verification, reducing fraud risk and improving transparency and accountability through tracking and tracing products throughout the supply chain.</p>                          
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Secure digital identity verification
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Fraud prevention
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Improved transparency
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Streamlined processes
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Better risk management
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Compliance
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab item #3 */}
                                <div id="tab3" className="tabs_item">
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-img left-img">
                                                <img src="/images/contributor.svg" alt="Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>Web 3.0</h3>
                                                <p>What our technology can provide here is that we are already working a lot with the goals that web 3.0 is doing, We are working with blockchain to make ID more secure and make it have more privacy. What tonomy could provide for Web 3.0 is: </p>                           
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Open source
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Instant Login
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Sign Documents Digitally
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                One login system for everything
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Reducing administration
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                All data on blockchain
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* <div className="text-center">
                                                    <Link href="https://www.discord.gg/QqVJz5XF8d">
                                                        <a className="default-btn">Join us</a>
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
                                                <h3>Medical</h3>
                                                <p>Healthcare reforms or other initiatives 
                                                   implemented all over Europe aimed at rationalising the use and provision
                                                   of hospital care, improving its quality and appropriateness, and 
                                                   reducing its costs. The number of hospital facilities decreased in most 
                                                   countries while the number of hospital beds decreased on average. These 
                                                   reforms/initiatives also resulted in a broad reduction of acute care 
                                                   admissions and length of stay. We think Tonomy can help with these issues becuase Tonomy ID can provide: </p>
                                                
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Accurately identify patients
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Easy acces to medical records
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Authorization needed for patient information
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Track medical equipment
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Save time by automating tasks
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Improve patient engagement
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* <div className="text-center">
                                                    <Link href="https://www.discord.gg/QqVJz5XF8d">
                                                        <a className="default-btn">Join us</a>
                                                    </Link>
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-img right-img">
                                                <img src="/images/tech-partner.svg" alt="Image" />
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

export default UseCases;