import Link from "next/link";
// What's a tough tea to swallow? Reali-tea!
const Services = () => {
  return (
    <section className="offer-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span></span>
          <h2>Why Tonomy?</h2>
          <p>
          It is important for society to be transparent and democratic in order to promote fairness, accountability, and trust. The Tonomy Foundation's mission to build open source technology that supports these values can potentially have a positive impact on society by making it easier for people to access and use information, participate in decision-making processes, and hold those in positions of power accountable for their actions.
          </p>
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
              <p>
              Based on self-sovereign identity (SSI) 
              and is designed to facilitate secure and efficient digital identification for government agencies and commercial companies.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-offer">
              <i className="flaticon-vr"></i>
              <h3>
                <Link href="/service-details">
                  <a>GDPR compliance</a>
                </Link>
              </h3>
              <p>
              GDPR compliance refers to protect the personal data of individuals 
              and give them control over how their information is collected, used, and shared.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-offer">
              <i className="flaticon-blockchain"></i>
              <h3>
                <Link href="/service-details">
                  <a>Open governance</a>
                </Link>
              </h3>
              <p>
              Open governance refers to the principles and practices of 
              transparency, accountability, and participation in the decision-making processes of an organization.
              </p>
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
              <p>
              We take great care to ensure that all of our products and solutions are designed to protect sensitive information and prevent unauthorized access.
              </p>
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
              <p>
              Our organization aims to provide secure and efficient access to data through 
              the use of open source solutions for digital ID and self-sovereign identity technology.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-offer">
              <i className="flaticon-deep-learning"></i>
              <h3>
                <Link href="/service-details">
                  <a>Streamlining</a>
                </Link>
              </h3>
              <p>
              Our organization aims to reduce administration 
              friction through the development of open source solutions for digital identification using self-sovereign identity (SSI) technology.
              </p>
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
  );
};

export default Services;
