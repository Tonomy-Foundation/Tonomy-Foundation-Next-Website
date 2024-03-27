import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import GenerateKey from "../components/GenerateKey";
import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";

class Contact extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head>
          <meta
            name="description"
            content="Generate a random private key."
          />
        </Head>
        <PageBanner
          pageTitle="Generate Key"
          homePageUrl="/"
          homePageText="The Tonomy Foundation"
          activePageText="Building Ecosystems of Trust"
        />
        <GenerateKey />
        <Footer />
      </>
    );
  }
}

export default Contact;
