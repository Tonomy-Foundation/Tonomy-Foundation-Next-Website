import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import MainBanner from "../components/Industries/Healthcare/MainBanner";
import Impact from "../components/Industries/Healthcare/Impact";
import Statistics from "../components/Industries/Healthcare/Statistics";
import ContactInfo from "../components/Contact/ContactInfo";
import DataWeProtect from "../components/Industries/Healthcare/DataWeProtect";
import ValueProposition from "../components/Industries/Healthcare/ValueProposition";

class About extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head>
          <title>Tonomy ID: Your Shield in Healthcare</title>
          <meta
            name="description"
            content="Experience the best in healthcare security with Tonomy ID. Privacy, data portability, and integration made effortless."
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
