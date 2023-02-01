import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import ContactBanner from '../components/Common/ContactBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Layouts/Footer';

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

                <ContactForm />

                <Footer />
            </>
        );
    }
}

export default Contact;