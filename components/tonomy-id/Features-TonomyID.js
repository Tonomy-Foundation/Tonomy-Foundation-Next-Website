import React, { Component } from 'react';
import Link from 'next/link';

const TIDfeatures = () => {

    return (
        <section className="industries-area pb-100">
            <div className="container pt-20">
                <div className="section-title">
                    <h2>Features</h2>
                    <p>Here we have all of our features stated</p>
                </div>
                                {/* Tab item #1 */}
                                        <div className="col-lg-12">
                                            <div className="industries-content">
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Self sovereign identity
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Verifiable credentials
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Peer to peer communication
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                smart contracts
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Transaction signing
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                White labelled
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Built in MFA

                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-6">
                                                        <ul className="industries-item">
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                No Single Point of Failure
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Data minimization
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Cross-platform
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Low code / no code
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                sovereign security
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Multipurpose
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-checked"></i>
                                                                Decentralized
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
        </section>
    )
}

export default TIDfeatures;