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
                        <h2>What Clients Say About Us</h2>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,do eiusmod tempor incididunt ut labore et dolore.</p>

                                <ul>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                    <li><i className="bx bxs-star"></i></li>
                                </ul>

                                <div className="client-img">
                                    <img src="/images/clients/client1.jpg" alt="Image" />
                                    <h3>Alen Meair</h3>
                                    <span>Developer</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
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
                                    <img src="/images/clients/client2.jpg" alt="Image" />
                                    <h3>Axon Detos</h3>
                                    <span>CEO</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
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
                        </SwiperSlide>

                        <SwiperSlide>
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
                                    <img src="/images/clients/client4.jpg" alt="Image" />
                                    <h3>Jon Smith</h3>
                                    <span>Developer</span>
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