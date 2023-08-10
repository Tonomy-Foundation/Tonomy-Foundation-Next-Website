import Link from "next/link";
import Head from "next/head";
const ExperienceTonomyId = () => {
  return (
    <>
      <section className="pt-100 pb-100">
        <div className="container">
          <h1 className="center pb-50">Try out the Tonomy ID Demo Platform</h1>

          <div className="row align-items-center">

            <div className="col-lg-12">
              <div className="center description">
                First, download the Demo app on Google Play or through Testflight.
              </div>
              <div className="row center download-image ">
                <Link href="https://testflight.apple.com/join/7Bdd9jdB">
                  <a target="_blank" className="app-store-img" />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=foundation.tonomy.projects.tonomyiddemo">
                  <a target="_blank" className="google-play-img" />
                </Link>
              </div>
              <div className="center description">
                Then try logging into the Demo Integration Application that shows signing and other features.
              </div>
              <div className="center white">
                <Link href="https://demo.demo.tonomy.foundation">
                  <a target="_blank" className="default-btn white">
                    Demo web app
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "150px" }}>
          <h1 className="center pb-50">Ready to integrate?</h1>

          <div className="row align-items-center">

            <div className="col-lg-12">
              <div className="center description">
                Integration with the demo platform takes less than 30 minutes.
              </div>
              <div className="center">
                <Link href="https://docs.tonomy.foundation">
                  <a target="_blank" className="default-btn white">
                    Developer Documentation
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ExperienceTonomyId;