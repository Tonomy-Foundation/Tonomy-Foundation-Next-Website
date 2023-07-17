import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactFormStyleTwo from "../components/Contact/ContactForm";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

class Contact extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head>
            <title>Tonomy ID Contact Us - Reach Out to Our Experts for Secure Digital Identity Solutions</title>
            <meta
                name="description"
                content="Get in touch with Tonomy ID's team of experts for all your digital identity needs. We provide secure and innovative solutions to protect your online presence. Reach out to us today."
            />
        </Head>
        <PageBanner
          pageTitle="Contact us"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Contact us"
        />

        <ContactInfo />

        <ContactFormStyleTwo />

        <Footer />
      </>
    );
  }
}

export default Contact;
