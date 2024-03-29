import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Team from "../components/About/Team";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";

class About1 extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head>
          <meta
            name="description"
            content="We are non-profit organization that focuses on using advanced open source technology. 
          The Tonomy Foundation has a dedicated team of professionals who are experts in their respective fields. 
          The organization also works closely with trusted partners who share their vision and values."
          />
        </Head>
        <PageBanner
          pageTitle="About us"
          homePageUrl="/"
          homePageText="The Tonomy Foundation"
          activePageText="Building Ecosystems of Trust"
        />

        <Team />

        <div className="pb-50">
          <Partner />
        </div>

        <Footer />
      </>
    );
  }
}

export default About1;
