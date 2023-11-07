import Link from 'next/link'

const Features = () => {
    return (
        <div className="features-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 p-0">
                        <div className="single-features">
                            <i className="flaticon-cloud-computing-1"></i>
                            <h3>NON-PROFIT</h3>
                            <p>Our project is inclusive, transparent, and community-driven, with the goal of
                                fostering open and collaborative efforts towards a more empowered and equitable society.</p>

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
                            <h3>OPEN SOURCE</h3>
                            <p>At Tonomy, we prioritize transparency and trust in our digital identity solutions.
                                We use open source (Apache 2.0) licenses and open knowledge to ensure that our
                                software can be examined and run by anyone.
                            </p><p>This helps to bring transparency and trust to our products.</p>

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
                            <p>We encourage you to take our tools and make it your own. This allows our partners and clients to flexibly use our
                                tools within their institutions, businesses, supply chains and governments.
                            </p>
                            <p>Contact us for support to make this as easy for you as possible.</p>

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