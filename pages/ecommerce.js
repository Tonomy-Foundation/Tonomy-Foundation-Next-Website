import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import MainBanner from "../components/Industries/Ecommerce/MainBanner";
import Impact from "../components/Industries/Ecommerce/Impact";
import Statistics from "../components/Industries/Ecommerce/Statistics";
import ContactInfo from "../components/Contact/ContactInfo";
import DataWeProtect from "../components/Industries/Ecommerce/DataWeProtect";
import ValueProposition from "../components/Industries/Ecommerce/ValueProposition";

class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head>
          <title>Simplify Your Ecommerce: Tonomy ID Enables Seamless Secure Payment and Solutions</title>
          <meta
            name="description"
            content="Upgrade your online store with Tonomy ID for enhanced security, privacy, and convenience. Protect your data, prevent data breaches, and enjoy a safer eCommerce future. Reduce cart abandonment, offer personalized shopping experiences, and boost loyalty. Trust Tonomy ID for top-tier data security, effortless GDPR compliance, and a frictionless user experience. Your perfect eCommerce partner for the evolving digital landscape."
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
