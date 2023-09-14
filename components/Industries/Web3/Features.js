import React, { Component } from 'react';
import Link from 'next/link';

class Features extends Component {
  render() {
    return (
      <section className="offer-area pt-100 pb-70" id="attack-prevention">
        <div className="container">
          <div className="section-title">
            {/* <span>Tonomy ID Features</span> */}
            <h2>Tonomy ID Features</h2>
            <p>A Mainstream-Ready Web3 and Self-Sovereign Identity Wallet</p>

            <Link href="https://www.canva.com/design/DAFnktNOWKU/Ps1zXw3XICaEMiB0R4Ghkg/view">
              <a target="_blank" className="default-btn white">
                Read the White Paper
              </a>
            </Link>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-cloud-computing"></i>
                <h3>
                  <a>Smart Contract/Blockchain Transactions</a>
                </h3>
                <p>Enhance your blockchain transactions with secure and verified digital identities, ensuring trust and transparency in smart contracts.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-interactivity"></i>
                <h3>
                  <a>W3C Verifiable Credentials</a>
                </h3>
                <p>Implement W3C Verifiable Credentials effortlessly, securing digital identity interactions and enabling seamless trust verification.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-blockchain"></i>
                <h3>
                  <a>Single Sign-On</a>
                </h3>
                <p>Enable Single Sign-On (SSO) with enhanced security and user control, simplifying access to web3 applications.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-target"></i>
                <h3>
                  <a>Tap-to-sign</a>
                </h3>
                <p>Seamlessly sign transactions with a simple click in your app (no need to send users back to the wallet), ensuring security and ease of use in web3 applications.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-choice"></i>
                <h3>
                  <a>Wallet signatures with MFA</a>
                </h3>
                <p>Protect your signatures with multi-factor authentication (MFA), ensuring the utmost security for your digital assets in web3.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-deep-learning"></i>
                <h3>
                  <a>Identity Verification</a>
                </h3>
                <p>Verify user identities with cutting-edge technology, preventing fraud and ensuring trust in web3 applications.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-chip"></i>
                <h3>
                  <a>Bot Protection</a>
                </h3>
                <p>Defend your web3 application against bots and automated attacks, preserving the integrity of your system.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-lock"></i>
                <h3>
                  <a>Non-Custodial Recovery</a>
                </h3>
                <p>Enable non-custodial recovery options for user accounts, ensuring security and accessibility in web3.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-shield"></i>
                <h3>
                  <a>Email Recovery</a>
                </h3>
                <p>Implement secure email recovery solutions, providing users with options to regain access to their accounts in web3 applications.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-target"></i>
                <h3>
                  <a>Sovereign Storage Vault</a>
                </h3>
                <p>Offer users secure sovereign storage solutions, protecting their data and digital assets in web3.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-cloud-computing"></i>
                <h3>
                  <a>Data Sharing</a>
                </h3>
                <p>Enable secure and controlled data sharing among users, enhancing collaboration and trust in web3 ecosystems.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-interactivity"></i>
                <h3>
                  <a>Peer-to-peer messaging</a>
                </h3>
                <p>Facilitate encrypted peer-to-peer messaging, ensuring private and secure communications in web3 applications.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Shape Images */}
        <div className="offer-shape">
          <img src="/images/shape/services-shape/1.png" alt="Image" />
          <img src="/images/shape/services-shape/2.png" alt="Image" />
          <img src="/images/shape/services-shape/3.png" alt="Image" />
          <img src="/images/shape/services-shape/4.png" alt="Image" />
          <img src="/images/shape/services-shape/5.png" alt="Image" />
          <img src="/images/shape/services-shape/6.png" alt="Image" />
        </div>
      </section>
    );
  }
}

export default Features;