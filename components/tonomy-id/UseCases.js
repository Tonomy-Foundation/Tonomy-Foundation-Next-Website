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
                                    onClick={(e) => openTabSection(e, 'tab2')}
                                >
                                    <span>
                                        <i className="flaticon-artificial-intelligence"></i>
                                        <h3 className="pl-20">Investors</h3>
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab3')}
                                >
                                    <span>
                                        <i className="flaticon-technical-support"></i>
                                        <h3 className="pl-20">Tech Partners</h3>
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
                                <li
                                    className="current"
                                    onClick={(e) => openTabSection(e, 'tab1')}
                                >
                                    <span>
                                        <i className="flaticon-machine-learning"></i>
                                        <h3 className="pl-20">Developers</h3>
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
                                                <img src="/images/developer.svg" alt="Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>W.I.P.</h3>
                                                <p>Attention Developers! Are you ready to make a real impact in the world through your work? Then you need to join Tonomy! This organization is dedicated to building open source technology with the goal of making society more transparent and democratic. This is a mission that aligns with your values and working on open source projects will be a fulfilling way to contribute to positive social change. Don't miss out on this opportunity to not only make a difference, but also to learn, grow, and develop professionally. Don't wait any longer, join Tonomy now and make your mark on the world!</p>                          
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
                                </div>
                                
                                {/* Tab item #2 */}
                                <div id="tab2" className="tabs_item">
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-content">
                                                <h3>W.I.P.</h3>
                                                <p>Tonomy is leading the charge in the development of open source technology that is driving the demand for accountability and trust in society. With their cutting-edge approach and commitment to excellence, Tonomy is positioning itself as the go-to choice for investors looking to get in on the ground floor of something big. Don't miss out on the opportunity to be a part of something special – invest in Tonomy now and watch your returns soar as they continue to innovate and build secure, robust systems that drive financial success.</p>
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Ethical investment
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
                                                <img src="/images/investor.svg" alt="Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab item #3 */}
                                <div id="tab3" className="tabs_item">
                                    <div className="row  align-items-center">
                                        <div className="col-lg-6">
                                            <div className="industries-img left-img">
                                                <img src="/images/tech-partner.svg" alt="Image" />
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
                                                <p>In the last 15 years, healthcare reforms or other initiatives 
                                                   implemented all over Europe aimed at rationalising the use and provision
                                                   of hospital care, improving its quality and appropriateness, and 
                                                   reducing its costs. The number of hospital facilities decreased in most 
                                                   countries while the number of hospital beds decreased on average. These 
                                                   reforms/initiatives also resulted in a broad reduction of acute care 
                                                   admissions and length of stay, as well as in improvements in the 
                                                   occupancy rate of acute care beds. We think Tonomy can help with these issues becuase Tonomy ID can provide: </p>
                                                
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                W.I.P.
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Access to expertise
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Develop new skills
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

                                                {/* <div className="text-center">
                                                    <Link href="https://www.discord.gg/QqVJz5XF8d">
                                                        <a className="default-btn">Join us</a>
                                                    </Link>
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="industries-img right-img">
                                                <img src="/images/contributor.svg" alt="Image" />
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