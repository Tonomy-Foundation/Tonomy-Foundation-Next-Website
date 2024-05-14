import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

class Testimonials extends Component {
    render() {
        return (
            <section className="client-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Testimonials</span>
                        <h2>What People Say About Us</h2>
                    </div>

                    <Swiper
                        spaceBetween={25}
                        navigation={true}
                        autoplay={{
                            delay: 6500,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Navigation, Autoplay]}
                        className="testimonials-slide"
                    >
                        <SwiperSlide>
                            <div className="single-client">
                                <i className="quotes flaticon-left-quotes-sign"></i>
                                <p>Security at the expense of usability, comes at the expense of security.</p>
                                <p>(Founding principal of Proton Mail)</p>

                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>

                                <div className="client-img">
                                    <img src="/images/testimonials/avi-douglen.jpg" alt="Image" />
                                    <h3>Avi Douglen</h3>
                                    <span>Director at OWASP Foundation </span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-client">
                                <i className="quotes flaticon-left-quotes-sign"></i>
                                <p>Tonomy ID elegantly solves the dilemma between decentralisation and smooth onboarding for new users and unlocks the new primitives of web3 identity standards for the general public with a strong emphasis on privacy and self sovereignty.</p>

                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>

                                <div className="client-img">
                                    <img src="/images/testimonials/sofiane-delloue.jpg" alt="Image" />
                                    <h3>Sofiane Delloue</h3>
                                    <span>Architect at New Foundation</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* <SwiperSlide>
                            <div className="single-client">
                                <i className="quotes flaticon-left-quotes-sign"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>

                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>

                                <div className="client-img">
                                    <img src="/images/clients/client3.jpg" alt="Image" />
                                    <h3>John Dona</h3>
                                    <span>Designer</span>
                                </div>
                            </div>
                        </SwiperSlide> */}

                        <SwiperSlide>
                            <div className="single-client">
                                <i className="quotes flaticon-left-quotes-sign"></i>
                                <p>Having seen the Tonomy ID solution, I was instantly aware of how elegant and simple the solution is for users of <a href="https://openkeywords.com" target="_blank">openkeywords.com</a>. It enables frictionless user log-in and app flows without being concerned with managing account security.</p>

                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>

                                <div className="client-img">
                                    <img height="70" src="/images/testimonials/roger-davies.jpg" alt="Image" />
                                    <h3>Roger Davies</h3>
                                    <span>Founder <a href="https://openkeywords.com" target="_blank">openkeywords.com</a></span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </section>
        );
    }
}

export default Testimonials;