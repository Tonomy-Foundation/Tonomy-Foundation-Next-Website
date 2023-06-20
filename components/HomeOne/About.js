import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <section className="about-area pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img src="/images/about-img.webp" alt="Image" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content">
              <h2>Who is our technology for?</h2>
              <p>
                Who is the technology for, what is our target audience? We do
                not know what our target audience will eventually be, but right
                now in this exact moment, our technology which we are creating
                will mostly be for different kinds of institutions. Think of
                companies, organizations, foundations. but also schools or even
                local municipalities and governments. Right now those are the
                ones we are trying to provide for, we are striving to make a
                good almost perfect product to help all those different kinds of
                people to achieve something they never thought they could
                achieve and all with a little help from Tonomy!
              </p>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <ul>
                    <li>
                      <i className="flaticon-checked"></i>
                      governments
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      Governments on national level
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      Governments on local level
                    </li>
                  </ul>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <ul>
                    <li>
                      <i className="flaticon-checked"></i>
                      Industry
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      Medical Industry
                    </li>
                    <li>
                      <i className="flaticon-checked"></i>
                      The supply chain Industry
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="/about-1">
                <a className="default-btn">Learn More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
