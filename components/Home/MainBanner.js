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
    borderRadius: "120px",
    overflow: "hidden",
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.1) 100%), url('/images/img_6.jpg')",
    backgroundSize: "cover",
    backgroundBlendMode: "hue",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
    opacity: 1,
    zIndex: -10,
  },
  brightImage: {
    zIndex: 0,
    width: "280px",
    top: "50px",
    opacity: "0",
  },
  lockBottomSide: {
    zIndex: 5,
    width: "150px",
    top: "130px",
  },
  lockUpperSide: {
    zIndex: 5,
    width: "120px",
    top: "43px",
    left: "138px",
  },
  smallAnimatedImage: {
    zIndex: 7,
    width: "37px",
    top: "175px",
    left: "185px",
    opacity: "0",
  },
  tonomyLogo: {
    zIndex: 7,
    width: "45px",
    top: "175px",
    left: "181px",
    opacity: "0",
  },
  idSvg: {
    zIndex: 7,
    width: "24px",
    top: "181px",
    left: "190px",
  },
};
const AnimatedHeroImage = () => {
  return (
    <div className="banner-img banner" style={styles.banner}>
      <div className="overlay" style={styles.overlay}></div>
      <div
        // src="/images/img_6.jpg"
        // alt="Image"
        className="background"
        style={styles.background}
      />
      <div>
        <img
          className="brightImage animate__animated animate__rotateIn animate__fast "
          style={styles.brightImage}
          src="/images/img_5.png"
          alt="Image"
        />

        <img
          className="lockBottomSide animate__animated animate__backInDown animate__delay-1s"
          style={styles.lockBottomSide}
          src="/images/img_0.png"
          alt="Image"
        />

        <img
          className="lockUpperSide animate__animated animate__backInDown  animate__delay-2s"
          style={styles.lockUpperSide}
          src="/images/img_3.png"
          alt="Image"
        />
        <img
          className="id_logo animate__animated animate__backInUp  animate__delay-3s"
          style={styles.idSvg}
          src="/images/id.svg"
          alt="Image"
        />

        <img
          className="animate__animated animate__backInUp  animate__delay-4s"
          style={styles.smallAnimatedImage}
          src="/images/img_2.png"
          alt="Image"
        />

        <img
          className="animate__animated animate__backInUp  animate__delay-5s"
          style={styles.tonomyLogo}
          src="/images/img_1.png"
          alt="Image"
        />
      </div>
    </div>
  );
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

              <AnimatedHeroImage />
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
