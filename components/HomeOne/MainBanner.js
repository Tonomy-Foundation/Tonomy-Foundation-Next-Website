import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <section className="main-banner-area main-banner-area-one">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-text">
              <h1>The Tonomy Foundation</h1>
              <p>
              Welcome to our nonprofit organization's website! We are dedicated to developing open source solutions for digital identification using self-sovereign identity (SSI) technology. Our goal is to make it easier for government agencies and commercial companies to securely and efficiently manage digital interactions and transactions. With our innovative products and cutting-edge technology, we are leading the charge in the digital government revolution.
                <br></br>
                <br></br> Thank you for visiting and we hope you will join us in our mission to bring the benefits of digital identification to everyone.
              </p>

              <div className="banner-btn">
                <Link href="https://www.discord.gg/QqVJz5XF8d" target="_blank">
                  <a className="default-btn">Join us!</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Main Image */}
            <div className="banner-main-img banner-one-main-img">
              <img src="/images/home-one/main-img1.png" alt="Image" />
            </div>

            {/* Banner Shape Images */}
            <div className="banner-img">
              <img
                className="animate__animated animate__fadeInUp animate__fast"
                src="/images/home-one/shape1.png"
                alt="Image"
              />
              <img
                className="animate__animated animate__fadeInUp animate__fast"
                src="/images/home-one/shape2.png"
                alt="Image"
              />
              <img
                className="animate__animated animate__fadeInRight animate__fast"
                src="/images/home-one/shape3.png"
                alt="Image"
              />
              <img
                className="animate__animated animate__fadeInRight animate__fast"
                src="/images/home-one/shape4.png"
                alt="Image"
              />
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

      <div className="white-shape">
        <img src="/images/home-one/bottom-shape.png" alt="Image" />
      </div>
    </section>
  );
};

export default MainBanner;
