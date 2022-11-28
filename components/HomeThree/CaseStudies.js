import React, { Component } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

class CaseStudies extends Component {
    render() {
        return (
            <section className="case-area pb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Case</span>
                        <h2>Our Recent Case Studies</h2>
                    </div>

                    <Swiper
                        spaceBetween={25}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 6000,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="case-top-wrap"
                    >
                        <SwiperSlide>
                            <div className="case-wrap">
                                <div className="single-case">
                                    <img src="/images/cases/case1.png" alt="Image" className="w-100" />

                                    <Link href="/case-studies-details">
                                        <a className="link-icon">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <h3>
                                    <Link href="/case-studies-details">
                                        <a>
                                            Cognitive Architectures
                                        </a>
                                    </Link>
                                </h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="case-wrap">
                                <div className="single-case">
                                    <img src="/images/cases/case2.png" alt="Image" className="w-100" />

                                    <Link href="/case-studies-details">
                                        <a className="link-icon">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <h3>
                                    <Link href="/case-studies-details">
                                        <a>
                                            Image Detection
                                        </a>
                                    </Link>
                                </h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="case-wrap">
                                <div className="single-case">
                                    <img src="/images/cases/case3.png" alt="Image" className="w-100" />

                                    <Link href="/case-studies-details">
                                        <a className="link-icon">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <h3>
                                    <Link href="/case-studies-details">
                                        <a>
                                            Software Liabries
                                        </a>
                                    </Link>
                                </h3>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="case-wrap">
                                <div className="single-case">
                                    <img src="/images/cases/case4.png" alt="Image" className="w-100" />

                                    <Link href="/case-studies-details">
                                        <a className="link-icon">
                                            <i className="bx bx-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <h3>
                                    <Link href="/case-studies-details">
                                        <a>
                                            Architectures Liabries
                                        </a>
                                    </Link>
                                </h3>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        );
    }
}

export default CaseStudies;