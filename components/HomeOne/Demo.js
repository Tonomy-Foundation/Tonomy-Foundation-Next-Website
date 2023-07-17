import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

const Demo = () => {
    const [toggler, setToggler] = useState(false);

    return (
        <>
            <FsLightbox
                toggler={toggler}
                sources={[
                    'https://www.youtube.com/embed/i1Qcyctng7I',
                ]}
            />

            <section className="main-banner-area main-banner-area-one">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="banner-text">
                                <h1>Experience the Power of Tonomy ID</h1>
                                <p>See firsthand how our cutting-edge digital identity wallet simplifies user authentication and data management. Discover the seamless integration process and get a glimpse into the future of secure digital identities. Don't wait, explore now!</p>

                                <div className="banner-btn">
                                    <Link href="/about-1">
                                        <a className="default-btn">
                                            Try Tonomy ID
                                        </a>
                                    </Link>

                                    <div
                                        onClick={() => setToggler(!toggler)}
                                        className="default-btn active popup-youtube"
                                    >
                                        <i className="bx bx-play"></i>Watch the demo
                                    </div>
                                    <Link href="https://docs.tonomy.foundation">
                                        <a target="_blank" className="default-btn">
                                            Integrate with the demo platform in under 30 minutes
                                        </a>
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
        </>

    )
}

export default Demo;