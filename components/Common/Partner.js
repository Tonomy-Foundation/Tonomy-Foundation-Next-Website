import React, { Component } from 'react';
import Link from 'next/link';

class Partner extends Component {
    render() {
        return (
        <><div className="section-title">
                <span></span>
                <h2>Our trusted partners</h2>
            </div><div className="brand-area">
                    <div className="container">
                        <div className="brand-list">
                            <div className="single-brand">
                                <a href="https://thenewfork.com/" target="_blank">
                                    <img src="/images/brands/The_New_Fork.png" alt="Image" />
                                </a>
                            </div>

                            <div className="single-brand">
                                <a href="https://sparklivinglab.nl/" target="_blank">
                                    <img src="/images/brands/spark.png" alt="Image" />
                                </a>
                            </div>

                            <div className="single-brand">
                                <a href="https://www.aeresuas.com/" target="_blank">
                                    <img src="/images/brands/aeres.png" alt="Image" />
                                </a>
                            </div>

                            <div className="single-brand">
                                <a href="https://farmcredibly.com/" target="_blank">
                                    <img src="/images/brands/FarmCredibly.png" alt="Image" />
                                </a>
                            </div>

                            <div className="single-brand">
                                <a href="https://eosnetwork.com/" target="_blank">
                                    <img src="/images/brands/eosio.png" alt="Image" />
                                </a>
                            </div>

                            <div className="single-brand">
                                <a href="https://www.newcoin.org/" target="_blank">
                                    <img src="/images/brands/Newcoin.png" alt="Image" />
                                </a>
                            </div>

                            <div className="single-brand">
                                <a href="https://identity.foundation/" target="_blank">
                                    <img src="/images/brands/dif.png" alt="Image" />
                                </a>
                            </div>

                            <div className="single-brand">
                                <a href="https://www.w3.org" target="_blank">
                                    <img src="/images/brands/w3c.png" alt="Image" />
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