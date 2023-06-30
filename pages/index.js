import Navbar from '../components/Layouts/Navbar'
import Footer from '../components/Layouts/Footer'
import TonomySecurity from '../components/tonomy-id/TonomySecurity'
import AboutID from '../components/tonomy-id/about-id'
import OurMagicSauce from '../components/tonomy-id/our-magic-sauce'
import WhyIsTIDBetter from '../components/tonomy-id/WhyIsTIDBetter'
import UseCases from '../components/tonomy-id/UseCases'
import TIDfeatures from '../components/tonomy-id/Features-TonomyID'
import IdBanner from '../components/Common/IdBanner';
import Join from '../components/tonomy-id/join-us';

const Index = () => {
    return (
        <>
            <Navbar />

            <IdBanner
                pageTitle="Tonomy ID"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Contact Style One"
            />

            <TonomySecurity />


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
