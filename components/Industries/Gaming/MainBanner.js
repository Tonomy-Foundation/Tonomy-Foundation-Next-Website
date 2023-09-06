import React from 'react'
import Link from 'next/link'

const MainBanner = () => {
    return (
        <section className="main-banner-area main-banner-area-two">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-text">
                            <h1>Empower Gamers: True Gaming-Asset Ownership, Seamless Experience with Tonomy ID</h1>
                            <p>Tonomy ID empowers games to easily integrate digital assets, NFTs, tokens and collectables while enhancing the user experience and security of players.</p>

                            <div className="banner-btn">
                                <Link href="/">
                                    <a className="default-btn active">
                                        More About Tonomy ID
                                    </a>
                                </Link>

                                <Link href="/contact">
                                    <a className="default-btn">
                                        Contact Us
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        {/* Main Image */}
                        <div className="banner-main-img banner-one-main-img">
                            <img
                                src="/images/home-two/main-img2.png"
                                alt="Image"
                            />
                        </div>

                        {/* Banner Shape Images */}
                        <div className="banner-img">
                            <img
                                className="animate__animated animate__fadeInDown animate__faster"
                                src="/images/home-two/shape1.png"
                                alt="Image"
                            />

                            <div className="square-img">
                                <img
                                    className="animate__animated animate__fadeInDown animate__delay-0.1s"
                                    src="/images/home-two/shape2.png"
                                    alt="Image"
                                />
                            </div>

                            <img
                                className="animate__animated animate__fadeInDown animate__fast"
                                src="/images/home-two/shape3.png"
                                alt="Image"
                            />

                            <div className="circle-img">
                                <img
                                    className="animate__animated animate__zoomIn animate__delay-0.1s"
                                    src="/images/home-two/shape4.png"
                                    alt="Image"
                                />
                            </div>

                            <img
                                src="/images/home-two/shape5.png"
                                alt="Image"
                            />

                            <img
                                className="animate__animated animate__fadeInDown animate__delay-0.1s"
                                src="/images/home-two/shape6.png"
                                alt="Image"
                            />

                            <img
                                className="animate__animated animate__fadeInDown animate__delay-0.6s"
                                src="/images/home-two/shape7.png"
                                alt="Image"
                            />

                            <img
                                className="animate__animated animate__fadeInRight animate__delay-0.1s"
                                src="/images/home-two/shape8.png"
                                alt="Image"
                            />

                            <img
                                className="animate__animated animate__fadeInRight animate__delay-0.1s"
                                src="/images/home-two/shape9.png"
                                alt="Image"
                            />

                            <img
                                className="animate__animated animate__fadeInRight animate__delay-1s"
                                src="/images/home-two/shape10.png"
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
        </section>
    )
}

export default MainBanner