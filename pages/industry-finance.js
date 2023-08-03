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
            <title>Tonomy ID About Us and Meet the Team</title>
            <meta
                name="description"
                content="Discover the story behind Tonomy ID and our mission to revolutionize digital identity. Meet our expert team of innovators dedicated to providing unmatched security, privacy, and compliance in the digital landscape."
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
