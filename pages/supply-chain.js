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
          <title>
            Unchain Trust: Tonomy ID Reinventing Supply Chain Security
          </title>
          <meta
            name="description"
            content="We empower you to modernize your supply chain powered by self-sovereign identity technology. We enable full data portability and interoperability by creating the framework to move data across multiple parties. This enables full scale privacy whilst being able to hold every actor of your supply chain accountable."
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
