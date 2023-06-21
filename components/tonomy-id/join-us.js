import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";

const join = () => {
  const openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item2");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };

  return (
    <>
    
        <section className="industries-area pb-100">
            <div className="container pt-20">
                <div className="section-title">
                    <span></span>
                    <h2>Join Tonomy</h2>
                    <p>We need you to make a better society and for a more transparent future.</p>
                </div>

          <div className="tab industries-list-tab">
            <div className="row align-items-center">
              <div className="col-lg-3">
                {/* Tabs navs */}
                <ul className="tabs">
                  <li onClick={(e) => openTabSection(e, "tab5")}>
                    <span>
                      <i className="flaticon-artificial-intelligence"></i>
                      <h3 className="pl-20">Investors</h3>
                    </span>
                  </li>


                  <li onClick={(e) => openTabSection(e, "tab6")}>
                    <span>
                      <i className="flaticon-technical-support"></i>
                      <h3 className="pl-20">Tech Partners</h3>
                    </span>
                  </li>
                  <li onClick={(e) => openTabSection(e, "tab7")}>
                    <span>
                      <i className="flaticon-automation"></i>
                      <h3 className="pl-20">Contributors</h3>
                    </span>
                  </li>
                  <li
                    className="current"
                    onClick={(e) => openTabSection(e, "tab8")}
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
                  <div id="tab8" className="tabs_item2">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="industries-img left-img">
                          <img src="/images/developer.svg" alt="Image" />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="industries-content">
                          <h3>Developers</h3>
                          <p>
                            Attention Developers! Are you ready to make a real
                            impact in the world through your work? Then you need
                            to join Tonomy! This organization is dedicated to
                            building open source technology with the goal of
                            making society more transparent and democratic. This
                            is a mission that aligns with your values and
                            working on open source projects will be a fulfilling
                            way to contribute to positive social change. Don't
                            miss out on this opportunity to not only make a
                            difference, but also to learn, grow, and develop
                            professionally. Don't wait any longer, join Tonomy
                            now and make your mark on the world!
                          </p>
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
                  <div id="tab5" className="tabs_item2">
                    <div className="row  align-items-center">
                      <div className="col-lg-6">
                        <div className="industries-content">
                          <h3>Investors</h3>
                          <p>
                            Tonomy is leading the charge in the development of
                            open source technology that is driving the demand
                            for accountability and trust in society. With their
                            cutting-edge approach and commitment to excellence,
                            Tonomy is positioning itself as the go-to choice for
                            investors looking to get in on the ground floor of
                            something big. Don't miss out on the opportunity to
                            be a part of something special – invest in Tonomy
                            now and watch your returns soar as they continue to
                            innovate and build secure, robust systems that drive
                            financial success.
                          </p>
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
                          <img src="/images/pitching.svg" alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab item #3 */}
                  <div id="tab6" className="tabs_item2">
                    <div className="row  align-items-center">
                      <div className="col-lg-6">
                        <div className="industries-img left-img">
                          <img src="/images/technology.svg" alt="Image" />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="industries-content">
                          <h3>Tech partners</h3>
                          <p>
                            Our technology provides a secure and efficient
                            solution for managing digital interactions and
                            transactions, which will greatly benefit many
                            industries. By leveraging our state-of-the-art
                            technology, tech partners can improve their services
                            and offerings, ultimately providing a better
                            experience for their customers. And by running our
                            technology on our ecosystem, tech partners can take
                            advantage of the scalability, reliability, and
                            support that we offer. Don't miss out on this
                            opportunity to improve your business and provide
                            value to your customers.
                          </p>
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
                                  Faster user onboarding
                                </li>
                                <li>
                                  <i className="flaticon-checked"></i>
                                  Faster decision making
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
                  <div id="tab7" className="tabs_item2">
                    <div className="row  align-items-center">
                      <div className="col-lg-6">
                        <div className="industries-content">
                          <h3>Contributors</h3>
                          <p>
                            Your involvement will not only allow you to make a
                            real difference in the world through the development
                            of open source technology that promotes transparency
                            and democracy, but it will also provide you with the
                            chance to work with a diverse group of individuals
                            and organizations. You will have the opportunity to
                            learn new skills and contribute to the creation of
                            innovative and robust systems. Do not let this
                            opportunity pass you by - join us as a contributor
                            to Tonomy and make a positive impact on society
                            today!{" "}
                          </p>
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

                          <div className="text-center">
                            <Link href="https://www.discord.gg/QqVJz5XF8d">
                              <a className="default-btn">Join us</a>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="industries-img right-img">
                          <img src="/images/information.svg" alt="Image" />
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
    </>
  );
};

export default join;
