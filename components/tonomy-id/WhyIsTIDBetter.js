import Link from "next/link";

const WhyIsTIDBetter = () => {
  return (
    <section className="about-area pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img src="/images/teamwork.svg" alt="Image" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content">
              <h2>Why choose us?</h2>
              <p>
                Tonomy ID is a digital identity wallet tool that utilizes
                advanced technology to authenticate and verify identities with
                high privacy and security, it can be integrated with multiple
                systems and platforms, and has a user-friendly interface. These
                features may make it a more secure and private option than other
                identity verification providers without compromising on
                usability.
              </p>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <ul>
                    <li>
                      <i className="flaticon-checked"></i>
                      Super easy to use
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      Open source
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      Better Privacy for personal data
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <ul>
                    <li>
                      <i className="flaticon-checked"></i>
                      Advanced fraud detection
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      Data security
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      Easy integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIsTIDBetter;
