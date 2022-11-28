import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CaseStudiesDetailsContent from '../components/CaseStudiesDetails/CaseStudiesDetailsContent';
import CTA from '../components/Common/CTA';
import Footer from '../components/Layouts/Footer';

class CaseStudiesDetails extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner 
          pageTitle="Case Studies Details" 
          homePageUrl="/" 
          homePageText="Home" 
          activePageText="Case Studies Details" 
        /> 

        <CaseStudiesDetailsContent />

        <CTA />
        
        <Footer />
      </>
    );
  }
}

export default CaseStudiesDetails;