import Navbar from '../components/Layouts/Navbar'
import MainBanner from '../components/HomeOne/MainBanner'
import Features from '../components/HomeOne/Features'
import WhyChooseUs from '../components/HomeOne/WhyChooseUs'
import Services from '../components/HomeOne/Services'
import Footer from '../components/Layouts/Footer'
import Partner from '../components/Common/Partner';
import Newsletter from '../components/Common/Newsletter'
import WhatWeOffer from "../components/HomeOne/WhatWeOffer"

const Index = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <Features />

            <WhyChooseUs />

            <Services />
            
            <WhatWeOffer/>
            
            {/* <MakeYourBusiness /> */}

            {/* <Partner /> */}

            {/* <Newsletter/> */}

            <Footer />
        </>
    )
}

export default Index
