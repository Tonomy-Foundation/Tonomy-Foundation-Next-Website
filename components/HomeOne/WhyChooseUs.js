
const WhyChooseUs = () => {
    return (
        <section className="choose-ue-area pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="choose-title">
                            <h2>What are we making and how are we trying to achieve it?</h2>
                            <span>Currently we are working on our four core modules which are:</span>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="choose-content">
                            <ul>
                                <li>
                                    <span>
                                        01 <i className="flaticon-technical-support"></i>
                                    </span>
                                    <h3>Tonomy ID (Currently under development)</h3>
                                    <p>Tonomy ID is our self sovereign identity ( SSI ) wallet to access your ecosystem or data which you upload/edit yourself. you will have the power of what you will be able to share with others.</p>
                                </li>

                                <li className="ml">
                                    <span>
                                        02 <i className="flaticon-shield"></i>
                                    </span>
                                    <h3>Tonomy DAO ( Coming soon)</h3>
                                    <p>Tonomy DAO will be used to create and manage businesses and their employees who are working within their business and even the other members in your ecosystem.</p>
                                </li>

                                <li className="ml-25">
                                    <span>
                                        03 <i className="flaticon-support"></i>
                                    </span>
                                    <h3>Tonomy Gov (Partially built) </h3>
                                    <p>Tonomy Gov is all about the governance of your ecosystem. It will operate democratically which in our case would mean everyone has a voice and an opinion.</p>
                                </li>

                                <li className="ml">
                                    <span>
                                        04 <i className="flaticon-shield"></i>
                                    </span>
                                    <h3>Tonomy Token (Partially created)</h3>
                                    <p>Tonomy Token is creating and managing digital tokens and make payments  between entities.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="choose-img">
                            <img src="/images/choose-img.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;