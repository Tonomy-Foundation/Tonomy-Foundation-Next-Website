import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import MainBanner from "../components/Industries/Telecommunications/MainBanner";
import Impact from "../components/Industries/Telecommunications/Impact";
import Statistics from "../components/Industries/Telecommunications/Statistics";
import ContactInfo from "../components/Contact/ContactInfo";
import DataWeProtect from "../components/Industries/Telecommunications/DataWeProtect";
import ValueProposition from "../components/Industries/Telecommunications/ValueProposition";

class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head>
          <title>Telecommunications Demands Cutting Edge Cybersecurity</title>
          <meta
            name="description"
            content="Tonomy ID offers a compliant Identity Management Framework to safeguard your telecom customers. Prevent data breaches and SIM Swap attacks, saving millions of dollars. Streamline customer onboarding, ensure secure subscriber authentication, and boost compliance with KYC processes. Protect payment information and facilitate secure data sharing while enhancing customer trust. Choose Tonomy ID for robust cybersecurity tailored to telecom providers' needs. Secure sensitive data, documents, and payment information effortlessly with self-sovereign architecture and GDPR compliance."
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
