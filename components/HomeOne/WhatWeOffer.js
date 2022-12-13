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
                                    className="current"
                                    onClick={(e) => openTabSection(e, 'tab1')}
                                >
                                    <span>
                                        <i className="flaticon-machine-learning"></i>
                                        <h3>Developer</h3>
                                        <p>Developer</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab2')}
                                >
                                    <span>
                                        <i className="flaticon-artificial-intelligence"></i>
                                        <h3>Investor</h3>
                                        <p>Investor</p>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab3')}
                                >
                                    <span>
                                        <i className="flaticon-health"></i>
                                        <h3>Tech Partner</h3>
                                        <p>Tech Partner</p>
                                    </span>
                                </li>

                                {/* <li
                                    onClick={(e) => openTabSection(e, 'tab4')}
                                >
                                    <span>
                                        <i className="flaticon-automation"></i>
                                        <h3>Manufacturing</h3>
                                        <p>All kind of industry</p>
                                    </span>
                                </li> */}
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
                                                <p>Join us to help build our future.</p>
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt?</p>
                                                
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Opportunities
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Creating
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Industries
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Security
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Highest
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Priority
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
                                                <p>Invest in our Tonomy.</p>
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt? Ab rerum eaque aperiam sequi dolore minus itaque eos!</p>

                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Security
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Highest
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Priority
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Opportunities
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Creating
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Industries
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
                                                <p>Help us become the better tomorrow.</p>
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt? Ab rerum eaque aperiam sequi dolore minus itaque eos!</p>
                                                
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Creating
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Consectetur
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Adipisicing
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Artificial
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Industry
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Opportunities
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
                                                <h3>Manufacturing</h3>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est atque recusandae esse alias reprehenderit.</p>
                                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea doloribus molestias illo ad aperiam quo natus voluptatum, eos laboriosam vel deserunt? Ab rerum eaque aperiam sequi dolore minus itaque eos!</p>
                                                
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Opportunities
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Creating
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Industries
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Security
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Highest
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Priority
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <Link href="/services">
                                                        <a className="default-btn">Discover More</a>
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