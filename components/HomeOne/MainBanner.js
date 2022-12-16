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
              Welcome to the world of digital government, where blockchain technology and open source development are transforming the way we manage and protect personal information. As a nonprofit organization dedicated to advancing these cutting-edge technologies, we are proud to introduce our website and the innovative products we are developing to help create a more secure and efficient digital society. From digital identity solutions to blockchain-based systems for managing public records, we are working to build a better future for all.
                <br></br>
                <br></br> Join us on our journey to a more connected, transparent, and secure world.
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
