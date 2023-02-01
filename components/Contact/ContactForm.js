import React, { useState } from "react";

const ContactForm = () => {
  return (
    <div className="main-contact-area pb-100">
      <div className="container">
        <div className="section-title">
          <span>Contact Us</span>
          <h2>Drop us a message for any query</h2>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="contact-wrap contact-pages mb-0">
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-lg-12 col-md-12"></div>
                    <a
                      href="https://us12.list-manage.com/contact-form?u=fdd40ebf441b888a2d75c41fd&form_id=eee2e8567ab48c31cc20a0349787ec09"
                      target="_blank"
                    >
                      <button className="default-btn btn-two">
                        Contact us!
                      </button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="contact-img">
              <img src="/images/contact-img.webp" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
