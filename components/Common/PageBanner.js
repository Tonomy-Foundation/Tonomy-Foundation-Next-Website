import React, { Component } from 'react';
import Link from 'next/link';

class PageBanner extends Component {
    render() {

        let { pageTitle, homePageUrl, homePageText, activePageText } = this.props;

        return (
            <div className="page-title-area item-bg1">
                <div className="container">
                    <div className="page-title-content ">
                        <h2 className="AboutUsHeader">{pageTitle}</h2>
                        <p className="AboutUsText">
                        At the Tonomy Foundation, our mission is to empower democracy through transparent, open source tools. From digital IDs to DAOs and beyond, we strive to provide innovative solutions for a wide range of blockchains, including Antelope, EOS, Telos, and WAX. Join us in our commitment to building a better, more democratic future.

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

export default PageBanner;