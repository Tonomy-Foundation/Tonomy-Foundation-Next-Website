import MainBanner from '../components/HomeOne/MainBanner'
import Features from '../components/HomeOne/Features'
import Solutions from '../components/HomeOne/Solutions'
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

            <Solutions />

            <Services />

            <JoinTonomy />

            <Partner />

            <Footer />
        </>
    )
}

export default Index
