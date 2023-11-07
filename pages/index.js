import MainBanner from '../components/HomeOne/MainBanner'
import Features from '../components/HomeOne/Features'
import WhyChooseUs from '../components/HomeOne/WhyChooseUs'
import Services from '../components/HomeOne/Services'
import JoinTonomy from "../components/HomeOne/JoinTonomy"
import Navbar from '../components/Layouts/Navbar'
import Footer from '../components/Layouts/Footer'
import Partner from '../components/Common/Partner';
import MissionVision from '../components/HomeOne/MissionVision'

const Index = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <MissionVision />

            <Features />

            <WhyChooseUs />

            <Services />

            <JoinTonomy />

            <Partner />

            <Footer />
        </>
    )
}

export default Index
