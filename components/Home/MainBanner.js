import React, { useState } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";
import Lottie from "lottie-react";
import animatedData from "./main-banner-animation.json";

export const BOOKING_LINK = "https://cal.com/shayan-salehis-btb8mk/30min";

const styles = {
  bannerLarge: {
    left: "10%",
    position: "relative",
    width: "350px",
    height: "350px",
    borderRadius: "100px",
    overflow: "hidden",
  },
  bannerSmall: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "250px",
    height: "250px",
    borderRadius: "100px",
    overflow: "hidden",
    margin: "auto", // Center the entire div horizontally
  },
};

const AnimatedHeroImage = () => {
  return <Lottie animationData={animatedData} loop={true} />;
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
              <div className="banner-main-img banner-one-main-img ">
                <div style={styles.bannerSmall}>
                  <AnimatedHeroImage />
                </div>
              </div>
              <div className="banner-img banner" style={styles.bannerLarge}>
                <AnimatedHeroImage />
              </div>
            </div>
          </div>
        </div>

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
