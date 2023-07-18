import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import ExperienceTonomyId from '../components/tonomy-id/ExperienceTonomyId';

class About1 extends Component {
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
                {/* <About />

                <MakeYourBusiness />

                <Testimonials />

                <TeamTwo />

                <div className="pb-50">
                    <Partner />
                </div> */}

                <Footer />
            </>
        );
    }
}

export default About1;