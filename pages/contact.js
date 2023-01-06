import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import ContactBanner from '../components/Common/ContactBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactFormStyleTwo from '../components/Contact/ContactFormStyleTwo';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />

                <ContactBanner
                    pageTitle="Contact us"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Contact Style One"
                />

                <ContactInfo />

                <ContactFormStyleTwo />

                <Footer />
            </>
        );
    }
}

export default Contact;