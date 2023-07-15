import React, { useState } from 'react';
import Link from 'next/link';
import FsLightbox from 'fslightbox-react';

export const BOOKING_LINK = "https://cal.com/shayan-salehis-btb8mk/30min";

const MainBanner = () => {
    // if toggler is updated when lightbox is closed it will open it
    // if toggler is updated when lightbox is opened it will close it
    const [toggler, setToggler] = useState(false);
    return (
        <>
            <FsLightbox
                toggler={toggler}
                sources={[
                    'https://www.youtube.com/embed/bk7McNUjWgw',
                ]}
            />

            <div className="main-banner-area main-banner-area-three">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-text">
                                <h1>Eliminate breaches and compliance headaches</h1>
                                <p>Tonomy ID securely moves personal data and authentication to their device and provides end-to-end digital signatures and encryption, achieving better-than-banking security and GDPR and CCPR compliance by default. Join the 0% breach club.</p>

                                <div className="banner-btn">
                                    <Link href={BOOKING_LINK}>
                                        <a target="_blank" className="default-btn">
                                            Free consultation session
                                        </a>
                                    </Link>

                                    <Link target="_blank" href="https://www.canva.com/design/DAFnktNOWKU/Ps1zXw3XICaEMiB0R4Ghkg/view">
                                        <a target="_blank" className="default-btn white">
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

                            {/* Banner Shape Images */}
                            <div className="banner-img">
                                <img
                                    className="animate__animated animate__fadeInDown animate__fast"
                                    src="/images/home-three/shape1.png"
                                    alt="Image"
                                />
                                <img
                                    className="animate__animated animate__fadeInDown animate__fast"
                                    src="/images/home-three/shape2.png"
                                    alt="Image"
                                />
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
}

export default MainBanner;