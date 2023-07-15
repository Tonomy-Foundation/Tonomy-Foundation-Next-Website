import Navbar from '../components/Layouts/Navbar'
import Footer from '../components/Layouts/Footer'
import ExperienceTonomyId from '../components/tonomy-id/ExperienceTonomyId'
import AboutID from '../components/tonomy-id/about-id'
import OurMagicSauce from '../components/tonomy-id/our-magic-sauce'
import WhyIsTIDBetter from '../components/tonomy-id/WhyIsTIDBetter'
import UseCases from '../components/tonomy-id/UseCases'
import TIDfeatures from '../components/tonomy-id/Features-TonomyID'
import IdBanner from '../components/Common/IdBanner';
import Join from '../components/tonomy-id/join-us';
import MainBanner from '../components/HomeOne/MainBanner'
import Partner from '../components/Common/Partner'
import Features from '../components/HomeOne/Features'
import WhyChooseUs2 from '../components/HomeOne/WhyChooseUs2'
import Demo from '../components/HomeOne/Demo'
import MakeYourBusiness from '../components/Common/MakeYourBusiness'

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
            <AboutID />

            <OurMagicSauce />

            <WhyIsTIDBetter />

            <UseCases />

            <TIDfeatures />
            <Join />

            <Footer />
        </>
    )
}

export default Index
