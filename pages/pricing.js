import React, { Component } from "react";
import Link from "next/link";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PricingBanner from "../components/Pricing/PricingBanner";
import Head from "next/head";
import PricingOptions from "../components/Pricing/PricingOptions";

class PricingStyleOne extends Component {
  
  render() {
    return (
      <>
        <Navbar />
        <Head>
            <title>Tonomy ID Pricing - Secure Digital Identity Solutions for Every Business</title>
            <meta
                name="description"
                content="Explore Tonomy ID's pricing options for our secure digital identity solutions. Choose the plan that best fits your business needs and unlock the power of enhanced security, privacy, and compliance."
            />
        </Head>
        <PricingBanner />

        <PricingOptions />

        <Footer />
      </>
    );
  }
}

export default PricingStyleOne;
