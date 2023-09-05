import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import MainBanner from "../components/Industries/Gaming/MainBanner";
import Impact from "../components/Industries/Gaming/Impact";
import Statistics from "../components/Industries/Gaming/Statistics";
import ContactInfo from "../components/Contact/ContactInfo";
import DataWeProtect from "../components/Industries/Gaming/DataWeProtect";
import ValueProposition from "../components/Industries/Gaming/ValueProposition";

class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head>
          <title>The Future of Gaming: Seamlessly Integrating Digital Assets, Security, and Unmatched User Experience with Tonomy ID</title>
          <meta
            name="description"
            content="Experience the next era of gaming with Tonomy ID, where digital assets, NFTs, collectibles and top-tier cybersecurity meet to provide an unparalleled user experience. Level up your gaming journey now!"
          />
        </Head>

        <MainBanner />

        <Statistics />

        <Impact />

        <ValueProposition />

        <DataWeProtect />

        <ContactInfo contactPage="/contact/" />

        <Footer />
      </>
    );
  }
}

export default About;
