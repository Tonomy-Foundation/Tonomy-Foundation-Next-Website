import React, { useState } from 'react';
import Link from 'next/link';
import FsLightbox from 'fslightbox-react';

const MainBanner = () => {
    // if toggler is updated when lightbox is closed it will open it
    // if toggler is updated when lightbox is opened it will close it
    const [toggler, setToggler] = useState(false);
    return (
		<>
            <FsLightbox
                toggler={ toggler }
                sources={ [
                    'https://www.youtube.com/embed/bk7McNUjWgw',
                ] }
            />

            <div className="main-banner-area main-banner-area-three">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-text">
                                <h1>Secure IT Solutions For A More Secure Environment</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida risus commodo</p>	
                                
                                <div className="banner-btn">
                                    <Link href="/about-1">
                                        <a className="default-btn">
                                            Learn More
                                        </a>
                                    </Link>

                                    <div
                                        onClick={ () => setToggler(!toggler) }
                                        className="default-btn active popup-youtube"
                                    > 
                                        <i className="bx bx-play"></i> How it work?
                                    </div>
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