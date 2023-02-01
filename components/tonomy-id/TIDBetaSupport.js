import Link from 'next/link';

const TIDBetaSupport = () => {
    return (
      <section className="choose-ue-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="choose-title">
                <h2>Beta Acces</h2>
                {/* <span>Currently we are working on:</span> */}
              </div>
            </div>
          </div>
  
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-content">
                <ul>
                  <li>
                    <span>
                     <i className="flaticon-technical-support"></i>
                    </span>
                    <h3>Tonomy ID Beta</h3>
                    <p>
                      <a href="/products/tonomy-id">Tonomy ID</a> is a secure and private self-sovereign identity and blockchain wallet that allows users to log in to apps in your ecosystem.
                      Personal information and passwords are stored exclusively on the user's phone, automatically complying with GDPR.
                    </p>
                  </li>
                  <li>
                    <div className="text-center">
                        <Link href="https://www.discord.gg/QqVJz5XF8d">
                            <a className="default-btn">Join us</a>
                        </Link>
                        <Link href="https://www.discord.gg/QqVJz5XF8d">
                            <a className="default-btn">Join us</a>
                        </Link>
                        <Link href="https://www.discord.gg/QqVJz5XF8d">
                            <a className="default-btn">Join us</a>
                        </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="col-lg-6 pl-50">
              <div className="choose-img">
                <img src="/images/teamwork.svg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TIDBetaSupport;
    