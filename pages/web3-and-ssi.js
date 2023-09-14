import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import MainBanner from "../components/Industries/Web3/MainBanner";
import Impact from "../components/Industries/Web3/Impact";
import Statistics from "../components/Industries/Web3/Statistics";
import ContactInfo from "../components/Contact/ContactInfo";
import UseCases from "../components/Industries/Web3/UseCases";
import ValueProposition from "../components/Industries/Web3/ValueProposition";
import Features from "../components/Common/Features";
import FeaturesBusiness from "../components/Common/FeaturesBusiness";
import Testimonials from "../components/Home/Testimonials";

class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head>
          <title>Tonomy ID: Supercharge your Web3 and SSI Apps</title>
          <meta
            name="description"
            content="Enabling mainstream-ready Web3 decentralised applications and Self-sovereign Identity (SSI) at scale that are user friendly and secure with Tonomy ID." />
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
