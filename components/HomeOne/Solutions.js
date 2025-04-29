import Link from "next/link";

export default function OurSolutions() {
  return (
    <section className="choose-ue-area pb-100">
      <div className="container">

        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="choose-title choose-title-center big-span">
                <h2>Our Application Solutions</h2>
                <span>We build web3 compatible, high security and mainstream-ready application systems.</span>
              </div>
            </div>

            <div className="choose-content">
              <ul>
                <li>
                  <span>
                    01 <i className="flaticon-diamond"></i>
                  </span>
                  <h3>Tonomy</h3>
                  <p className="product-tag">
                    Active Token Sale
                  </p>
                  <p>
                    Tonomy introduces an innovative digital platform for autonomous ID and collaborative global governance.
                    Leveraging the robust Tonomy Governance OS, Tonomy is a blueprint for a system where
                    collective decision-making on global issues is transparent, inclusive, and effective.
                    It ensures high integrity in governance, fostering trust among global citizens and between entities.
                  </p>
                  <div>
                    <Link href="https://tonomy">
                      <a className="default-btn" target="_blank">Visit Website</a>
                    </Link>
                  </div>
                </li>

                <li>
                  <span>
                    02 <i className="flaticon-shield"></i>
                  </span>
                  <h3>Tonomy ID</h3>
                  <p className="product-tag">
                    Live and Assisting Clients with Identity and Security
                  </p>
                  <p>
                    A secure and private self-sovereign identity and blockchain wallet that
                    allows users to log in to apps in your ecosystem. Personal
                    information and passwords are stored exclusively on the
                    user's phone, automatically complying with GDPR.
                  </p>
                  <div>
                    <Link href="https://tonomy.io">
                      <a className="default-btn" target="_blank">Visit Website</a>
                    </Link>
                  </div>
                </li>

                <li className="ml">
                  <span>
                    03 <i className="flaticon-project-management"></i>
                  </span>
                  <h3>Tonomy Participate</h3>
                  <p className="product-tag">
                    Built
                  </p>
                  <p>
                    A democratic voting tool to allow citizens to participate in building their neighborhood.
                  </p>
                  <div>
                    <Link href="https://theblockstalk.medium.com/civic-participation-tool-upgrade-to-openstad-e7aed01c5271">
                      <a className="default-btn" target="_blank">Read Overview</a>
                    </Link>
                  </div>
                </li>

              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row">
              <div className="choose-title choose-title-center big-span">
                <h2>Our Infrastructure Solutions</h2>
                <span>We make major contributions to the libraries in the broader web3 and self-sovereign identity ecosystems.</span>
              </div>
            </div>

            <div className="choose-content choose-content-right">
              <ul>
                <li className="ml">
                  <span>
                    04 <i className="flaticon-technical-support"></i>
                  </span>
                  <h3>W3C Conditional Proof</h3>
                  <p className="product-tag">
                    Written and Adopted
                  </p>
                  <p>
                    A new standard that extends the use of W3C DIDs and Verifiable Credentials to present and verify
                    proofs with multiple signature and delegated signature conditions. We led the standard process
                    in collaboration with the <a href="https://w3c-ccg.github.io/" target="_blank">W3C Credentials
                      Community Group</a>.
                  </p>
                  <div>
                    <Link href="https://github.com/w3c-ccg/verifiable-conditions">
                      <a className="default-btn" target="_blank">Read Standard</a>
                    </Link>
                  </div>
                </li>

                <li className="ml">
                  <span>
                    05 <i className="flaticon-technical-support"></i>
                  </span>
                  <h3>Telos UK</h3>
                  <p className="product-tag">
                    Telos Mainnet Block Producer
                  </p>
                  <p>
                    Tonomy Foundation runs a high-performance block producer on the <a href="https://telos.net" target="_blank">Telos</a> mainnet.
                    We use Ansible IaaC solution to efficiently manage protocol and server upgrades while
                    adhering to the high performance and governance standards of the network.
                  </p>
                  <div>
                    <Link href="/telos-uk">
                      <a className="default-btn">Read More</a>
                    </Link>
                  </div>
                </li>

                <li className="ml">
                  <span>
                    06 <i className="flaticon-technical-support"></i>
                  </span>
                  <h3>Antelope DID</h3>
                  <p className="product-tag">
                    Written, Built and Adopted
                  </p>
                  <p>
                    The <a href="https://antelope.io/" target="_blank">Antelope DID Method</a> standard
                    and <a href="https://antelope.io/" target="_blank">Antelope DID Resolver</a> implementation
                    that works with all <a href="https://antelope.io/" target="_blank">Antelope</a> protocol
                    blockchains. We lead and made major contributions to this library as part of the Antelope Identity Working Group.
                  </p>
                  <div>
                    <Link href="https://github.com/Tonomy-Foundation/antelope-did-spec">
                      <a className="default-btn" target="_blank">Read Standard</a>
                    </Link>
                  </div>
                </li>

                <li className="ml">
                  <span>
                    07 <i className="flaticon-technical-support"></i>
                  </span>
                  <h3>DIF SSI Libraries</h3>
                  <p className="product-tag">
                    Changes Merged
                  </p>
                  <p>
                    We implemented major changes into the <a href="https://identity.foundation/" target="_blank">Decentralized
                      Identity Foundation's</a> main three SSI libraries to allow multiple signature and
                    delegated signature conditions. This effectively implemented the W3C Conditional
                    Proof standard in the DIF libraries. these libraries are currently
                    the most used libraries in the self-sovereign identity ecosystem.
                  </p>
                  <div>
                    <Link href="https://blog.tonomy.foundation/tonomy-foundation-brings-delegated-multi-signatures-to-decentralized-identity-foundations-did-jwt-51c726b89f0e">
                      <a className="default-btn" target="_blank">Read Article</a>
                    </Link>
                  </div>
                </li>

                <li className="ml">
                  <span>
                    08 <i className="flaticon-technical-support"></i>
                  </span>
                  <h3>Antelope SSI Toolkit</h3>
                  <p className="product-tag">
                    Implemented
                  </p>
                  <p>
                    A toolkit to allow use of W3C Verifiable Credentials from DIDs
                    on <a href="https://antelope.io/" target="_blank">Antelope</a> powered blockchains.
                  </p>
                  <div>
                    <Link href="https://github.com/Tonomy-Foundation/Antelope-SSI-Toolkit/blob/master/README.md">
                      <a className="default-btn" target="_blank">View Software</a>
                    </Link>
                  </div>
                </li>

              </ul>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
