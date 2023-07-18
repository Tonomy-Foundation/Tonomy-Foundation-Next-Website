import Link from 'next/link';

const FeatureSSO = () => {
    return (
        <section className="about-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                    
                    <div className="col-lg-6">
                        <div className="about-content">
                            <span>Features</span>
                            <h2>Digital Signatures and Authentication</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.</p>
                            
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Advanced caching
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Unlimited  applications
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            PHP 7 ready transfer
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            PHP ready serves
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            24/7 Free extra support
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Optimized stack
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* <Link href="/about-1">
                                <a className="default-btn">
                                    Learn More
                                </a>
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="about-img">
                            <img src="/images/screenshots/pin.png" alt="Image" width="250" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="about-img">
                            <img src="/images/screenshots/pin.png" alt="Image" width="250" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeatureSSO