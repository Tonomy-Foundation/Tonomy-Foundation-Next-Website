import Navbar from '../components/Layouts/Navbar'
import Footer from '../components/Layouts/Footer'
import MainBanner from '../components/HomeOne/MainBanner'
import Partner from '../components/Common/Partner'
import BusinessImpact from '../components/HomeOne/BusinessImpact'
import WhyChooseUs2 from '../components/HomeOne/WhyChooseUs2'
import Demo from '../components/HomeOne/Demo'
import CyberSecurityStatistics from '../components/Common/CyberSecurityStatistics'
import AttackPrevention from '../components/HomeOne/AttackPrevention'
import ComplianceSlider from '../components/HomeOne/ComplianceSlider'
import Head from 'next/head'

const Index = () => {
    return (
        <>
            <Head>
                <title>Transform Your Cybersecurity with Tonomy ID's Digital Identity Wallet</title>
                <meta
                    name="description"
                    content="Elevate your cybersecurity strategy with Tonomy ID. Our digital identity wallet empowers users with secure authentication, fraud-proof data, and GDPR compliance. Stay ahead of evolving threats with ease."
                />
            </Head>
            <Navbar />

            <MainBanner />

            <Partner />

            <BusinessImpact />

            <WhyChooseUs2 />

            <Demo />

            <CyberSecurityStatistics />

            <AttackPrevention />

            <ComplianceSlider />

            <Footer />
        </>
    )
}

export default Index
