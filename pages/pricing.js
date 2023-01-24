import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PricingBanner from '../components/Common/pricingBanner';

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
    }

    render() {
        return (
            <>
            <Navbar />
            <PricingBanner/>
                        
            <section className="pricing-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        {/* <span>Tonomy ID</span> */}
                        <h2>Our Pricing Plan For You</h2>
                        <p>Tonomy ID uses the <a href="https://antelope.io/">Antelope </a>(formerly called <a href="https://eos.io/">EOSIO</a>) protocol for storing public keys and other anonymised cryptographic information related to each user's identity. This is done by running an Antelope blockchain network. This is a requirement to use Tonomy ID.</p>
                        <p>In our Software as a Service (SaaS) model, we will provide an Antelope blockchain for Tonomy ID, you can also use this to create smart contracts and other blockchain activities. The Antelope protocol also supports the Ethereum Virtual Machine, so if you are already working with Ethereum smart contracts, you should be able to migrate these onto the Antelope blockchain which has the benefit of being integrated with Tonomy ID.</p>
                        <p>If you already have an Antelope network then we are ready to do an on-site installation with you. You can do this yourself with our open-source technologies, or we can support you using one of our  Self-hosted support packages.</p>
                    </div>

                    <div className="tab quote-list-tab">
                        {/* Tabs */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <span>Software as a Service</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
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

                                            <ul>
                                            <span>€150<sub>/m</sub></span>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    White-labelled .apk (Android) and .ipa (iOS) files.
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    High availability 3-5 node blockchain with dedicated.
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Transaction and history API nodes.
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Approximately 1000-2000 trx/s and up to 10M accounts.
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Up to 1000 Subscribers
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Documentation access
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    SLAs for production deployments, including 24-7-365 support 
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Enterprise-grade security
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Automated upgrades
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    App customizations
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Production</h3>
                                                {/* <p>Build A Website</p> */}
                                            </div>
                                            <span>€500-2000<sub>/m</sub></span>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    White-labelled .apk (Android) and .ipa (iOS) files.
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    High availability 3-5 node blockchain with dedicated.
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Transaction and history API nodes.
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Approximately 1000-2000 trx/s and up to 10M accounts.
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Up to 1000 Subscribers
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Automated upgrades
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Documentation access
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    SLAs for production deployments, including 24-7-365 support 
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Enterprise-grade security
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    App customizations
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>

                                            <strong className="popular">Popular</strong>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Enterprise</h3>
                                                <p>Contact Us</p>
                                            </div>
                                            {/* <span>$79 <sub>/m</sub></span> */}

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    White-labelled .apk (Android) and .ipa (iOS) files.
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    High availability 3-5 node blockchain with dedicated.
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Transaction and history API nodes.
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Approximately 1000-2000 trx/s and up to 10M accounts.
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Up to 1000 Subscribers
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Automated upgrades
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Documentation access
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    SLAs for production deployments, including 24-7-365 support 
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Enterprise-grade security
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    App customizations
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
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
                                            <span>€0<sub>/m</sub></span>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Documentation access
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Upgrade support
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    24-7-365 support with direct slack channel access. Phone support.
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Customise consulting
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Assistance in while label
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Assistance into new app integration
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Pro</h3>
                                                {/* <p>Build A Website</p> */}
                                            </div>
                                            <span>€1000<sub>/m</sub></span>

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Documentation access
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Upgrade support
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    24-7-365 support with direct slack channel access. Phone support.
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Customise consulting
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Assistance in while label
                                                </li>
                                                <li>
                                                    <i className='bx bx-x'></i>
                                                    Assistance into new app integration
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>

                                            <strong className="popular">Popular</strong>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                                        <div className="single-pricing">
                                            <div className="pricing-top-heading">
                                                <h3>Enterprise</h3>
                                                <p>Contact Us</p>
                                            </div>
                                            {/* <span>$99<sub>/y</sub></span> */}

                                            <ul>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Documentation access
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Upgrade support
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    24-7-365 support with direct slack channel access. Phone support.
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Customise consulting
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Assistance in while label
                                                </li>
                                                <li>
                                                    <i className='bx bx-check'></i>
                                                    Assistance into new app integration
                                                </li>
                                            </ul>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
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