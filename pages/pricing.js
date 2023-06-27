import React, { Component } from "react";
import Link from "next/link";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PricingBanner from "../components/Common/pricingBanner";
import Head from "next/head";

class PricingStyleOne extends Component {
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
  };

  render() {
    return (
      <>
        <Navbar />
        <Head>
          <meta
            name="description"
            content="We have different Pricing plans, first is infrastructure as a service, and the other one is self-hosted support."
          />
        </Head>
        <PricingBanner />

        <section className="pricing-area pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              {/* <span>Tonomy ID</span> */}
              <h2>Our Pricing Plan For You</h2>
              <p>
                We offer a variety of solutions for you to help you get started
                using Tonomy technologies!
              </p>
              <p>
                On average, our security technologies can mitigate €20 to €30,
                as well as 10 to 20 hours of compliance and other costs per user
                per month in both the EU and the USA.{" "}
                <a href="https://tonomy-id-sso-website.vercel.app/">
                  How do we do this?
                </a>
              </p>
              {/* <p>In our Software as a Service (SaaS) model, we will provide an Antelope blockchain for Tonomy ID, you can also use this to create smart contracts and other blockchain activities. The Antelope protocol also supports the Ethereum Virtual Machine, so if you are already working with Ethereum smart contracts, you should be able to migrate these onto the Antelope blockchain which has the benefit of being integrated with Tonomy ID.</p> */}
            </div>

            <div className="tab quote-list-tab">
              {/* Tabs */}
              <ul className="tabs">
                <li
                  className="current"
                  onClick={(e) => this.openTabSection(e, "tab1")}
                >
                  <span>Infrastructure as a service</span>
                </li>

                <li onClick={(e) => this.openTabSection(e, "tab2")}>
                  <span>Self-hosted support</span>
                </li>
              </ul>

              <div className="tab_content">
                <div id="tab1" className="tabs_item">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="single-pricing">
                        <div className="pricing-top-heading">
                          <h3>Tester</h3>
                          {/* <p>Tonomy ID</p> */}
                        </div>
                        <span>
                          €100<sub>/m</sub>
                        </span>
                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            White-labelled .apk (Android) and .ipa (iOS) files.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Shared blockchain. Not suitable for production.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Up to 100,000 accounts
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Documentation access
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Unlimited Verifiable Credentials issues, shared and
                            verified
                          </li>
                        </ul>

                        <Link href="/contact">
                          <a className="default-btn">Get Started</a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="single-pricing">
                        <div className="pricing-top-heading">
                          <h3>Production</h3>
                          {/* <p>Build A Website</p> */}
                        </div>
                        <span>
                          €1,500 - 15,000<sub>/m</sub>
                        </span>

                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            White-labelled .apk (Android) and .ipa (iOS) files
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            High availability 5 node blockchain
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Up to 10M accounts
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Documentation access
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Dedicated history API nodes
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Automated blue/green upgrades
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            SLAs for production deployments, including 24-7-365
                            support
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Unlimited Verifiable Credentials issues, shared and
                            verified
                          </li>
                        </ul>

                        <Link href="/contact">
                          <a className="default-btn">Get Started</a>
                        </Link>

                        <strong className="popular">Popular</strong>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                      <div className="single-pricing">
                        <div className="pricing-top-heading">
                          <h3>Enterprise</h3>
                          {/* <p>Contact Us</p> */}
                        </div>
                        <span>
                          <a href="https://us12.list-manage.com/contact-form?u=fdd40ebf441b888a2d75c41fd&form_id=eee2e8567ab48c31cc20a0349787ec09">
                            Contact&nbsp;us
                          </a>
                        </span>
                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            Includes everything in production
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Enterprise-grade security
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            App customizations
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Customized consulting
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Assistance in white label
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Assistance in new app integration
                          </li>
                        </ul>

                        <Link href="/contact">
                          <a className="default-btn">Get Started</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab2" className="tabs_item">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="single-pricing">
                        <div className="pricing-top-heading">
                          <h3>DIY</h3>
                          <p>Run the open source software yourself</p>
                        </div>
                        <span>Free</span>

                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            Documentation access
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Access to all app and system open-source software.
                            Apache 2.0 license
                          </li>
                        </ul>

                        <Link href="https://github.com/Tonomy-Foundation/">
                          <a className="default-btn">Get Started</a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="single-pricing">
                        <div className="pricing-top-heading">
                          <h3>Pro</h3>
                          <p>
                            Run the open source software yourself with our help
                          </p>
                        </div>
                        <span>
                          €1500 - €15000<sub>/m</sub>
                        </span>

                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            Includes everything in DIY
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            10 hours of core engineer access, valued at €2,600
                            under normal consulting agreements
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Upgrade support
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            24/7/365 support with a dedicated communication
                            channel in Discord
                            <br />
                            Phone support
                          </li>
                          <li>
                            <i className="bx bx-x"></i>
                            Customized consulting
                          </li>
                          <li>
                            <i className="bx bx-x"></i>
                            Assistance with white labeling
                          </li>
                          <li>
                            <i className="bx bx-x"></i>
                            Assistance with new app integration
                          </li>
                        </ul>

                        <Link href="/contact">
                          <a className="default-btn">Get Started</a>
                        </Link>

                        <strong className="popular">Popular</strong>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                      <div className="single-pricing">
                        <div className="pricing-top-heading">
                          <h3>Enterprise</h3>
                          {/* <p>Contact Us</p> */}
                        </div>
                        <span>
                          <a href="https://us12.list-manage.com/contact-form?u=fdd40ebf441b888a2d75c41fd&form_id=eee2e8567ab48c31cc20a0349787ec09">
                            Contact&nbsp;us
                          </a>
                        </span>

                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            Documentation access
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Upgrade support
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            24-7-365 support with Dedicated communication
                            channel in Discord
                            <br />
                            Phone support
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Customized consulting
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Assistance in white label
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Assistance in new app integration
                          </li>
                        </ul>

                        <Link href="/contact">
                          <a className="default-btn">Get Started</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default PricingStyleOne;
