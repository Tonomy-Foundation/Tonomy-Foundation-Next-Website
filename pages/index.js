import Navbar from '../components/Layouts/Navbar'
import MainBanner from '../components/HomeOne/MainBanner'
import Features from '../components/HomeOne/Features'
import About from '../components/AboutOne/About'
import WhyChooseUs from '../components/HomeOne/WhyChooseUs'
import Services from '../components/HomeOne/Services'
import MakeYourBusiness from '../components/Common/MakeYourBusiness'
import WhatWeOffer from '../components/HomeOne/WhatWeOffer'
import Testimonials from '../components/Common/Testimonials'
import News from '../components/Common/News'
import Footer from '../components/Layouts/Footer'
import Partner from '../components/Common/Partner';
import Newsletter from '../components/Common/Newsletter'

const Index = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <Features />

            <WhyChooseUs />

            <Services />
        
            <Partner />

            <Newsletter/>
                        
            <Footer />
        </>
    )
}

export default Index
