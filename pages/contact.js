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
          <meta
            name="description"
            content="Send a message or call us for more details."
          />
        </Head>
        <PageBanner
          pageTitle="About us"
          homePageUrl="/"
          homePageText="The Tonomy Foundation"
          activePageText="Building Ecosystems of Trust"
        />

        <ContactInfo />

        <ContactFormStyleTwo />

        <Footer />
      </>
    );
  }
}

export default Contact;
