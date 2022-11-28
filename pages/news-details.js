import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import NewsDetailsContent from '../components/News/NewsDetailsContent';
import Footer from '../components/Layouts/Footer';

class NewsDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="News Details" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="News Details" 
                /> 

                <NewsDetailsContent />
                
                <Footer />
            </>
        );
    }
}

export default NewsDetails;