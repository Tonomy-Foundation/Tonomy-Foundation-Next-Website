import React from "react";
import Link from "next/link";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { gtag_report_conversion_read_developer_docs } from "../../utils/googleTags";

const Demo = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/i1Qcyctng7I"]}
      />

      <section className="main-banner-area main-banner-area-one">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1>Experience the Power of Tonomy ID</h1>
                <p>
                  See firsthand how our cutting-edge digital identity wallet
                  simplifies user authentication and data management. Discover
                  the seamless integration process and get a glimpse into the
                  future of secure digital identities. Don't wait, explore now!
                </p>

                <div className="banner-btn">
                  <Link href="/experience-tonomy-id">
                    <a className="default-btn">Try Tonomy ID</a>
                  </Link>

                  <div
                    onClick={() => setToggler(!toggler)}
                    className="default-btn active popup-youtube"
                  >
                    <i className="bx bx-play"></i>Watch the demo
                  </div>
                </div>

                <p style={{ marginTop: "40px" }}>
                  Try integrating with the demo platform and see how easy it is.
                  Integration takes 10-30 minutes.
                </p>

                <div className="banner-btn">
                  <a className="default-btn active" onClick={gtag_report_conversion_read_developer_docs}>
                    Read the Docs
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {/* Main Image */}
              <div className="banner-main-img banner-one-main-img">
                <img src="/images/home-one/shape0.png" alt="Image" />
              </div>

              {/* Banner Shape Images */}
              <div className="banner-img">
                <img
                  className="animate__animated animate__fadeInUp animate__fast"
                  src="/images/home-one/shape0.png"
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
    </>
  );
};

export default Demo;
