import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

class ComplianceSlider extends Component {
    render() {
        return (
            <div className="brand-area-two ptb-100">
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
                        <SwiperSlide>
                            <img src="/images/compliance/gdpr.png" alt="GDPR General Data Protection Regulation" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/compliance/eidas.png" alt="eiDAS digital signatures" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/compliance/ccpa.png" alt="CCPA California Consumer Privacy Act" />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src="/images/compliance/ccra.png" alt="CPRA California Privacy Rights and Enforcement Act" />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        );
    }
}

export default ComplianceSlider;