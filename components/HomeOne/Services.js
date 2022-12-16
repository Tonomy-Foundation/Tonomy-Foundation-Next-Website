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
                We prioritize user trust and happiness & minimize privacy and
                security breaches.
              </p>
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
              <p>
              Making decisions together, the feeling of community - automated budget management
              </p>
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
              <p>
                We have an easy to use blockchain so it's accessable for
                everyone, with user retention!
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
                Automated data privacy and security compliance - fewer passwords
                so it's easier for your users.
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
                Sovereign architecture - privacy, security, cybersecurity and
                autonomous access to your data
              </p>
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
              <p>
                We lower legal frictions and automate instant document
                verification to lower administrational needs
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
