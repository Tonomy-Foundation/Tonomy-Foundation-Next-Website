import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TestimonialsContent from '../components/Testimonials/TestimonialsContent';
import Footer from '../components/Layouts/Footer';

class Testimonials extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Testimonials" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Testimonials" 
                /> 

                <TestimonialsContent />
                
                <Footer />
            </>
        );
    }
}

export default Testimonials;