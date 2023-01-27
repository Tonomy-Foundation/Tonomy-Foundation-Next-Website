import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <section className="main-banner-area main-banner-area-one">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 pl-10">
            <div className="banner-text">
              <h1>The Tonomy Foundation</h1>
              <p>
              We at the Tonomy Foundation. We are a Dutch non-profit foundation,we are dedicated to developing open source solutions for digital identity using self-sovereign identity (SSI) technology.
              Our goal is to make it easier for government agencies and commercial companies to securely and efficiently manage digital interactions and transactions.
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
              <img src="/images/home-one/mainbanner.svg" alt="Image" />
            </div>

            {/* Banner Shape Images */}
            <div className="banner-img">
              {/* <img
                className="animate__animated animate__fadeInUp animate__fast"
                src="/images/home-one/shape1.png"
                alt="Image"
              /> */}
              <img
                className="animate__animated animate__fadeInUp animate__fast"
                src="/images/home-one/mainbanner.svg"
                alt="Image"
              />
              {/* <img
                className="animate__animated animate__fadeInRight animate__fast"
                src="/images/home-one/shape3.png"
                alt="Image"
              /> */}
              {/* <img
                className="animate__animated animate__fadeInRight animate__fast"
                src="/images/home-one/shape4.png"
                alt="Image"
              /> */}
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,256L48,261.3C96,267,192,277,288,288C384,299,480,309,576,304C672,299,768,277,864,266.7C960,256,1056,256,1152,245.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>      </div>
    </section>
  );
};

export default MainBanner;
