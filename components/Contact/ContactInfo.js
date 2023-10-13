import React, { Component } from "react";
import { BOOKING_LINK } from "../Home/MainBanner";
import Link from "next/link";
import { gtag_report_conversion_book_discovery, gtag_report_conversion_join_discord } from "../../utilities/gtagConversions";

class ContactInfo extends Component {

  render() {
    const contactPage = this.props.contactPage;

    return (
      <div className="contact-info-area pt-100 pb-70 center">
        <div className="container ">
          <div className="row center">

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h3>Contact us:</h3>
                <Link href={(contactPage ?? "") + "#contact-form"}>
                  <a>
                    <p>Contact form</p>
                  </a>
                </Link>

                <br></br>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-calendar"></i>
                <h3>Book a discovery meeting:</h3>
                <a
                  onClick={gtag_report_conversion_book_discovery}
                  href={BOOKING_LINK}
                  target="_blank"
                >
                  <p>Book</p>
                </a>
                <br></br>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-support"></i>
                <h3>Chat with us:</h3>
                <a
                  onClick={gtag_report_conversion_join_discord}
                  href="https://www.discord.gg/QqVJz5XF8d"
                  target="_blank"
                >
                  <p>Join our Discord</p>
                </a>
                <br></br>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
