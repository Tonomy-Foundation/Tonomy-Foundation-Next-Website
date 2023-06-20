import Link from "next/link";
import Head from "next/head";
const TonomySecurity = () => {
  return (
    <>
      <section className="pt-100 pb-100">
        <div className="container">
          <h1 className="center pb-50">Tonomy ID</h1>
          <div className="ratio ratio-16x9">
            <video
              controls
              src="/videos/video.mp4"
              type="video/mp4"
              autoPlay="true"
            />
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src="/images/tonomy-id-security.png"
                  alt="Image"
                  className="tonomy-id-app"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="description">
                Our system is built on the revolutionary technology of
                Self-Sovereign Identity (SSI), which puts the power of digital
                identity back in the hands of the individual. With SSI, you can
                be confident that your personal data is secure and private, and
                that you control who has access to it.
                <br /> No more giving away your personal information to
                third-party providers just to log in to your favorite websites
                or apps.
                <br /> Tonomy offers the most secure and easy-to-use digital
                login system in the world, built on the revolutionary technology
                of Self-Sovereign Identity (SSI), allowing users to securely and
                easily log in to any website or app without ever revealing more
                information than necessary.
              </div>
              <div className="row center download-image ">
                <Link href="">
                  <a className="app-store-img" />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=foundation.tonomy.projects.tonomyidstaging&pli=1">
                  <a className="google-play-img" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TonomySecurity;
