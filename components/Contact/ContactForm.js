import React, { useState } from "react";

const ContactForm = () => {
  return (
    <div className="main-contact-area pb-100" id="contact-form">
      <script src="https://web3forms.com/client/script.js" async defer></script>
      <div className="container">
        <div className="section-title">
          {/* <span>Contact Us</span> */}
          {/* <h2>Drop us a message for any query</h2> */}
          {/* <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quibusdam deleniti porro praesentium.
            Aliquam minus quisquam velit in at nam.
          </p> */}
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="contact-wrap contact-pages mb-0">
              <div className="contact-form">
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                >
                  {/* <form> */}
                  <input
                    type="hidden"
                    name="access_key"
                    value="2046cb66-4cd3-4564-ac99-95701ca65fd3"
                  />
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="form-control"
                          id="mce-FNAME"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="form-control"
                          id="mce-EMAIL"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="Message"
                          cols="30"
                          rows="6"
                          id="mce-MMERGE3"
                          placeholder="Write your message..."
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <button type="submit" className="default-btn btn-two">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="contact-img">
              <img src="/images/contact-img.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
