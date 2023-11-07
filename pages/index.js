import MainBanner from '../components/HomeOne/MainBanner'
import Features from '../components/HomeOne/Features'
import WhyChooseUs from '../components/HomeOne/WhyChooseUs'
import Services from '../components/HomeOne/Services'
import WhatWeOffer from "../components/HomeOne/WhatWeOffer"
import Navbar from '../components/Layouts/Navbar'
import Footer from '../components/Layouts/Footer'
import Partner from '../components/Common/Partner';

const Index = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <Features />

            <WhyChooseUs />

            <Services />
            
            <WhatWeOffer/>
            
            <Partner />

            <Footer />
        </>
    )
}

export default Index
