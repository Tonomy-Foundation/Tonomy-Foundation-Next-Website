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
            content="Tonomy ID revolutionizes supply chain security with self-sovereign identity technology. Enable data portability, privacy, and accountability across your supply chain. Prevent costly data breaches, fraud, and disruptions. Trust Tonomy ID for tamper-resistant blockchain technology, verified supplier identities, and real-time product authentication. Enhance data integrity, sustainability, and ethical sourcing. Choose Tonomy ID for workforce identity management, compliance, unparalleled security, and reliable support. Safeguard employee, customer, supplier, and product data with our robust solutions."
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
