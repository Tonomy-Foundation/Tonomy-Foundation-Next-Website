import Link from 'next/link';

const FeatureOthers = () => {
    return (
        <section className="about-area pb-100">
            <div className="container">
                <div className="row align-items-center">
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

                    <div className="col-lg-6">
                        <div className="about-content">
                            <span>Powerful Customizable Features</span>
                            <h2>Enhanced Identity Access Management</h2>
                            <p>Unleash the potential of Tonomy ID's customizable features to revolutionize identity management. Empower your organization with super-secure data sharing, KYC identity verification, end-to-end encrypted messaging, multi-party signatures, and sovereign recovery, all while minimizing data storage and processing needs.</p>
                            
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Enhanced Data Security
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Mainstream User Experience
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Customizable Plug-and-Play Architecture
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Non-Custodial Recovery Solution
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Streamlined KYC Identity Verification
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Efficient Identity Management
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Link href="https://www.canva.com/design/DAFnktNOWKU/Ps1zXw3XICaEMiB0R4Ghkg/view#17">
                                <a target="_blank" className="default-btn">
                                    Learn More
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureOthers