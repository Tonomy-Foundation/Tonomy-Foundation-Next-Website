import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
 
class PartnerSliderTwo extends Component {
    render() {
        return (
            <div className="brand-area ptb-100">
                <div className="container">

                    <Swiper 
                        spaceBetween={25}
                        navigation={true} 
                        autoplay={{
                            delay: 6500,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            576: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            992: {
                                slidesPerView: 5,
                            },
                        }}
                        modules={[Navigation, Autoplay]} 
                        className="brand-slide text-center"
                    >
                        <SwiperSlide >
                            <a href="#" target="_blank">
                                <img src="/images/brands/brand1.png" alt="Image" />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="#" target="_blank">
                                <img src="/images/brands/brand2.png" alt="Image" />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="#" target="_blank">
                                <img src="/images/brands/brand3.png" alt="Image" />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="#" target="_blank">
                                <img src="/images/brands/brand4.png" alt="Image" />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="#" target="_blank">
                                <img src="/images/brands/brand5.png" alt="Image" />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="#" target="_blank">
                                <img src="/images/brands/brand6.png" alt="Image" />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="#" target="_blank">
                                <img src="/images/brands/brand7.png" alt="Image" />
                            </a>
                        </SwiperSlide>

                        <SwiperSlide>
                            <a href="#" target="_blank">
                                <img src="/images/brands/brand8.png" alt="Image" />
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        );
    }
}

export default PartnerSliderTwo;