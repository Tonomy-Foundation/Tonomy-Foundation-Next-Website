import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import About from '../components/AboutOne/About';
import MakeYourBusiness from '../components/Common/MakeYourBusiness';
import Testimonials from '../components/Common/Testimonials';
import TeamTwo from '../components/Common/TeamTwo';
import Partner from '../components/Common/Partner';
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