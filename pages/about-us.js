import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TeamTwo from "../components/Common/TeamTwo";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
class About1 extends Component {
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

        <TeamTwo />

        <Footer />
      </>
    );
  }
}

export default About1;
