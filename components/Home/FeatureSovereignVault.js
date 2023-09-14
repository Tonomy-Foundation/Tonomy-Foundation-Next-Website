import Link from 'next/link';

const FeatureSovereignVault = () => {
    return (
        <section className="about-area pb-100" id="features-vault">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <div className="about-content">
                            <span>Transform Data Management</span>
                            <h2>Sovereign Data Vault</h2>
                            <p>Unleash the power of secure and sovereign data storage with Tonomy ID's Sovereign Data Vault. Revolutionize your data management approach, reduce form-filling, enhance data security, achieve GDPR compliance, and embrace the benefits of decentralised storage
                            </p>

                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Eliminate Database Dependencies
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Secure Data Storage
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Streamlined Onboarding and Form-Filling
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <ul>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Resilience Against Server Breaches
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Simplified GDPR compliant
                                        </li>
                                        <li>
                                            <i className="flaticon-checked"></i>
                                            Enhanced Data Privacy and Control
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Link href="https://www.canva.com/design/DAFnktNOWKU/Ps1zXw3XICaEMiB0R4Ghkg/view#41">
                                <a target="_blank" className="default-btn">
                                    Learn More
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="/images/screenshots/share-data.png" alt="Image" width="250" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeatureSovereignVault