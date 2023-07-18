import Link from 'next/link';

const FeatureSigner = () => {
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
                            <span>Future-Proof Your Authentication</span>
                            <h2>Digital Signature Provider</h2>
                            <p>Elevate your organization's security and streamline authentication processes with Tonomy ID's Digital Signature Provider. Transform users' mobile phones into powerful authenticators, enabling fraud-proof data, legally enforceable signatures, and instant verification.
                            </p>
                            
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Data Integrity and Fraud Prevention
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Multi-Factor Authentication
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Legal and Regulatory Compliance
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Instant Verification Capability
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            User-Origin Authentication
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Seamless Signing Flows
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Link href="https://www.canva.com/design/DAFnktNOWKU/Ps1zXw3XICaEMiB0R4Ghkg/view#23">
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

export default FeatureSigner