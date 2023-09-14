import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import MainBanner from "../components/UseCases/AntelopeWallet/MainBanner";
import Impact from "../components/UseCases/AntelopeWallet/Impact";
import ContactInfo from "../components/Contact/ContactInfo";
import UseCases from "../components/Industries/Web3/UseCases";
import ValueProposition from "../components/UseCases/AntelopeWallet/ValueProposition";
import Features from "../components/Common/Features";
import FeaturesBusiness from "../components/Common/FeaturesBusiness";
import Testimonials from "../components/Home/Testimonials";
import Demo from "../components/Common/Demo";
import Comparison from "../components/UseCases/AntelopeWallet/Comparison";

class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head>
          <title>Tonomy ID: Empowering Antelope Ecosystems for Mainstream Adoption</title>
          <meta
            name="description"
            content="An Antelope and Self-sovereign Identity (SSI) wallet built for user control and mainstream-ready user experience. Tonomy ID for Telos, EOS, WAX, UX Network and other Antelope chains."
          />
        </Head>

        <MainBanner />

        <Impact />

        <Comparison />

        <Testimonials />

        <ValueProposition />

        <UseCases />

        <Features />

        <FeaturesBusiness />

        <Demo />

        <ContactInfo contactPage="/contact/" />

        <Footer />
      </>
    );
  }
}

export default About;
