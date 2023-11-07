import React, { useState } from "react";

const ContactForm = () => {
  return (
    <div id="contact-form" className="main-contact-area pb-100">
      <div className="container">
        <div className="section-title">
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="contact-wrap contact-pages mb-0">
              <div className="contact-form"> 
              {/* <form action="https://foundation.us12.list-manage.com/subscribe/post?u=fdd40ebf441b888a2d75c41fd&amp;id=da13b0c897&amp;f_id=004f09e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"></form> */}
              <form>
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input type="text" name="FNAME" placeholder="Name" className="form-control" id="mce-FNAME" required /> 
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input type="email" name="EMAIL" placeholder="Email" className="form-control" id="mce-EMAIL" required />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group"> 
                        <textarea
                          name="MMERGE3" cols="30" rows="6" id="mce-MMERGE3" placeholder="Write your message..."className="form-control" required />
                      </div>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                      <button type="submit" onClick={e => btnSubmitClick(e)} className="default-btn btn-two">
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
