import Navbar from '../components/Layouts/Navbar'
import Footer from '../components/Layouts/Footer'
import MainBanner from '../components/Home/MainBanner'
import Partners from '../components/Home/Partners'
import BusinessImpact from '../components/Home/BusinessImpact'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import Demo from '../components/Common/Demo'
import CyberSecurityStatistics from '../components/Home/CyberSecurityStatistics'
import AttackPrevention from '../components/Home/AttackPrevention'
import ComplianceSlider from '../components/Home/ComplianceSlider'
import Head from 'next/head'
import FeatureSSO from '../components/Home/FeatureSSO'
import FeatureSigner from '../components/Home/FeatureSigner'
import FeatureSovereignVault from '../components/Home/FeatureSovereignVault'
import FeatureOthers from '../components/Home/FeatureOthers'
import Testimonials from '../components/Home/Testimonials'

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

            <CyberSecurityStatistics />

            <BusinessImpact />

            <WhyChooseUs />

            <Testimonials />

            <FeatureSSO />

            <FeatureSigner />

            <FeatureSovereignVault />

            <FeatureOthers />

            <Demo />

            <Partners />

            <AttackPrevention />

            <ComplianceSlider />

            <Footer />
        </>
    )
}

export default Index
