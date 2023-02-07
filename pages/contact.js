import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactFormStyleTwo from "../components/Contact/ContactForm";
import Footer from "../components/Layouts/Footer";

class Contact extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="Contact us"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Contact us"
        />

        <ContactInfo />

        {/* <ContactFormStyleTwo /> */}

        <Footer />
      </>
    );
  }
}

export default Contact;
