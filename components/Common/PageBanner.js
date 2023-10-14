import React, { Component } from "react";
import { gtag_report_conversion_book_discovery } from "../../utils/googleTags";

class PageBanner extends Component {
  render() {
    let { pageTitle, homePageUrl, homePageText, activePageText } = this.props;

    return (
      <div className="page-title-area item-bg1">
        <div className="container">
          <div className="page-title-content ">
            <h2 className="AboutUsHeader">{pageTitle}</h2>
            <p className="AboutUsText">
              Secure, Seamless, Sovereign: Tonomy ID, The Future of Digital Identity.

            </p>
            <span className="text-white pt-6">Contact us for a free consultation meeting</span>

            {/* <ul>
                            <li>
                                <Link href={homePageUrl}>
                                    <a>{homePageText}</a>
                                </Link>
                            </li>
                            <li>{activePageText}</li>
                        </ul> */}
          </div>
        </div>
        <div className="flex-container text-center pt-4">

          <a className="default-btn btn-two" onClick={gtag_report_conversion_book_discovery}>
            Free Consultation Meeting
          </a>
        </div>
      </div>
    );
  }
}

export default PageBanner;
