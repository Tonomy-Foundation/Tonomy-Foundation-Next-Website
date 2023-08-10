import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import ExperienceTonomyId from '../components/ExperienceTonomyId/ExperienceTonomyId'

class AboutTonomy extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner
                    pageTitle="Experience Tonomy ID"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Now"
                />

                <ExperienceTonomyId />

                <Footer />
            </>
        );
    }
}

export default AboutTonomy;