import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <>
                <footer className="footer-top-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <a href="/" className="logo">
                                        <img src="/images/logo.png" width="80" height="80" alt="Image" />
                                    </a>

                                    <p>To contact us click below or if you are one of these on the right and are interested in working with us click there, our team works mostly via Discord hope to see u there.</p>

                                    <ul className="social-icon">
                                        <li>
                                        <a href="https://twitter.com/TonomyF" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://discord.gg/95J74ZbAgw" target="_blank">
                                                <i className="bx bxl-discord"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/tonomy-foundation/" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/tonomy-foundation/jobs/" target="_blank">
                                                <i className="bx bxs-briefcase"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                             <div className="col-lg-3 col-md-6">
                                <div className="single-widget">
                                    <h3>Contact Us</h3>
                                    <ul>
                                        <li>
                                            <Link href="https://discord.gg/95J74ZbAgw">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Developers
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://discord.gg/95J74ZbAgw">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Contributors
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://discord.gg/95J74ZbAgw">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Investors
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://discord.gg/95J74ZbAgw">
                                                <a>
                                                    <i className="right-icon bx bx-chevrons-right"></i>
                                                    Partners
                                                </a>
                                            </Link>
                                        </li>
                                        {/* <li>
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
                                        </li> */}
                                    </ul>
                                </div>
                            </div> 

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
                                    <p>Copyright &copy; {currentYear} TonomyFoundation. All Rights Reserved</p>
                                </div>
                            </div>

                            <div className="col-lg-5">
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
                            </div>

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