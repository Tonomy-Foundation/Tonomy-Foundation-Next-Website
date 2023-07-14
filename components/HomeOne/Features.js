import Link from 'next/link'

const Features = () => {
    return (
        <div className="features-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 p-0">
                        <div className="single-features">
                            <i className="flaticon-cloud-computing-1"></i>
                            <h3>ELIMINATE DATA BREACHES</h3>
                            <p>Eliminate data breaches and safeguard your organization's sensitive information with our cutting-edge solution.</p>

                            {/*<Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>*/}
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 p-0">
                        <div className="single-features">
                            <i className="flaticon-engineer"></i>
                            <h3>FRAUD PROOF DATA</h3>
                            <p>Guarantee the integrity of your data with our fraud-proof technology, preventing unauthorized access and manipulation.</p>

                            {/*<Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>*/}
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                        <div className="single-features">
                            <i className="flaticon-success"></i>
                            <h3>WHITE LABEL </h3>
                            <p>Customize and brand our solution as your own with our white label option, providing a seamless and cohesive user experience.</p>

                            {/*<Link href="/service-details">
                                    <a className="read-more-icon">
                                        <span className="flaticon-right-arrow"></span>
                                    </a>
                                </Link>*/}
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                        <div className="single-features">
                            <i className="flaticon-success"></i>
                            <h3>REGULATORY COMPLIANCE</h3>
                            <p>Ensure compliance with GDPR regulations effortlessly, reducing data compliance work and mitigating risks.</p>

                            {/*<Link href="/service-details">
<a className="read-more-icon">
<span className="flaticon-right-arrow"></span>
</a>
</Link>*/}
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                        <div className="single-features">
                            <i className="flaticon-success"></i>
                            <h3>EU RECOGNIZED SIGNATURES</h3>
                            <p>Benefit from legally recognized and secure eiDAS signatures, offering the highest standards of authentication and verification.</p>

                            {/*<Link href="/service-details">
<a className="read-more-icon">
<span className="flaticon-right-arrow"></span>
</a>
</Link>*/}
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0 p-0">
                        <div className="single-features">
                            <i className="flaticon-success"></i>
                            <h3>OPEN SOURCE</h3>
                            <p>Collaborate and contribute with confidence using Tonomy ID's open-source solution.</p>

                            {/*<Link href="/service-details">
<a className="read-more-icon">
<span className="flaticon-right-arrow"></span>
</a>
</Link>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;