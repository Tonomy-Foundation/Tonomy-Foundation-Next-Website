import React, { Component } from 'react';
import Link from 'next/link';

const WhatWeOffer = () => {

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
                    <h2>Join Tonomy</h2>
                    <p>We need you to make a better society and for a more transparant future.</p>
                </div>

                <div className="tab industries-list-tab">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            {/* Tabs navs */}
                            <ul className="tabs">
                                <li
                                    onClick={(e) => openTabSection(e, 'tab2')}
                                >
                                    <span>
                                        <i className="flaticon-artificial-intelligence"></i>
                                        <h3>Investor</h3>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab3')}
                                >
                                    <span>
                                        <i className="flaticon-health"></i>
                                        <h3>Tech Partner</h3>
                                    </span>
                                </li>
                                <li
                                    onClick={(e) => openTabSection(e, 'tab4')}
                                >
                                    <span>
                                        <i className="flaticon-automation"></i>
                                        <h3>Contributor</h3>
                                    </span>
                                </li>
                                <li
                                    className="current"
                                    onClick={(e) => openTabSection(e, 'tab1')}
                                >
                                    <span>
                                        <i className="flaticon-machine-learning"></i>
                                        <h3>Developer</h3>
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
                                                <h3>Developer</h3>
                                                <p>Developers should consider joining Tonomy because it is an organization that builds open source technology with the goal of making society more transparent and democratic. This mission aligns with the values of many developers, and working on open source projects can be a rewarding way to contribute to positive social change. Additionally, collaborating on open source projects can provide opportunities for learning, personal growth, and professional development.</p>
                                                
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Collaboration
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Innovation
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Transparency
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Democracy
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Fairness
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Trust
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
                                </div>
                                
                                {/* Tab item #2 */}
                                <div id="tab2" className="tabs_item">
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>Investor</h3>
                                                <p>Investing in Tonomy may be a good opportunity for investors because the organization's mission to build open source technology that promotes transparency and democracy aligns with increasing demand for accountability and trust in society. Tonomy's work in this area may lead to innovation and the development of robust and secure systems, potentially resulting in financial returns for investors.</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Trancparency
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Democratic tools
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Social impact
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Innovation
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Diversification
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Scalability
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
                                                <h3>Tech partner</h3>
                                                <p>Being a technical partner of Tonomy can be beneficial because it allows organizations to contribute to and support the development of open source technology that promotes transparency and democracy in society. This can lead to innovation and the creation of more robust and secure systems, as well as opportunities for collaboration and the exchange of ideas with other technical partners. Additionally, being a technical partner can help organizations align with the values of Tonomy and demonstrate their commitment to promoting transparency and democracy in society.</p>
                                                
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Open source
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Access to expertise
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Cost savings
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Innovation
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Transparency
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Democracy
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <Link href="https://www.discord.gg/QqVJz5XF8d">
                                                        <a className="default-btn">Join us</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab item #4 */}
                                <div id="tab4" className="tabs_item">
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>Contributors</h3>
                                                <p>Being a contributor to Tonomy can allow you to make a positive impact on society by helping to build open source technology that promotes transparency and democracy. It also offers the opportunity to collaborate with a diverse group of individuals and organizations, learn new skills, and contribute to the development of innovative and robust systems.</p>
                                                
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Opportunities
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Access to expertise
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                To develop new skills
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Horizontal structure
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Democracy
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Healthy atmosphere
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <Link href="https://www.discord.gg/QqVJz5XF8d">
                                                        <a className="default-btn">Join us</a>
                                                    </Link>
                                                </div>
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

export default WhatWeOffer;