
const WhyChooseUs = () => {
    return (
        <section className="choose-ue-area pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="choose-title">
                            <h2>What are we working on?</h2>
                            <span>Currently we are working on:</span>
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
                                    <h3>Tonomy ID (Under development)</h3>
                                    <p>Tonomy ID is a self-sovereign identity ( SSI ) and blockchain wallet allowing your users to log in securely and privately to apps in your ecosystem.
                                        All personal information and authorizations are stored on the user's phone exclusively, automatically complying with GDPR. This will allow you to onboard and retain more users,
                                        reduce security and privacy breaches and regulatory compliance work and time, reduce duplication of data entry and connect systems together like never before.</p>
                                </li>

                                <li className="ml">
                                    <span>
                                        02 <i className="flaticon-shield"></i>
                                    </span>
                                    <h3>Tonomy DAO (Coming soon)</h3>
                                    <p>Tonomy DAO will be used to create and manage businesses and organizations,
                                        and their employees who are working within their business.
                                        This will allow members of your system to self-organize their projects and entities significantly faster and cheaper and help gain traction for your decisions within the organization and provide internal and external trust,
                                        as well as make processes more insightful.
                                    </p>
                                </li>

                                <li className="ml-25">
                                    <span>
                                        03 <i className="flaticon-support"></i>
                                    </span>
                                    <h3>Tonomy Gov (Partially built) </h3>
                                    <p>Tonomy Gov is all about enforcing the decisions within your ecosystem and organization.
                                        It allows you to make policies/rules together and see how decisions are made.
                                        It gives the flexibility of several governance models, both traditional democratic or share-based,
                                        and more modern liquid, open and agile governance models.
                                        This enables gives people in your organization and ecosystem more trust in the policies and rules,
                                        allowing greater decision-making power, and greater synergy between its members.
                                    </p>
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