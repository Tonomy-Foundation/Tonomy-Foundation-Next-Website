import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import MainBanner from "../components/Industries/Web3/MainBanner";
import Impact from "../components/Industries/Web3/Impact";
import Statistics from "../components/Industries/Web3/Statistics";
import ContactInfo from "../components/Contact/ContactInfo";
import UseCases from "../components/Industries/Web3/UseCases";
import ValueProposition from "../components/Industries/Web3/ValueProposition";
import Features from "../components/Industries/Web3/Features";
import FeaturesBusiness from "../components/Industries/Web3/FeaturesBusiness";
import Testimonials from "../components/Home/Testimonials";

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

        <Testimonials />

        <ValueProposition />

        <UseCases />

        <Features />

        <FeaturesBusiness />

        <ContactInfo contactPage="/contact/" />

        <Footer />
      </>
    );
  }
}

export default About;
