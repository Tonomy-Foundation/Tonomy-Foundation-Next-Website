import React, { useState } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";

export const BOOKING_LINK = "https://cal.com/shayan-salehis-btb8mk/30min";
const styles = {
  banner: {
    left: "100px",
    position: "relative",
    width: "400px",
    height: "400px",
    borderRadius: "100px",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.2)", // Adjust opacity here
    zIndex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
    opacity: "0.5",
    objectFit: "cover",
    zIndex: -10,
  },
  animatedImage: {
    zIndex: 0,
    width: "280px",
    top: "50px",
    opacity: "0",
  },
  smallAnimatedImage: {
    zIndex: 7,
    width: "24px",
    top: "181px",
    left: "190px",
    opacity: "0",
  },
};
const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="main-banner-area main-banner-area-three">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1>Eliminate breaches and compliance headaches</h1>
                <p>
                  Tonomy ID securely moves personal data and authentication to
                  the user's device and provides end-to-end digital signatures
                  and encryption, achieving better-than-banking security and
                  GDPR and CCPR compliance by default. Join the 0% breach club.
                </p>

                <div className="banner-btn">
                  <Link href={BOOKING_LINK}>
                    <a target="_blank" className="default-btn">
                      Free consultation session
                    </a>
                  </Link>

                  <Link
                    target="_blank"
                    href="https://www.canva.com/design/DAFnktNOWKU/Ps1zXw3XICaEMiB0R4Ghkg/view"
                  >
                    <a target="_blank" className="default-btn active">
                      Read the White Paper
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {/* Main Image */}
              <div className="banner-main-img banner-one-main-img">
                <img src="/images/home-three/main-img3.png" alt="Image" />
              </div>

              <div className="banner-img" style={styles.banner}>
                <div
                  className="background-overlay"
                  style={styles.overlay}
                ></div>
                <img
                  src="/images/img_6.jpg"
                  alt="Image"
                  style={styles.background}
                />
                <div>
                  <img
                    className="animate__animated animate__rotateIn animate__fast"
                    style={styles.animatedImage}
                    src="/images/img_5.png"
                    alt="Image"
                  />

                  <img
                    className="animate__animated animate__backInDown animate__delay-1s"
                    style={{
                      zIndex: 5,
                      width: "150px",
                      top: "130px",
                    }}
                    src="/images/img_0.png"
                    alt="Image"
                  />

                  <img
                    className="animate__animated animate__backInDown  animate__delay-2s"
                    style={{
                      zIndex: 5,
                      width: "120px",
                      top: "43px",
                      left: "138px",
                    }}
                    src="/images/img_3.png"
                    alt="Image"
                  />
                  <img
                    className="animate__animated animate__backInUp  animate__delay-3s"
                    style={{
                      zIndex: 7,
                      width: "24px",
                      top: "181px",
                      left: "190px",
                    }}
                    src="/images/id.svg"
                    alt="Image"
                  />

                  <img
                    className="animate__animated animate__backInUp  animate__delay-4s"
                    style={{
                      zIndex: 7,
                      width: "37px",
                      top: "175px",
                      left: "185px",
                      opacity: "0", // Set the opacity to 0 (fully transparent)
                    }}
                    src="/images/img_2.png"
                    alt="Image"
                  />

                  <img
                    className="animate__animated animate__backInUp  animate__delay-5s"
                    style={{
                      zIndex: 7,
                      width: "45px",
                      top: "175px",
                      left: "181px",
                      opacity: "0",
                    }}
                    src="/images/img_1.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="over-shape">
          <img src="/images/home-one/shape/animate1.png" alt="Image" />
          <img src="/images/home-one/shape/animate1.png" alt="Image" />
          <img src="/images/home-one/shape/animate2.png" alt="Image" />
          <img src="/images/home-one/shape/animate2.png" alt="Image" />
          <img src="/images/home-one/shape/animate3.png" alt="Image" />
        </div>

        <div className="white-shape">
          <img src="/images/home-three/bottom-shape.png" alt="Image" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
