import React, { Component } from 'react';
import Link from 'next/link';

class Partner extends Component {
    render() {
        return (
        <><div className="section-title">
                <span></span>
                <h2>Our trusted partners</h2>
            </div><div className="brand-area">
                    <div className="container pb-20">
                        <div className="brand-list">
                            <div className="single-brand">
                                <a href="https://thenewfork.com/" target="_blank">
                                    <img src="/images/brands/The_New_fork.svg" alt="Image" />
                                </a>
                            </div>
                            <div className="single-brand">
                                <a href="https://sparklivinglab.nl/" target="_blank">
                                    <img src="/images/brands/spark.svg" alt="Image" />
                                </a>
                            </div>

                            <div className="single-brand">
                                <a href="https://www.aeresuas.com/" target="_blank">
                                    <img src="/images/brands/aeres.svg" alt="Image" />
                                </a>
                            </div>

                            <div className="single-brand">
                                <a href="https://farmcredibly.com/" target="_blank">
                                    <img src="/images/brands/FarmCredibly.svg" alt="Image" />
                                </a>
                            </div>

                            <div className="single-brand">
                                <a href="https://eosnetwork.com/" target="_blank">
                                    <img src="/images/brands/eosio.svg" alt="Image" />
                                </a>
                            </div>

                            <div className="single-brand">
                                <a href="https://www.newcoin.org/" target="_blank">
                                    <img src="/images/brands/Newcoin.svg" alt="Image" />
                                </a>
                            </div>

                            <div className="single-brand">
                                <a href="https://identity.foundation/" target="_blank">
                                    <img src="/images/brands/dif.svg" alt="Image" />
                                </a>
                            </div>

                            <div className="single-brand">
                                <a href="https://www.w3.org" target="_blank">
                                    <img src="/images/brands/w3c.svg" alt="Image" />
                                </a>
                            </div>

                            <div className="single-brand">
                                <a href="https://telosuk.io" target="_blank">
                                    <img src="/images/brands/TelosUK.svg" alt="Image" />
                                </a>
                            </div>

                            {/* <div className="single-brand">
        <a href="#" target="_blank">
            <img src="/images/brands/brand9.png" alt="Image" />
        </a>
    </div>

    <div className="single-brand">
        <a href="#" target="_blank">
            <img src="/images/brands/brand10.png" alt="Image" />
        </a>
    </div> */}
                        </div>
                    </div>
                </div></>
        );
    }
}

export default Partner;
