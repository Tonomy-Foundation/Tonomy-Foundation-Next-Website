import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "swiper/css";
import "swiper/css/bundle";
import TagManager from 'react-gtm-module';

// Global styles
import "../styles/style.css";
import "../styles/responsive.css";

import App from "next/app";
import Head from "next/head";
import GoTop from "../components/Shared/GoTop";

function injectMatomoAnalytics() {
  const _mtm = window._mtm = window._mtm || [];
  _mtm.push({ 'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start' });
  const d = document;
  const g = d.createElement('script');
  const s = d.getElementsByTagName('script')[0];
  g.async = true;
  g.src = 'https://cdn.matomo.cloud/tonomy.matomo.cloud/container_Lj4VYEcS.js';
  s.parentNode.insertBefore(g, s);
}

function injectGoogleTagManager() {
  TagManager.initialize({
    gtmId: 'G-736JT4GEW4'
  })
}

export default class MyApp extends App {
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  componentDidMount() {
    injectMatomoAnalytics();
    injectGoogleTagManager();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Component {...pageProps} />

        {/* Go Top Button */}
        <GoTop scrollStepInPx="100" delayInMs="10.50" />
      </>
    );
  }
}
