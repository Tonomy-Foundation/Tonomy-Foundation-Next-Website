import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import IdBanner from "../../components/Common/IdBanner";
import AboutID from "../../components/tonomy-id/about-id";
import UseCases from "../../components/tonomy-id/UseCases";
import TIDPartner from "../../components/Common/TIDPartner";
import TIDfeatures from "../../components/tonomy-id/Features-TonomyID";
import Join from "../../components/tonomy-id/join-us";
import WhyIsTIDBetter from "../../components/tonomy-id/WhyIsTIDBetter";
import TonomySecurity from "../../components/tonomy-id/TonomySecurity";
import Head from "next/head";

class Tonomyid extends Component {
  render() {
    return (
      <>
        <Navbar />

        <IdBanner
          pageTitle="Tonomy ID"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Contact Style One"
        />
        <TonomySecurity />
        <AboutID />
        <WhyIsTIDBetter />
        <UseCases />
        {/*old tonomy id section*/}
        {/* <section className="service-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-details-wrap">

                                <h3>Tonomy ID</h3>
                                <p>Tonomy ID with SSI <a href="https://www.youtube.com/watch?v=vuSPy1xMNVg">(Self-Sovereign Identity) </a> is a revolutionary way to securely and privately store your personal identity information. It allows you to digitally replace your wallet, storing all your important documents such as bank cards, passport, driver's license, medical records, diplomas, and property deeds. With SSI, you can also log into internet apps and share data privately, securely, and with consent.</p>
                                <p>Our open-source <a href="https://play.google.com/store/apps/details?id=foundation.tonomy.projects.tonomyidstaging">mobile app</a> software offers sovereign recovery, sybil protection, and SSI, making it more secure than traditional web-based systems. It is available for both iOS and Android devices.
                                Digital ID with SSI can also serve as a replacement for existing custodial identity systems such as email, oAuth, and openID connect. It offers a new sovereign internet architecture, allowing for autonomous access and data control without the need for SPF or custodians.
                                For more information, <a href="https://www.youtube.com/watch?v=HXTB2_Fki6s&t=2s">watch our Digital ID workshop</a> and discover the many ways that this innovative technology can benefit you.</p>

                                 <div className="car-service-list-wrap">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-list-img">
                                                <img src="/images/tonomy-id.jpg" alt="Image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="car-service-list">
                                                <ul>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Engine bay cleaned and dressed
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Door card panels cleaned
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Plastic trim enhanced
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Paint surface clay barred
                                                    </li>
                                                    <li>
                                                        <i className='bx bx-check'></i>
                                                        Alloy wheel treatment inside and out
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <AskQuestionForm />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </section> */}
        <TIDfeatures />
        <Join />
        {/* <TIDPartner/> */}
        <Footer />
      </>
    );
  }
}
export default Tonomyid;
