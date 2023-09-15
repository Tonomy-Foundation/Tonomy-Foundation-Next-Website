import React, { Component } from 'react';

const ComparisonTable = () => {

    return (
        <div className="comparison-table-header">
            <table className="table comparison-table">
                <thead>
                    <tr>
                        <td></td>
                        <td>
                            <h4>Tonomy ID</h4>
                            <p>White Labelled Wallet</p>
                        </td>
                        <td >
                            <h4>Anchor</h4>
                            <p>Multi-Chain Wallet</p></td>
                        <td >
                            <h4>Upland</h4>
                            <p>In-App Web Wallet</p></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Strengths / Weaknesses</td>
                        <td>Usability + Security / Not cross-chain</td>
                        <td>General purpose cross-chain / Usability</td>
                        <td>Usability / Security + Only for 1 App</td>
                    </tr>
                    <tr>
                        <td>Account Creation & Login **</td>
                        <td>1 min 20 seconds</td>
                        <td>2 min 30 seconds</td>
                        <td>1 min 10 seconds</td>
                    </tr>
                    <tr>
                        <td>Wallet Transaction Sign Flow **</td>
                        <td>15 seconds</td>
                        <td>15 seconds</td>
                        <td><i className="bx bx-x"></i></td>
                    </tr>
                    <tr>
                        <td>In-App Transaction Sign Flow</td>
                        <td>Instant</td>
                        <td><i className="bx bx-x"></i></td>
                        <td>Instant</td>
                    </tr>
                    <tr>
                        <td><div>Users Control Keys</div><div>(non-custodial)</div></td>
                        <td><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-x"></i></td>
                    </tr>
                    <tr>
                        <td>Wallets</td>
                        <td>Android, iOS</td>
                        <td >Android, iOS, Desktop</td>
                        <td >Web wallet</td>
                    </tr>
                    <tr>
                        <td>Open Source</td>
                        <td><i className="bx bx-check"></i></td>
                        <td ><div><i className="bx bx-x" /> Mobile</div><div><i className="bx bx-check" /> Desktop</div></td>
                        <td ><i className="bx bx-x"></i></td>
                    </tr>
                    <tr>
                        <td><div>Free Account Creation</div><div>(User doesn't pay)</div></td>
                        <td><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-x"></i><div>($1)</div></td>
                        <td ><i className="bx bx-check"></i></td>
                    </tr>
                    <tr>
                        <td><div>Fully Managed Resources</div><div>(RAM, CPU, NET)</div></td>
                        <td><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-x"></i></td>
                        <td ><i className="bx bx-check"></i></td>
                    </tr>
                    <tr>
                        <td>Recovery</td>
                        <td><i className="bx bx-check"></i><div>Social, hardware, email (coming soon)</div></td>
                        <td ><i className="bx bx-check"></i><div>Private key (certificate) export</div></td>
                        <td ><i className="bx bx-check"></i><div>Email</div></td>
                    </tr>
                    <tr>
                        <td>Single Sign-On</td>
                        <td><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-x"></i></td>
                    </tr>
                    <tr>
                        <td>Self-sovereign Identity</td>
                        <td><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-x"></i></td>
                        <td ><i className="bx bx-x"></i></td>
                    </tr>
                    <tr>
                        <td>Private Data Storage & Sharing</td>
                        <td><i className="bx bx-check"></i></td>
                        <td ><i className="bx bx-x"></i></td>
                        <td ><i className="bx bx-x"></i></td>
                    </tr>
                </tbody>
            </table>
            <p>**Approximate time with no user errors.</p>
        </div>
    );
};

class Comparison extends Component {

    render() {
        return (
            <section className="comparison-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Comparison</span>
                        <h2>Tonomy ID Compared to Other Wallets</h2>
                        <p>Learn about the different Antelope wallets and what their differences are. Each wallet below has different strengths and weaknesses.</p>
                    </div>

                    <ComparisonTable />

                </div>
            </section>
        );
    }
}

export default Comparison;