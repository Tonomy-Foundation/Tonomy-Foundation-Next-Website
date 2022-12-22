import React, { Component } from 'react';
import Link from 'next/link';

class ContactBanner extends Component {
    render() {

        let { pageTitle, homePageUrl, homePageText, activePageText } = this.props;

        return (
            <div className="page-title-area item-bg1">
                <div className="container">
                    <div className="page-title-content ">
                        <h2 className="AboutUsHeader">{pageTitle}</h2>
                        <p className="AboutUsText">
                        If you are interested in any of our products or would like to collaborate with us in any way, scientific or business,
                        please don't hesitate to contact us using the information below.
                        Our team is dedicated to providing the best products and services to our clients and partners,
                        and we are always open to new ideas and ways to work together. So if you have any questions or ideas,
                        please don't hesitate to reach out to us.
                        We look forward to hearing from you and exploring the possibilities of working together.
                        </p>
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
            </div>
        );
    }
}

export default ContactBanner;