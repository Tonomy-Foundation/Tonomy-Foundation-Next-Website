import React, { Component } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

class MainBanner extends Component {
    render() {
        return (
            <section className="slider-area">
                <Swiper 
                    navigation={true} 
                    autoplay={{
                        delay: 6000,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Navigation, Autoplay]} 
                    className="hero-swiper"
                >
                    <SwiperSlide>
                        <div 
                            className="jumpx-slider-item" 
                            style={{ backgroundImage: `url(/images/home-five/slider1.jpg)` }}
                        >
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="jumpx-slider-text overflow-hidden one">
                                            <span>IT & AI Services</span>
                                            <h1>Secure IT Solutions For A More Secure Environment</h1>
                                            <p>If we drive down the cost of transportation in space, we can do great things.</p>
                                            
                                            <div className="slider-btn">
                                                <Link href="/services">
                                                    <a className="default-btn active">
                                                        Our Services
                                                    </a>
                                                </Link>

                                                <Link href="/contact">
                                                    <a className="default-btn white">
                                                        Contact Us
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div 
                            className="jumpx-slider-item" 
                            style={{ backgroundImage: `url(/images/home-five/slider2.jpg)` }}
                        >
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="jumpx-slider-text overflow-hidden two">
                                            <span>IT & AI Services</span>
                                            <h1>Specialized Artificial Intelligence Startup</h1>
                                            <p>If we drive down the cost of transportation in space, we can do great things.</p>

                                            <div className="slider-btn">
                                                <Link href="/services">
                                                    <a className="default-btn active">
                                                        Our Services
                                                    </a>
                                                </Link>

                                                <Link href="/contact">
                                                    <a className="default-btn white">
                                                        Contact Us
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div 
                            className="jumpx-slider-item" 
                            style={{ backgroundImage: `url(/images/home-five/slider3.jpg)` }}
                        >
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="jumpx-slider-text overflow-hidden three">
                                            <span>IT & AI Services</span>
                                            <h1>World’s Leading Machine Learning Company</h1>
                                            <p>If we drive down the cost of transportation in space, we can do great things.</p>

                                            <div className="slider-btn">
                                                <Link href="/services">
                                                    <a className="default-btn active">
                                                        Our Services
                                                    </a>
                                                </Link>

                                                <Link href="/contact">
                                                    <a className="default-btn white">
                                                        Contact Us
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        );
    }
}

export default MainBanner;