import Link from 'next/link';

const FeatureSSO = () => {
    return (
        <section className="about-area pb-100" id="feature-sso" style={{ paddingTop: "60px" }}>
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <div className="about-content">
                            <span>Seamless, Sovereign, Secure</span>
                            <h2>Sovereign Single Sign-On</h2>
                            <p>Experience the ease of sovereign single sign-on with Tonomy ID. Say goodbye to multiple logins and cumbersome authentication processes as our app provides a seamless and secure way to access your platforms with just one click.
                            </p>

                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Simplified Authentication
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Password-less Convenience
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Cross-Platform Compatibility
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Enhanced Security
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            No personal information stored
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Privacy Controls
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Link href="https://www.canva.com/design/DAFnktNOWKU/Ps1zXw3XICaEMiB0R4Ghkg/view#18">
                                <a target="_blank" className="default-btn">
                                    Learn More
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="about-img">
                            <img src="/images/screenshots/user-home.png" alt="Image" width="250" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="about-img">
                            <img src="/images/screenshots/login.png" alt="Image" width="250" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeatureSSO