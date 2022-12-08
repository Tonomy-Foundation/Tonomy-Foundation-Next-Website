import Link from 'next/link'

const Features = () => {
        return (
            <div className="features-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 p-0">
                            <div className="single-features">
                                <i className="flaticon-cloud-computing-1"></i>
                                <h3>NON PROFIT</h3>
                                <p>We are a Dutch non-profit foundation. This is to ensure we remain financially neutral while building software systems to empower people, industries, communities and governments.  We are an inclusive, transparent and open community-driven projec.</p>

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
                                <p>Systems like these need to be neutral and transparent. We use open source and open knowledge to ensure our software is hardened by community knowledge, and that anyone can see what software and algorithms are run to bring trust back to identity. Run it yourself, see the flows and then decide.</p>
                                
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
                                <p>We encourage you to take this tool and make it your own. To use it, as if it belonged to you alone. This allows our partners and clients to flexibly use our tools within their institutions, businesses, supply chains and governments.</p>
                                
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