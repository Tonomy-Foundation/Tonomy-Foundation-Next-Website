import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import MainBanner from "../components/UseCases/Finance/MainBanner";
import Impact from "../components/UseCases/Finance/Impact";
import Statistics from "../components/UseCases/Finance/Statistics";
import ContactInfo from "../components/Contact/ContactInfo";
import DataWeProtect from "../components/UseCases/Finance/DataWeProtect";

class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head>
            <title>Unleashing Trust in Finance and Banking: Tonomy ID's Unparalleled Data Protection</title>
            <meta
                name="description"
                content="Unveil the power of Tonomy ID in securing financial transactions, preserving trust, and providing impenetrable data protection for finance and banking institutions."
            />
        </Head>

        <MainBanner />

        <Statistics />

        <Impact />

        <DataWeProtect />

        <ContactInfo contactPage="/contact/"/>

        <Footer />
      </>
    );
  }
}

export default About;
