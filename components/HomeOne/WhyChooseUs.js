const WhyChooseUs = () => {
  return (
    <section className="choose-ue-area pb-100">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="choose-title">
              <h2>What are we working on?</h2>
              {/* <span>Currently we are working on:</span> */}
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
                  <p>
                    Tonomy ID is a self-sovereign identity ( SSI ) and a
                    blockchain wallet allowing your users to log in to apps in
                    your ecosystem in a secure and private manner. All personal
                    information and passwords are stored on the user's phone
                    exclusively automatically complying with GDPR. This will
                    allow you to onboard and retain more users, reduce security
                    and privacy breaches and regulatory compliance work and
                    time. This will also reduce data entry duplication and bring
                    systems together like never before.
                  </p>
                </li>

                <li className="ml">
                  <span>
                    02 <i className="flaticon-shield"></i>
                  </span>
                  <h3>Tonomy DAO (Coming soon)</h3>
                  <p>
                    Tonomy DAO will be used to create and manage businesses and
                    organizations, and their employees.It will allow the members
                    of your system to self-organize their projects and entities
                    significantly faster and cheaper and help gain traction for
                    your decisions within the organization. It will also provide
                    internal and external trust, as well as make processes more
                    insightful.
                  </p>
                </li>

                <li className="ml-25">
                  <span>
                    03 <i className="flaticon-support"></i>
                  </span>
                  <h3>Tonomy Gov (Partially built) </h3>

                  <p>
                    Tonomy Gov is all about enforcing decisions within your
                    ecosystem or organization. It allows you to make
                    policies/rules and see how the decisions are made. It gives
                    the flexibility of several governance models, both
                    traditional democratic or share-based, as well as more
                    modern liquid, open and adjustable governance models. This
                    provides the members of your organization or ecosystem with
                    more trust in the policies and rules allowing greater
                    decision-making power, and greater synergy between its
                    members.
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
  );
};

export default WhyChooseUs;
