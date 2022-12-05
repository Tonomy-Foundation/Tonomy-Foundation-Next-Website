import Link from 'next/link'

const Features = () => {
        return (
            <div className="features-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 p-0">
                            <div className="single-features">
                                <i className="flaticon-cloud-computing-1"></i>
                                <h3>Legality</h3>
                                <p>The Tonomy Foundation is trying to improve the bonds that we have with governments to make sure everything we do is legal and correct. since we can’t really help our partners if everything we are doing isn’t legal in any way.</p>

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
                                <h3>Transparency</h3>
                                <p>Transparency is really important for us,that is why we are striving for a transparent governance which has nothing to hide so they can't hold information from you and me.</p>
                                
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
                                <h3>Autonomous</h3>
                                <p>Allowing people to access their personal data autonomously, which makes sure that your data stays with you. Which also means that you are the master of your own data.</p>
                                
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