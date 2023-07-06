import React, { Component } from "react";
import Link from "next/link";

let iconBackground = { backgroundColor: "#29C7E2" };

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="footer-top-area pt-20 pb-20">
          <div className="container align-self-center">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-6">
                <div className="single-widget">
                  <a href="/" className="footerlogo">
                    <img
                      src="/images/logo.webp"
                      width="80"
                      height="80"
                      alt="Tonomy Logo"
                      className="rounded mx-auto d-block"
                    />
                  </a>

                  <div className="flex-container text-center">
                    <span className="text-white ">Contact us for a free consultation meeting</span>
                    <br />  <br /> 
                    <a className="default-btn btn-two" href="https://cal.com/shayan-salehis-btb8mk/30min" target="_blank">
                      Free Consultation Meeting
                    </a>
                  </div>
                  <br />
                  <div className="flex-container FooterLogoDiv">
                    <ul className="social-icons d-flex flex-wrap justify-content-center">
                      <li className="item mx-2 mb-3 text-center">
                        <a
                          href="https://twitter.com/TonomyF"
                          target="_blank"
                        >
                          <i className="icon bx bxl-twitter bx-md text-center"></i>{" "}
                        </a>
                      </li>
                      <li className="item mx-2 mb-3">
                        <a
                          href="https://discord.gg/95J74ZbAgw"
                          target="_blank"
                        >
                          <i className="icon bx bxl-discord bx-md"></i>
                        </a>
                      </li>
                      <li className="item mx-2 mb-3">
                        <a
                          href="https://www.linkedin.com/company/tonomy-foundation/"
                          target="_blank"
                        >
                          <i className="icon bx bxl-linkedin bx-md"></i>
                        </a>
                      </li>
                      <li className="item mx-2 mb-3">
                        <a
                          href="https://www.linkedin.com/company/tonomy-foundation/jobs/"
                          target="_blank"
                        >
                          <i className="icon bx bxs-briefcase bx-md"></i>
                        </a>
                      </li>
                      <li className="item mx-2 mb-3">
                        <a
                          href="https://github.com/Tonomy-Foundation"
                          target="_blank"
                        >
                          <i className="icon bx bxl-github bx-md"></i>
                        </a>
                      </li>
                      <li className="item mx-2 mb-3">
                        <a
                          href="https://www.instagram.com/tonomyfoundation/"
                          target="_blank"
                        >
                          <i className="icon bx bxl-instagram bx-md"></i>
                        </a>
                      </li>
                      <li className="item mx-2 mb-3">
                        <a
                          href="https://www.youtube.com/@tonomyfoundation"
                          target="_blank"
                        >
                          <i className="icon bx bxl-youtube bx-md"></i>
                        </a>
                      </li>
                      <li className="item mx-2 mb-3">
                        <a
                          href="https://www.facebook.com/profile.php?id=100088511093616"
                          target="_blank"
                        >
                          <i className="icon bx bxl-facebook bx-md"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Services</h3>
                                    <ul>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Big Data
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    UI/UX Design
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Desktop Application
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Mobile Application
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Product Engineering
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Machine Learning
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

              {/* <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Important Links</h3>

                                    <ul>
                                        <li>
                                            <Link href="/about-1">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    About Us
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Services
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Pricing
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Team
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Support
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/testimonials">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Testimonials
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

              {/* <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Information</h3> */}

              {/* <ul className="information">
                                        <li className="address">
                                            <i className="flaticon-call"></i>
                                            <span>Phone</span>
                                            +882-569-756
                                        </li>

                                        <li className="address">
                                            <i className="flaticon-envelope"></i>
                                            <span>Email</span>
                                            hello@jumpx.com
                                        </li>

                                        <li className="address">
                                            <i className="flaticon-maps-and-flags"></i>
                                            <span>Address</span>
                                            123, Western Road, Melbourne Australia
                                        </li>
                                    </ul> */}
              {/* </div>
                            </div> */}
            </div>
          </div>

          <div className="footer-shape">
            <img src="/images/shape/footer-shape-one.png" alt="Image" />
            <img src="/images/shape/footer-shape-two.png" alt="Image" />
          </div>
        </footer>

        {/* Footer Bottom Area   */}
        <footer className="footer-bottom-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="copy-right">
                  <p>
                    Copyright &copy; {currentYear} Tonomy Foundation. All Rights
                    Reserved
                  </p>
                </div>
              </div>

              {/* <div className="col-lg-5">
                                <div className="privacy">
                                    <ul>
                                        <li>
                                            <Link href="/terms-conditions">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

              {/* <div className="col-lg-3">
                                <div className="designed">
                                    <p>
                                        Designed By <i className='bx bx-heart'></i> <a href="https://envytheme.com/" target="_blank">EnvyTheme</a>
                                    </p>
                                </div>
                            </div> */}
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
