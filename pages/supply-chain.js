import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import MainBanner from "../components/Industries/SupplyChain/MainBanner";
import Impact from "../components/Industries/SupplyChain/Impact";
import Statistics from "../components/Industries/SupplyChain/Statistics";
import ContactInfo from "../components/Contact/ContactInfo";
import DataWeProtect from "../components/Industries/SupplyChain/DataWeProtect";
import ValueProposition from "../components/Industries/SupplyChain/ValueProposition";

class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head>
          <title>Unleashing Trust in Finance and Banking: Tonomy ID's Unparalleled Data Protection</title>
          <meta
            name="description"
            content="Defend against credential theft, phishing, and server breaches. Compliance by default, fraud-proof data, and seamless identity verification build trust in finance and banking."
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
