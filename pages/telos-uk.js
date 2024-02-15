import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import Telos from "../components/Telos";

class TelosUk extends Component {
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

        <Telos />

        <Footer />
      </>
    );
  }
}

export default TelosUk;
