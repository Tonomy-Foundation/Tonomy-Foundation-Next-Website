import React, { Component } from "react";
import Link from "next/link";

class PageBanner extends Component {
  render() {
    let { pageTitle, homePageUrl, homePageText, activePageText } = this.props;

    return (
      <div className="page-title-area item-bg1">
        <div className="container">
          <div className="page-title-content ">
            <h2 className="AboutUsHeader">{pageTitle}</h2>
            <p className="AboutUsText">
              At the Tonomy Foundation, we are committed to empowering democracy
              through the use of cutting-edge, open source technology. Whether
              it's through the implementation of digital identity or the development
              of decentralized autonomous organizations (DAOs), we are
              constantly seeking out new and innovative ways to make a positive
              impact. Our ultimate goal is to reduce friction and improve
              efficiency within commercial organizations, helping them to thrive
              in today's digital age. We believe that by working together and
              leveraging the power of transparency and open source tools, we can
              create a more democratic and equitable world for all.
           
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
     
          <a className="default-btn btn-two" href="https://cal.com/shayan-salehis-btb8mk/30min" target="_blank">
            Free Consultation Meeting
          </a>
        </div> 
      </div>
    );
  }
}

export default PageBanner;
