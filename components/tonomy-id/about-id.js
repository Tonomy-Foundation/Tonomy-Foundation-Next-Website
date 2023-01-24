import Link from 'next/link';

const AboutID = () => {
    return (
        <section className="about-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6">
                        <div className="about-content">
                            <h3>Tonomy ID</h3>
                                <p>Tonomy ID with SSI <a href="https://www.youtube.com/watch?v=vuSPy1xMNVg">(Self-Sovereign Identity) </a> is a revolutionary way to securely and privately store your personal identity information. It allows you to digitally replace your wallet, storing all your important documents such as bank cards, passport, driver's license, medical records, diplomas, and property deeds. With SSI, you can also log into internet apps and share data privately, securely, and with consent.</p>
                                <p>Our open-source <a href="https://play.google.com/store/apps/details?id=foundation.tonomy.projects.tonomyidstaging">mobile app</a> software offers sovereign recovery, sybil protection, and SSI, making it more secure than traditional web-based systems. It is available for both iOS and Android devices.
                                Digital ID with SSI can also serve as a replacement for existing custodial identity systems such as email, oAuth, and openID connect. It offers a new sovereign internet architecture, allowing for autonomous access and data control without the need for SPF or custodians.
                                For more information, <a href="https://www.youtube.com/watch?v=HXTB2_Fki6s&t=2s">watch our Digital ID workshop</a> and discover the many ways that this innovative technology can benefit you.</p>
                        </div>
                </div>

                <div className="col-lg-6">
                        <div className="about-img">
                            <img src="/images/tonomy-id.jpg" alt="Image" className="tonomy-id-app" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutID