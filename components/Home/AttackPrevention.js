import React, { Component } from 'react';
import Link from 'next/link';
import { gtag_report_conversion_visit_whitepaper } from '../../utilities/googleTags';

class AttackPrevention extends Component {
  render() {
    return (
      <section className="offer-area pt-100 pb-70" id="attack-prevention">
        <div className="container">
          <div className="section-title">
            <span>Attack Prevention</span>
            <h2>A Sovereign Architecture To Prevent Cybersecurity Attacks</h2>
            <p>Tonomy ID <strong>removes</strong> or significantly reduces these attacks using it's unique sovereign architecture.</p>

            <Link href="https://www.canva.com/design/DAFnktNOWKU/Ps1zXw3XICaEMiB0R4Ghkg/view">
              <a target="_blank" className="default-btn white" onClick={gtag_report_conversion_visit_whitepaper}>
                Read the White Paper
              </a>
            </Link>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-cloud-computing"></i>
                <h3>
                  <a>Database Breaches</a>
                </h3>
                <p>Storing user data and private keys on users' devices eliminates the risk of attackers targeting and compromising centralized databases.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-interactivity"></i>
                <h3>
                  <a>Man-in-the-Middle Attacks</a>
                </h3>
                <p>The use of encryption and digital signatures prevents attackers from intercepting and modifying data in transit, safeguarding against unauthorized tampering or eavesdropping.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-blockchain"></i>
                <h3>
                  <a>Insider Threats</a>
                </h3>
                <p>With decentralised user data, the risk of insider attacks and malicious insiders gaining unauthorized access to sensitive information is mitigated.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-target"></i>
                <h3>
                  <a>Phishing Attacks</a>
                </h3>
                <p>With password-less login and storing private keys locally reduces the vulnerability to phishing attacks where attackers attempt to trick users into revealing their credentials or sensitive data.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-choice"></i>
                <h3>
                  <a>Denial-of-Service (DoS) Attacks</a>
                </h3>
                <p>By moving user data to devices, the impact of DoS attacks targeting centralized servers can be minimized, ensuring continued access to personal information.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-deep-learning"></i>
                <h3>
                  <a>Tampering and Data Integrity Attacks</a>
                </h3>
                <p>End-to-end digital signatures and encryption ensure that data remains intact and unaltered during transit, mitigating the risk of tampering and maintaining data integrity.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-chip"></i>
                <h3>
                  <a>Identity Spoofing</a>
                </h3>
                <p>Digital signatures provide a reliable means to verify the authenticity of senders, preventing malicious actors from impersonating legitimate entities and reducing the risk of identity spoofing attacks.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-lock"></i>
                <h3>
                  <a>Brute Force Attacks</a>
                </h3>
                <p>User data stored on devices makes it more challenging for attackers to launch brute force attacks against centralized databases or authentication systems.</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-shield"></i>
                <h3>

                  <a>Server Exploitation</a>

                </h3>
                <p>Moving user data and private keys off servers removes the attack surface for server-based vulnerabilities, such as code injection or privilege escalation.</p>
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

export default AttackPrevention;