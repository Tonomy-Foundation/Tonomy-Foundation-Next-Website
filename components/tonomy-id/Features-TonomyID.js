import React, { Component } from "react";
import Link from "next/link";

const TIDfeatures = () => {
  return (
    <>
      <div className="section-title">
        <h1>Features</h1>
      </div>
      <div className="features-area pt-50 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="single-features2">
                <i className="flaticon-chip"></i>
                <h3>Verifiable Credentials</h3>
                <p>
                Issue, share and verify W3C Verifiable Credentials for private peer-to-peer identity and other data verification, with no middleware identity service needed.
                </p>
              </div>
            </div>

            {/* <div className="col-lg-3">
              <div className="single-features2">
                <i className="flaticon-engineer"></i>
                <h3>Peer-to-peer communication</h3>
                <p>
                  Peer-to-peer (P2P) computing or networking is a distributed
                  application architecture that partitions tasks or workloads
                  between peers. Peers are equally privileged, equipotent
                  participants in the network. They are said to form a
                  peer-to-peer network of nodes.
                </p>
              </div>
            </div> */}
            <div className="col-lg-3">
              <div className="single-features2">
                <i className="flaticon-shield"></i>
                <h3>Phishing Prevention</h3>
                <p>
                Phishing prevention has become essential as more criminals turn towards online scams to steal your personal information. 
                </p>
              </div>
            </div>


            <div className="col-lg-3">
              <div className="single-features2">
                <i className="flaticon-blockchain"></i>
                <h3>Smart Contracts</h3>
                <p>
                  Use scalable smart contracts for decentralized execution of
                  high-security and fault-tollorant parts of your application.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single-features2">
                <i className="flaticon-choice"></i>
                <h3>White labelled</h3>
                <p>
                Adapt Tonomy ID to use your name, brand and color scheme so that it feels like yours to your users.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single-features2">
                <i className="flaticon-technical-support"></i>
                <h3>Built in Multi-factor authentication (MFA)</h3>
                <p>
                  Remove virus and other device-compromising attacks be
                  requiring multiple authentication checks such as PIN,
                  Fingerprint or Face ID.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single-features2">
                <i className="flaticon-cyber-security"></i>
                <h3>No Single Point of Failure</h3>
                <p>
                  Safeguard your system from SPOF to ensure the contiual
                  reliability and availability of your system.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single-features2">
                <i className="flaticon-deep-learning"></i>
                <h3>Cross-platform</h3>
                <p>
                  Tonomy ID is available on iOS and Android and can be used to
                  sign into web and standalone applications on mobile, browser
                  and desktop environments.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="single-features2">
                <i className="flaticon-tick"></i>
                <h3>Low code / No code</h3>
                <p>
                  Our solution includes a fully functioning easy-to-use user
                  interface in which users don't need any prior technical
                  experience or knowledge with our advanced technologies. Anyone
                  who can use Google can use Tonomy.
                </p>
              </div>
            </div>
            
            <div className="col-lg-3">
              <div className="single-features2">
                <i className="flaticon-tick"></i>
                <h3>Guaranteed Access</h3>
                <p>
                Guaranteed Access
                </p>
              </div>
            </div>

            
            <div className="col-lg-3">
              <div className="single-features2">
                <i className="flaticon-tick"></i>
                <h3>Guaranteed User Consent</h3>
                <p>
                Tonomy present consent options to users in a way that balances thorough detail with understandable terms. If consent options are overly vague, users cannot make informed decisions about their data. On the other hand, technical jargon can overwhelm users and again stand in the way of informed consent.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default TIDfeatures;
