import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Team from "../components/About/Team";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

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
        <PageBanner
          pageTitle="About us"
        />

        <Team />

        <Footer />
      </>
    );
  }
}

export default About;
