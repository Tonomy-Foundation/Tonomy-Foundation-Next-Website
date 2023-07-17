import Navbar from '../components/Layouts/Navbar'
import Footer from '../components/Layouts/Footer'
import MainBanner from '../components/HomeOne/MainBanner'
import Partner from '../components/Common/Partner'
import Features from '../components/HomeOne/Features'
import WhyChooseUs2 from '../components/HomeOne/WhyChooseUs2'
import Demo from '../components/HomeOne/Demo'
import MakeYourBusiness from '../components/Common/MakeYourBusiness'
import Services from '../components/HomeOne/Services'
import ComplianceSlider from '../components/HomeOne/ComplianceSlider'

const Index = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <div className="pb-50">
                <Partner />
            </div>

            <Features />

            <WhyChooseUs2 />

            <Demo />

            <MakeYourBusiness />

            <Services />

            <ComplianceSlider />

            <Footer />
        </>
    )
}

export default Index
