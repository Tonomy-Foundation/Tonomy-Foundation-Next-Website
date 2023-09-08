import React from "react";
import Link from "next/link";
import { AnimatedHeroImage, bannerStyles } from "../../Home/MainBanner";
import animatedData from "../../assets/banking_finance_animation.json";

const MainBanner = () => {
  return (
    <section className="main-banner-area main-banner-area-two">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-text">
              <h1>Security First, Reputation Always. Tonomy ID Protects.</h1>
              <p>
                Defend against credential theft, phishing, and server breaches.
                Compliance by default, fraud-proof data, and seamless identity
                verification build trust in finance and banking.
              </p>

              <div className="banner-btn">
                <Link href="/">
                  <a className="default-btn active">More About Tonomy ID</a>
                </Link>

                <Link href="/contact">
                  <a className="default-btn">Contact Us</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="banner-main-img banner-one-main-img ">
              <div>
                <AnimatedHeroImage key={1} animatedData={animatedData} />
              </div>
            </div>
            <div className="banner-img banner">
              <AnimatedHeroImage key={1} animatedData={animatedData} />
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="over-shape">
        <img src="/images/home-one/shape/animate1.png" alt="Image" />
        <img src="/images/home-one/shape/animate2.png" alt="Image" />
        <img src="/images/home-one/shape/animate3.png" alt="Image" />
      </div>
    </section>
  );
};

export default MainBanner;
