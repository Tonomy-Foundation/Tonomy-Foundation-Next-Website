import React, { Component } from 'react';
import Link from 'next/link';

class TIDPartner extends Component {
    render() {
        return (
        <><div className="section-title">
                <span></span>
                <h2>Clients</h2>
            </div><div className="brand-area">
                    <div className="container pb-20">
                        <div className="brand-list">

                            <div className="single-brand">
                                <a href="https://eosnetwork.com/" target="_blank">
                                    <img src="/images/brands/eosio.svg" alt="Image" />
                                </a>
                            </div>

                            {/*copy pasta for new clients*/}

                            {/* <div className="single-brand">
                                <a href=" website link here " target="_blank">
                                    <img src="/images/brands/picture-name.svg" alt="Image" />
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div></>
        );
    }
}

export default TIDPartner;
