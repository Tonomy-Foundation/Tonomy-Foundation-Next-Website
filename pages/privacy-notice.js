import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import Link from 'next/link';

class PrivacyPolicy extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Privacy Policy"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Privacy Policy"
                />

                <div className="text-container ptb-100">
                    <div className="container">

                        <h2>Privacy Notice</h2>

                        <p>This Privacy Notice explains how we collect, use, and protect your personal information on our website.</p>

                        <h4>1. Legal Basis for Data Collection</h4>

                        <p>We collect and process your data based on the legitimate interests pursued by our organization, which include improving our website, understanding user preferences, and optimizing our services.</p>

                        <h4>2. Data Collection</h4>

                        <p>We collect certain data using cookies to enhance your browsing experience and for analytics purposes. This data includes information about your device, browser, and browsing patterns.</p>

                        <h4>3. Cookies and Third-Party Services</h4>

                        <p>We share analytics data with Matomo, an open-source analytics solution, operated by ePrivacy Holding GmbH in the EU, for website analytics. We share data with Google through Google Tag Manager for Google AdWords optimization. </p>

                        <h4>4. Data Security</h4>

                        <p>We prioritize the security of your data and implement appropriate measures to protect it from unauthorized access or disclosure.</p>

                        <h4>5. Your Rights</h4>

                        <p>You have the right to access, rectify, or erase your personal information. You can also object to or restrict processing and request data portability. To exercise these rights, please contact us using the information provided below.</p>

                        <h4>6. Contact Us</h4>

                        <p>For any inquiries regarding your data or this Privacy Notice, please contact us <Link href="/contact"><a>here</a></Link></p>

                        <h4>7. Changes to this Privacy Notice</h4>

                        <p>We may update this Privacy Notice to reflect changes in our practices. We encourage you to review this notice periodically.</p>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default PrivacyPolicy;