import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global styles
import "../styles/style.css";
import "../styles/responsive.css";

import App from "next/app";
import Head from "next/head";
import GoTop from "../components/Shared/GoTop";
import { injectAnalytics } from "../utils/analytics";

export default class MyApp extends App {
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  componentDidMount() {
    injectAnalytics();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Tonomy Foundation</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="/images/tonomy-logo48.png" />
        </Head>

        <Component {...pageProps} />

        {/* Go Top Button */}
        <GoTop scrollStepInPx="100" delayInMs="10.50" />
      </>
    );
  }
}
