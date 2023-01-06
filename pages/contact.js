import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import ContactBanner from '../components/Common/ContactBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactFormStyleTwo from '../components/Contact/ContactFormStyleTwo';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Footer from '../components/Layouts/Footer';

const url = "https://us12.list-manage.com/contact-form?u=fdd40ebf441b888a2d75c41fd&form_id=eee2e8567ab48c31cc20a0349787ec09";

class Contact extends Component {
    
    handleValidated = (formData) => {
        console.log(formData);
        // You can submit the formData to your server here
    }

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

                <MailchimpSubscribe
                    url={url}
                    render={({ subscribe, status, message }) => (
                        <ContactFormStyleTwo
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                    )}
                />

                <Footer />
            </>
        );
    }
}

export default Contact;