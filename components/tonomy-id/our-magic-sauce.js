import Link from "next/link";

const OurMagicSauce = () => {
  return (
    <section className="about-area pb-100">
      <div className="container">
        <div className="row align-items-center">


        <div className="col-lg-6">
            <div className="about-content">
              <h2>Our magic sauce: what makes Tonomy ID so special</h2>
              <p>
              ur zero-knowledge architecture is what makes Tonomy ID so special. In Tonomy ID, all user data and authentication secrets are store exclusively in the person's phone and never on our servers unlike most digital identity solutions. This mitigates significant security and privacy issues by ensuring that even if our servers are breached, no user data is compromised. This prevents a large amount of common problems found in most systems. When fully utilized, Tonomy ID practically removes the following issues from your system:
"Server-side security breaches
              </p>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <ul>
                    <li>
                      <i className="flaticon-checked"></i>
                      Server-side security breaches"
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      GDPR and data privacy compliance
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      Phishing attacks
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      Server-side privacy leaks
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <ul>
                    <li>
                      <i className="flaticon-checked"></i>
                      Data sharing and consent control
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      Authentication security compromises
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      Data processing visibility
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      Compromised website security
                    </li> 
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-img">
              <img src="/images/teamwork.svg" alt="Image" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurMagicSauce;
