import Link from 'next/link'

const Services = () => {
    
    return (
        <section className="offer-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span></span>
                    <h2>Why tonomy?</h2>
                    <p>Why does it matter what we are doing? Why should people care about what is going on here? 
                        Well see, here at the Tonomy Foundation we strive for a society where transparency and 
                        democracy are the top priorities.We want everyone to have a voice, a vote and we want that 
                        there is no crucial information held back by anyone.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i className="flaticon-chip"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>Our technology</a>
                                </Link>
                            </h3>
                            <p>We prioritize user trust and happiness & minimize privacy and security breaches.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i className="flaticon-vr"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>The infrastructure</a>
                                </Link>
                            </h3>
                            <p>The participation of users in decisions together, feeling of community - automated budget management</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i className="flaticon-blockchain"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>Our blockchain</a>
                                </Link>
                            </h3>
                            <p>We have an easy to use blockchain so it's accessable for everyone, with user retention!</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i className="flaticon-target"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>Security</a>
                                </Link>
                            </h3>
                            <p>Automated data privacy and security compliance - fewer passwords so it's easier for your users.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i className="flaticon-choice"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>Data access</a>
                                </Link>
                            </h3>
                            <p>Sovereign architecture - privacy, security, cybersecurity and autonomous access to your data</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-offer">
                            <i className="flaticon-deep-learning"></i>
                            <h3>
                                <Link href="/service-details">
                                    <a>Legality</a>
                                </Link>
                            </h3>
                            <p>We lower legal frictions and automate instant document verification to lower administrational needs</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="offer-shape">
                <img src="/images/shape/services-shape/1.png" alt="Image" />
                <img src="/images/shape/services-shape/2.png" alt="Image" />
                <img src="/images/shape/services-shape/3.png" alt="Image" />
                <img src="/images/shape/services-shape/4.png" alt="Image" />
                <img src="/images/shape/services-shape/5.png" alt="Image" />
                <img src="/images/shape/services-shape/6.png" alt="Image" />
            </div>
        </section>
    )
}

export default Services;