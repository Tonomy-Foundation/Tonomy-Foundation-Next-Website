import React from 'react'
import Link from 'next/link'

const MainBanner = () => {
    return (
        <section className="main-banner-area main-banner-area-two">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-text">
                            <h1>Empowering Antelope Ecosystems for Mainstream Adoption</h1>
                            <p>Tonomy ID is an Antelope and Self-sovereign Identity (SSI) wallet built for user control and mainstream-ready user experience. Tonomy ID is for Telos, EOS, WAX, UX Network and other Antelope chains.</p>

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
                        <div className="banner">
                            <img
                                src="/images/antelope-banner.png"
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