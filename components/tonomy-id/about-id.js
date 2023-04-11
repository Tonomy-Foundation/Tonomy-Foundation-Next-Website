import Head from "next/head";
import Link from "next/link";

const AboutID = () => {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://tonomy.matomo.cloud/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src='//cdn.matomo.cloud/tonomy.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `,
          }}
        />
      </Head>
      <section className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <h1>
                  The most secure easy-to-use digital login system in the world
                </h1>
                The digital world is like the sea, vast and ever-changing. And
                just like the sea, it can be dangerous, murky and full of hidden
                threats. But we have built a lighthouse in this sea, a beacon of
                safety and security.
                <br />
                <br /> Our high-security open-source digital identity and
                authentication application is like a compass that guides you
                through the tumultuous digital waters. With the use of
                self-sovereign identity and web 3.0 technologies, you can login
                and access internet applications with the assurance of privacy
                and autonomy.
                <br />
                <br /> No longer will you have to fear the dangers of the
                digital sea, for our lighthouse will always lead you safely to
                shore.
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src="/images/home-screen.png"
                  alt="Image"
                  className="tonomy-id-app"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutID;
